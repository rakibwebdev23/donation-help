import ActiveLink from "../ActiveLink/ActiveLink";

const Header = () => {
    return (
        <div className="flex justify-between items-center">
            <div>
                <img className="w-24 h-20" src="/src/assets/donation.png" alt="" />
            </div>
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