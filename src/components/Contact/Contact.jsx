import { Link } from "react-router-dom";
import img from "../../assets/images/helpHand/contactCFBD.jpg"
const Contact = () => {
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
        </div>
    );
};

export default Contact;