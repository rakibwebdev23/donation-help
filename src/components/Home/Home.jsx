import AboutSection from "../AboutSection/AboutSection";
import Banner from "../Banner/Banner";
import DonatesHelp from "../DonatesHelp/DonatesHelp";
import Policy from "../Policy/Policy";
import HelmetShare from "../Shared/HelmetShare/HelmetShare";

const Home = () => {
    return (
        <div>
            <HelmetShare caption="Home"></HelmetShare>
            <Banner></Banner>
            <Policy></Policy>
            <AboutSection></AboutSection>
            <DonatesHelp></DonatesHelp>
        </div>
    );
};

export default Home;