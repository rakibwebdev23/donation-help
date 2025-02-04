import { Link } from 'react-router-dom';
import img from "../../assets/images/helpHand/about.jpg"

const Contact = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="relative h-[500px]">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${img})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent" />
                <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col justify-center h-full">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            Let's Make A <span className="text-rose-500">Difference</span>
                        </h1>
                        <nav className="flex items-center space-x-6 text-lg text-white/90">
                            <Link to="/" className="hover:text-rose-400 transition-all duration-300">Home</Link>
                            <div className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                            <Link to="/needhelp" className="hover:text-rose-400 transition-all duration-300">Need Help</Link>
                        </nav>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="grid lg:grid-cols-2">
                        {/* Form Section */}
                        <div className="p-8 lg:p-12">
                            <div className="max-w-lg">
                                <h2 className="text-3xl font-bold text-gray-900">Get in Touch</h2>

                                <form className="mt-8 space-y-6">
                                    {/* Name Input */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Full Name</label>
                                        <input
                                            type="text"
                                            className="mt-2 block w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 transition-colors duration-200"
                                            placeholder="Your Name"
                                        />
                                    </div>

                                    {/* Email and Phone Grid */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">Email Address</label>
                                            <input
                                                type="email"
                                                className="mt-2 block w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 transition-colors duration-200"
                                                placeholder="your@email.com"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                                            <input
                                                type="tel"
                                                className="mt-2 block w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 transition-colors duration-200"
                                                placeholder="+880 "
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Contact Date</label>
                                        <input
                                            type="date"
                                            className="mt-2 block w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 transition-colors duration-200"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Message</label>
                                        <textarea
                                            rows="4"
                                            placeholder="Write your message here..."
                                            className="mt-2 block w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 transition-colors duration-200 resize-y min-h-[120px]"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-1/2 bg-rose-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-rose-700 transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
                                    >
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>

                        {/* Map and Contact Info Section */}
                        <div className="bg-gray-50 p-8 lg:p-12">
                            <div className="h-[300px] md:h-[400px] bg-white rounded-lg shadow-inner mb-8">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d29202.454575285174!2d90.4200192!3d23.8076862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1735211911148!5m2!1sen!2sbd"
                                    className="w-full h-full rounded-lg"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>

                            <div className="space-y-6">
                                <h3 className="text-xl font-semibold text-gray-900">Visit Our Office</h3>
                                <div className="space-y-4 text-gray-600">
                                    <p className="flex items-center space-x-3">
                                        <span className="w-5 h-5 bg-rose-100 rounded-full flex items-center justify-center">
                                            <span className="w-2 h-2 bg-rose-600 rounded-full" />
                                        </span>
                                        <span>Dhaka, Bangladesh</span>
                                    </p>
                                    <p className="flex items-center space-x-3">
                                        <span className="w-5 h-5 bg-rose-100 rounded-full flex items-center justify-center">
                                            <span className="w-2 h-2 bg-rose-600 rounded-full" />
                                        </span>
                                        <span>cfbd@gmail.com</span>
                                    </p>
                                    <p className="flex items-center space-x-3">
                                        <span className="w-5 h-5 bg-rose-100 rounded-full flex items-center justify-center">
                                            <span className="w-2 h-2 bg-rose-600 rounded-full" />
                                        </span>
                                        <span>+880 1307236959</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;