import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { user, logOut } = useAuth();

  // Navigation menu items
  const menuItems = [
    { path: "/", label: "Home" },
    { path: "/needhelp", label: "Need Help" },
    { path: "/about", label: "About" }
  ];

  // Handle user logout
  const handleLogout = () => {
    logOut();
    navigate('/');
    setIsMenuOpen(false);
  };

  // Single NavLink component for both mobile and desktop
  const NavItem = ({ path, label, onClick, isMobile }) => (
    <NavLink
      to={path}
      className={({ isActive }) =>
        `transition-colors duration-200 ${
          isActive 
            ? "text-white font-bold border-b-2 border-black" 
            : "text-black hover:text-white"
        }`
      }
      onClick={() => {
        if (onClick) onClick();
        if (isMobile) setIsMenuOpen(false);
      }}
    >
      {label}
    </NavLink>
  );

  return (
    <div className="bg-[#ed3050] sticky top-0 z-50">
      <header className="container mx-auto">
        <div className="flex items-center justify-between px-6 lg:px-0 py-7">
          {/* Logo */}
          <NavLink to="/" className="text-2xl font-bold text-black">
            CFBD.
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 font-bold">
            {/* Main menu items */}
            {menuItems.map((item) => (
              <NavItem key={item.path} {...item} />
            ))}
            
            {/* Authentication */}
            {user ? (
              <div className="flex items-center space-x-6">
                {/* Sign Out Button */}
                <button
                  onClick={handleLogout}
                  className="text-black hover:text-white transition-colors"
                >
                  Sign Out
                </button>
                
                {/* User Avatar */}
                {user.photoURL && (
                  <img
                    src={user.photoURL}
                    alt="Profile"
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                )}
              </div>
            ) : (
              <NavItem path="/signin" label="Sign In" />
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-black p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-[#ed3050] z-50">
            <div className="flex flex-col h-full">
              {/* Close button */}
              <div className="flex justify-end p-6">
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="text-black"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Mobile menu items */}
              <nav className="flex flex-col items-center space-y-6 pt-10">
                {menuItems.map((item) => (
                  <NavItem key={item.path} {...item} isMobile={true} />
                ))}
                
                {user ? (
                  <>
                    <button
                      onClick={handleLogout}
                      className="text-black hover:text-white transition-colors font-bold"
                    >
                      Sign Out
                    </button>
                    {user.photoURL && (
                      <img
                        src={user.photoURL}
                        alt="Profile"
                        className="w-16 h-16 rounded-full border-2 border-white"
                      />
                    )}
                  </>
                ) : (
                  <NavItem path="/signin" label="Sign In" isMobile={true} />
                )}
              </nav>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;