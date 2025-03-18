import { Link } from 'react-router-dom';
import img from "../../assets/images/helpHand/contactDFBD2.jpg"
import img1 from "../../assets/images/helpHand/about2.jpg"
import AboutSection from '../AboutSection/AboutSection';

const About = () => {
    return (
        <div className="w-full">
            <div className="hero min-h-[60vh] md:min-h-[80vh] lg:min-h-[550px] bg-cover bg-center inset-0 flex items-center justify-center relative"
                style={{ backgroundImage: `url(${img})` }}>
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="relative text-white text-center px-6 sm:px-12">
                    <h1 className="mb-4 text-2xl sm:text-4xl lg:text-6xl font-bold uppercase">About Us</h1>
                    <nav className="flex items-center justify-center space-x-6 text-lg text-white/90">
                        <Link to="/" className="hover:text-rose-400 transition-all duration-300">Home</Link>
                        <div className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                        <Link to="/needhelp" className="hover:text-rose-400 transition-all duration-300">Need Help</Link>
                    </nav>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="py-10">
                    <div className="text-center">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl my-6 font-semibold">Why Choose CFBD?</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-white p-8 sm:p-12 rounded shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                            <h2 className="text-lg sm:text-xl font-bold">Transparency</h2>
                            <p className="text-sm sm:text-base">Every donation is securely tracked.</p>
                        </div>
                        <div className="bg-white p-8 sm:p-12 rounded shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                            <h2 className="text-lg sm:text-xl font-bold">Easy to Use</h2>
                            <p className="text-sm sm:text-base">Simple interface for both donors and fundraisers.</p>
                        </div>
                        <div className="bg-white p-8 sm:p-12 rounded shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                            <h2 className="text-lg sm:text-xl font-bold">Community-Driven</h2>
                            <p className="text-sm sm:text-base">Helping those who truly need it.</p>
                        </div>
                    </div>
                    <AboutSection></AboutSection>
                    <div className="bg-black mt-16 rounded text-white flex flex-col lg:flex-row items-center p-6 md:p-10 gap-6 lg:gap-10">
                        <img
                            className="rounded w-28 sm:w-48 md:w-64 object-cover"
                            src={img1}
                            alt="CFBD About"
                        />
                        <div className="text-left">
                            <h2 className="text-xl sm:text-2xl lg:text-4xl text-rose-600 font-bold mb-4">
                                About Crowd Funding for Poor People (CFBD)
                            </h2>
                            <p className="text-sm sm:text-base text-justify">
                                At Crowd Funding for Poor People (CFBD), we believe in the power of community and generosity.
                                Our platform is designed to connect individuals in need with compassionate donors who want to
                                make a difference. Whether it's for medical emergencies, education, housing, or essential daily
                                needs, CFBD provides a transparent and secure way for people to seek and receive financial support.
                            </p>
                            <Link to="/">
                                <button className="py-2 px-6 sm:py-3 sm:px-10 bg-rose-600 mt-4 rounded hover:bg-rose-700 text-sm sm:text-base transition-colors duration-300">
                                    Donate Now
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;