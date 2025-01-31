import Container from "../Container/Container";
import img from "../../assets/images/helpHand/about.jpg";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <div>
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage: `url(${img})`,
                }}>
                <div className="hero-overlay bg-black bg-opacity-50"></div>
                <div className="hero-content text-neutral-content text-center ">
                    <div className="max-w-screen-md">
                        <h1 className="mb-5 lg:text-6xl text-2xl font-bold uppercase">About Us</h1>
                        <div className="text-xl font-semibold">
                            <Link className="hover:text-rose-600" to="/">Home <span className="ml-2 mr-2 text-rose-600 text-xl font-bold">|</span></Link>
                            <Link className="ml-2 hover:text-rose-600" to="/needhelp">Need Help</Link>
                        </div>
                    </div>
                </div>
            </div>
            <Container></Container>
        </div>
    );
};

export default About;