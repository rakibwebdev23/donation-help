import AboutSection from "../AboutSection/AboutSection";
import Banner from "../Banner/Banner";
import DonatesHelp from "../DonatesHelp/DonatesHelp";
import Policy from "../Policy/Policy";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Policy></Policy>
            <AboutSection></AboutSection>
            <DonatesHelp></DonatesHelp>
        </div>
    );
};

export default Home;