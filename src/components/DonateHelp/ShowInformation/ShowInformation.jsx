import { useLoaderData } from "react-router-dom";

const ShowInformation = () => {
    const donate = useLoaderData();
    const { category_name, img, category_title, description, donate_amount } = donate || {};

    return (
        <div className="max-w-screen-xl mx-auto">
            <div className="max-w-3xl mt-8 mx-auto p-8 bg-gray-50 shadow-lg rounded-lg border border-gray-200">
                <div className="flex flex-col items-center text-center">
                    <img
                        src={img}
                        alt={category_title || "Category Image"}
                        className="w-full h-44 object-cover rounded-lg shadow-md mb-6"
                    />
                    <h2 className="text-3xl font-extrabold text-rose-600">{category_name}</h2>
                    <h3 className="text-xl text-indigo-600 mt-2">{category_title}</h3>
                </div>
                <div className="mt-6 space-y-4">
                    <p className="text-lg font-semibold text-gray-700">
                        <span className="text-indigo-600">Donation Amount:</span> $ {donate_amount}
                    </p>
                    <p className="text-gray-800 leading-relaxed">
                        {description || "No description available."}
                    </p>
                </div>
                <div className="mt-8 text-center">
                    <button
                        className="px-6 py-3 text-white font-bold bg-rose-600 hover:bg-rose-700 rounded-lg shadow transition-all duration-300"
                        onClick={() => alert("Thank you for your donation!")}
                    >
                        Donate Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ShowInformation;
