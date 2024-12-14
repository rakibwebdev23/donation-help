import ActiveLink from "../ActiveLink/ActiveLink";
import imgLogo from "../../assets/donation.png"
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="flex justify-between items-center w-full h-8 my-12">
            <Link to="/"><img className="lg:w-20 w-14" src={imgLogo} alt="" /></Link>
            <div className="flex gap-6 font-semibold text-black">
                <ActiveLink to='/'>Home</ActiveLink>
                <ActiveLink to='/donation'>Donation</ActiveLink>
                <ActiveLink to='/statistics'>Statistics</ActiveLink>
                <ActiveLink to='/about'>About</ActiveLink>
            </div>
        </div>
    );
};

export default Header;