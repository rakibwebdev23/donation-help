import { useState } from "react";
import ActiveLink from "../ActiveLink/ActiveLink";
import imgLogo from "../../../public/donation.png";
import { Link } from "react-router-dom";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="flex justify-between items-center w-full py-3 px-4 lg:pr-6 bg-black">
            <Link to="/">
                <img className="lg:w-20 w-14" src={imgLogo} alt="Logo" />
            </Link>

            {/* Desktop Navbar */}
            <div className="hidden md:flex gap-6 font-semibold text-cyan-500">
                <ActiveLink to="/">Home</ActiveLink>
                <ActiveLink to="/donation">Donation</ActiveLink>
                <ActiveLink to="/statistics">Statistics</ActiveLink>
                <ActiveLink to="/about">About</ActiveLink>
            </div>

            {/* Mobile Menu Button */}
            <button
                className="md:hidden text-black focus:outline-none"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                {/* Hamburger Icon */}
                <svg
                    className="w-6 h-6 text-white ml-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                </svg>
            </button>

            {/* Mobile Dropdown Menu */}
            <div
                className={`absolute top-16 right-0 bg-white shadow-lg rounded-lg z-10 w-48 md:hidden ${
                    isMenuOpen ? "block" : "hidden"
                }`}
            >
                <ul className="flex flex-col gap-4 p-4 font-semibold text-black">
                    <li>
                        <ActiveLink to="/" onClick={() => setIsMenuOpen(false)}>Home</ActiveLink>
                    </li>
                    <li>
                        <ActiveLink to="/donation" onClick={() => setIsMenuOpen(false)}>Donation</ActiveLink>
                    </li>
                    <li>
                        <ActiveLink to="/statistics" onClick={() => setIsMenuOpen(false)}>Statistics</ActiveLink>
                    </li>
                    <li>
                        <ActiveLink to="/about" onClick={() => setIsMenuOpen(false)}>About</ActiveLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
