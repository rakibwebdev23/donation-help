import { useLoaderData, useParams } from "react-router-dom";

const ShowDetails = () => {
    const donates = useLoaderData();
    console.log(donates);
    const { id } = useParams();
    const idInt = parseInt(id);
    const donate = donates.find(donate => donate.id === idInt)
    const { img, category_title, description, donate_amount, color_bg_btn } = donate;

    const viewStyles = {
        backGround: color_bg_btn,
    }
    
    let total = 0;
    const handleDonateAmount = () =>{
        total = total + {donate_amount};
    }

    return (
        <div className="flex items-center m-4 ">
            <div className="md:w-10/12 text-wrap mx-auto">
                <div className="relative inline-block">
                    <img className="relative rounded-md text-wrap mb-6 mt-4 h-auto block" src={img} alt="Your Image" />
                    <div className="">
                        <button onClick={() => handleDonateAmount()} className="rounded-md text-white font-bold hover:text-neutral-700 absolute bottom-20 left-6 px-4  hover:scale-x-110 duration-300 py-2" style={{ backgroundColor: viewStyles.backGround, color: viewStyles.textColor }}>Donate {donate_amount}</button>
                    </div>
                </div>
                <p className="text-2xl font-bold text-black mb-2">{category_title}</p>
                <p className="text-gray-500 text-pretty mb-6">{description}</p>
            </div>
        </div>
    );
};

export default ShowDetails;