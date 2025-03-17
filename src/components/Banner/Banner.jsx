import banner1 from "../../assets/images/helpHand/baner1.jpg";
const Banner = () => {
    return (
        <div className="hero min-h-screen"
            style={{
                backgroundImage: `url(${banner1})`,
            }}>
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="w-full">
                    <h1 className="mb-5 lg:text-4xl font-medium text-center ">Helping People in Times of Disaster!</h1>
                    <div className="lg:mt-10">
                        <button className="py-2 lg:px-8 px-4 text-base bg-[#F3C577] text-black rounded-full hover:text-white">Donate Us</button>
                        <button className="py-2 lg:px-8 px-4 text-base bg-[#0E605A] text-white rounded-full lg:ml-10 ml-4 hover:text-black">Join Volunteers</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;