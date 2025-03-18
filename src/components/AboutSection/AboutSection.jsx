import about from "../../assets/images/helpHand/diverse-people-refugee-camps.jpg";
import Container from "../Container/Container";

const AboutSection = () => {
    return (
        <div className="bg-amber-50 py-12">
            <Container>
                <div className="text-center mb-12">
                    <span className="inline-block px-4 py-1 bg-teal-100 text-teal-600 rounded-full text-sm font-medium mb-3">About Our Mission</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Making a <span className="text-[#e11d48]">Difference</span> Together</h2>
                </div>
                <div className="flex flex-col lg:flex-row items-center gap-8">
                    <div className="w-full lg:w-1/2 order-1 lg:order-2">
                        <div className="relative">
                            <img
                                src={about}
                                alt="Disaster Management"
                                className="rounded-xl shadow-lg w-full h-auto object-cover"
                            />
                            <div className="absolute -bottom-6 -right-6 bg-[#e11d48] text-white p-4 md:p-6 rounded-lg shadow-md hidden md:block">
                                <p className="text-2xl md:text-3xl font-bold">10+ Years</p>
                                <p className="text-sm md:text-base">of Service</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 order-2 lg:order-1 mt-8 lg:mt-0">
                        <h3 className="text-2xl md:text-3xl font-bold text-[#e11d48] mb-4">
                            Even small efforts can make <span className="text-gray-800">Big Impacts</span>
                        </h3>

                        <p className="text-gray-600 mb-6">
                            Our disaster management initiatives focus on rapid response and recovery to help those affected by calamities. We believe in the power of community and collective action to overcome challenges.
                        </p>

                        <div className="space-y-6 mb-8">
                            <div className="bg-white p-4 rounded-lg shadow-sm flex gap-4 hover:shadow-md transition">
                                <div className="bg-teal-100 text-[#e11d48] h-12 w-12 rounded-full flex items-center justify-center flex-shrink-0">
                                    <span className="text-xl font-bold">01</span>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-gray-800">Emergency Medical Aid</h4>
                                    <p className="text-gray-600">Providing critical medical support during emergencies to save lives.</p>
                                </div>
                            </div>

                            <div className="bg-white p-4 rounded-lg shadow-sm flex gap-4 hover:shadow-md transition">
                                <div className="bg-teal-100 text-[#e11d48] h-12 w-12 rounded-full flex items-center justify-center flex-shrink-0">
                                    <span className="text-xl font-bold">02</span>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-gray-800">Food & Shelter Assistance</h4>
                                    <p className="text-gray-600">Ensuring food supply and temporary shelters for disaster victims.</p>
                                </div>
                            </div>

                            <div className="bg-white p-4 rounded-lg shadow-sm flex gap-4 hover:shadow-md transition">
                                <div className="bg-teal-100 text-[#e11d48] h-12 w-12 rounded-full flex items-center justify-center flex-shrink-0">
                                    <span className="text-xl font-bold">03</span>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-gray-800">Community Recovery</h4>
                                    <p className="text-gray-600">Helping communities rebuild and recover after disasters.</p>
                                </div>
                            </div>
                        </div>

                        <button className="bg-[#f71143] hover:bg-[#d13456] text-white px-8 py-3 rounded-full font-medium shadow-md transition flex items-center gap-2">
                            Donate Now
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default AboutSection;