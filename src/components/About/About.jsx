import Container from "../Container/Container";
import img from "../../assets/images/helpHand/about.jpg";
import img1 from "../../assets/images/helpHand/about2.jpg";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <div>
            <div
                className="hero min-h-[60vh] md:min-h-[80vh] lg:min-h-[550px] bg-cover bg-center flex items-center justify-center relative"
                style={{ backgroundImage: `url(${img})` }}>
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="relative text-white text-center px-6 sm:px-12">
                    <h1 className="mb-4 text-2xl sm:text-4xl lg:text-6xl font-bold uppercase">About Us</h1>
                    <div className="text-lg sm:text-xl font-semibold">
                        <Link className="hover:text-rose-600" to="/">Home <span className="mx-2 text-rose-600 font-bold">|</span></Link>
                        <Link className="hover:text-rose-600" to="/needhelp">Need Help</Link>
                    </div>
                </div>
            </div>
            
            <Container>
                <div className="py-10">
                    {/* Why Choose CFBD */}
                    <div className="text-center">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl my-6 font-semibold">Why Choose CFBD?</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-white p-8 sm:p-12 rounded shadow-lg text-center">
                            <h2 className="text-lg sm:text-xl font-bold">Transparency</h2>
                            <p className="text-sm sm:text-base">Every donation is securely tracked.</p>
                        </div>
                        <div className="bg-white p-8 sm:p-12 rounded shadow-lg text-center">
                            <h2 className="text-lg sm:text-xl font-bold">Easy to Use</h2>
                            <p className="text-sm sm:text-base">Simple interface for both donors and fundraisers.</p>
                        </div>
                        <div className="bg-white p-8 sm:p-12 rounded shadow-lg text-center">
                            <h2 className="text-lg sm:text-xl font-bold">Community-Driven</h2>
                            <p className="text-sm sm:text-base">Helping those who truly need it.</p>
                        </div>
                    </div>
                    
                    {/* About Section */}
                    <div className="bg-black mt-16 rounded text-white flex flex-col lg:flex-row items-center p-6 md:p-10 gap-6 lg:gap-10">
                        <img className="rounded w-28 sm:w-48 md:w-64" src={img1} alt="CFBD About" />
                        <div className="text-left">
                            <h2 className="text-xl sm:text-2xl lg:text-4xl text-rose-600 font-bold mb-4">About Crowd Funding for Poor People (CFBD)</h2>
                            <p className="text-sm sm:text-base text-justify">At Crowd Funding for Poor People (CFBD), we believe in the power of community and generosity. Our platform is designed to connect individuals in need with compassionate donors who want to make a difference. Whether it's for medical emergencies, education, housing, or essential daily needs, CFBD provides a transparent and secure way for people to seek and receive financial support.</p>
                            <Link to="/">
                                <button className="py-2 px-6 sm:py-3 sm:px-10 bg-rose-600 mt-4 rounded hover:bg-rose-700 text-sm sm:text-base">Donate Now</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default About;