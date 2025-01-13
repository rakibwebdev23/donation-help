import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    // Check login status when component mounts
    useEffect(() => {
        const user = localStorage.getItem('user');
        setIsLoggedIn(!!user);
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const handleLogout = () => {
        localStorage.removeItem('user');
        setIsLoggedIn(false);
        navigate('/');
    };

    const baseNavLinks = [
        { path: "/", label: "Home" },
        { path: "/needhelp", label: "Need Help" },
        { path: "/about", label: "About" }
    ];

    // Dynamically add login/logout to nav links
    const navLinks = [
        ...baseNavLinks,
        isLoggedIn 
            ? { path: "#", label: "Logout", onClick: handleLogout }
            : { path: "/signin", label: "Sign In" , }
    ];

    const NavItem = ({ path, label, onClick, isMobile = false }) => {
        const handleClick = (e) => {
            if (onClick) {
                e.preventDefault();
                onClick();
            }
            if (isMobile) {
                toggleMenu();
            }
        };

        return (
            <NavLink
                to={path}
                className={({ isActive }) =>
                    isActive && path !== "#"
                        ? isMobile
                            ? "text-white font-bold border-b-2 border-black"
                            : "text-white border-b-2 border-black font-bold"
                        : `hover:text-${isMobile ? 'gray-400' : 'white'} transition-colors`
                }
                onClick={handleClick}
            >
                {label}
            </NavLink>
        );
    };

    return (
        <div className="bg-[#ed3050] sticky top-0 z-50">
            <header className="relative">
                <div className="container mx-auto">
                    <div className="mx-auto flex items-center justify-between px-6 lg:px-0 py-7">
                        <NavLink to="/">
                            <h2 className="text-2xl font-bold">CFBD.</h2>
                        </NavLink>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex space-x-8 font-bold text-black">
                            {navLinks.map((link, index) => (
                                <NavItem key={link.path + index} {...link} />
                            ))}
                        </nav>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden text-white focus:outline-none"
                            onClick={toggleMenu}
                            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        >
                            {isMenuOpen ? (
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>

                    {/* Mobile Navigation */}
                    {isMenuOpen && (
                        <nav className="md:hidden fixed top-0 left-0 w-full h-full bg-[#ed3050] z-50">
                            <div className="flex justify-end p-4">
                                <button
                                    onClick={toggleMenu}
                                    className="text-white"
                                    aria-label="Close menu"
                                >
                                    <svg
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </div>
                            <ul className="flex flex-col items-center space-y-4">
                                {navLinks.map((link, index) => (
                                    <li key={link.path + index}>
                                        <NavItem {...link} isMobile={true} />
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    )}
                </div>
            </header>
        </div>
    );
};

export default Header;