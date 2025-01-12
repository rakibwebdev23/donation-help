import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const navLinks = [
        { path: "/", label: "Home" },
        { path: "/needhelp", label: "Need Help" },
        { path: "/statistics", label: "Statistics" },
        { path: "/about", label: "About" }
    ];

    const NavItem = ({ path, label, isMobile = false }) => (
        <NavLink
            to={path}
            className={({ isActive }) =>
                isActive
                    ? isMobile
                        ? "text-white font-bold border-b-2 border-black"
                        : "text-white border-b-2 border-black font-bold"
                    : `hover:text-${isMobile ? 'gray-400' : 'white'} transition-colors`
            }
            onClick={isMobile ? toggleMenu : undefined}
        >
            {label}
        </NavLink>
    );

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
                            {navLinks.map(link => (
                                <NavItem key={link.path} {...link} />
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
                            <ul className="flex flex-col items-center space-y-4 ">
                                {navLinks.map(link => (
                                    <li key={link.path}>
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