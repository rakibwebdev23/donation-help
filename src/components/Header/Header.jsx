import { useState } from "react";
import { NavLink } from "react-router-dom";
import imgLogo from "../../../public/donation.png";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-gradient-to-r from-pink-500 to-red-500 shadow-lg">
            <div className="container mx-auto flex items-center justify-between px-6 py-4">
                <NavLink to="/">
                    <img className="w-14 h-auto" src={imgLogo} alt="Donation Logo" />
                </NavLink>
                <nav className="hidden md:flex space-x-6 font-semibold text-black">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive
                                ? "text-white border-b-2 border-black"
                                : "hover:text-white transition-colors"
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/donation"
                        className={({ isActive }) =>
                            isActive
                                ? "text-white border-b-2 border-black"
                                : "hover:text-white transition-colors"
                        }
                    >
                        Donation
                    </NavLink>
                    <NavLink
                        to="/statistics"
                        className={({ isActive }) =>
                            isActive
                                ? "text-white border-b-2 border-black"
                                : "hover:text-white transition-colors"
                        }
                    >
                        Statistics
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            isActive
                                ? "text-white border-b-2 border-black"
                                : "hover:text-white transition-colors"
                        }
                    >
                        About
                    </NavLink>
                </nav>
                <button
                    className="md:hidden text-white focus:outline-none"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? (
                        <svg
                            className="w-6 h-6"
                            xmlns="http://www.w3.org/2000/svg"
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
                            xmlns="http://www.w3.org/2000/svg"
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
            {isMenuOpen && (
                <nav
                    className="md:hidden bg-pink-600 text-white fixed top-0 left-0 w-full h-1/2 z-50 bg-opacity-90"
                >
                    <ul className="flex flex-col items-center space-y-4 py-6">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-blue-500 font-bold"
                                        : "hover:text-gray-400 transition-colors"
                                }
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/donation"
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-blue-500 font-bold"
                                        : "hover:text-gray-400 transition-colors"
                                }
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Donation
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/statistics"
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-blue-500 font-bold"
                                        : "hover:text-gray-400 transition-colors"
                                }
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Statistics
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-blue-500 font-bold"
                                        : "hover:text-gray-400 transition-colors"
                                }
                                onClick={() => setIsMenuOpen(false)}
                            >
                                About
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            )}
        </header>
    );
};

export default Header;
