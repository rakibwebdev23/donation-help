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

    return (
        <div className="flex items-center m-4">
            <div className="md:w-10/12 text-wrap mx-auto">
                <img className="rounded-lg text-wrap mb-10 mt-4" src={img} alt="" />
                <button className="p-2 rounded-lg text-white font-bold" style={{ backgroundColor: viewStyles.backGround, color: viewStyles.textColor }}>Donate {donate_amount}</button>
                <p className="text-2xl font-bold text-black mb-2">{category_title}</p>
                <p className="text-gray-500 text-pretty mb-6">{description}</p>
            </div>
        </div>
    );
};

export default ShowDetails;