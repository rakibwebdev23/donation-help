import { Link } from "react-router-dom";
import { useState } from "react";

const DonateHelp = ({ donate }) => {
    const { _id, category_name, img, category_title, description, donate_amount } = donate || {};
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <>
            <div className="group bg-white rounded-xl shadow-md hover:shadow-lg">
                <div className="bg-white rounded-xl shadow-lg">
                    <div className="relative">
                        <div className="aspect-video overflow-hidden rounded-t-xl">
                            <img
                                src={img}
                                alt={category_name || "Donation Campaign"}
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="absolute top-4 left-4">
                            <span className="inline-flex px-3 py-1.5 bg-white/95 text-rose-600 text-sm font-medium rounded-full">
                                {category_name || "No Category"}
                            </span>
                        </div>
                    </div>
                    <div className="flex justify-between items-start gap-4 mb-3 my-4 px-4">
                        <h2 className="text-xl font-semibold text-gray-900 leading-tight">
                            {category_title || "No Title"}
                        </h2>
                        <span className="text-lg font-semibold text-rose-600">
                            ${donate_amount || "0"}
                        </span>
                    </div>
                    <div className="text-left w-full">
                        <p className="text-gray-800 line-clamp-3 px-4">
                            {description.length > 0 ? (
                                <>
                                    {description.slice(0, 100)}{" "}
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            toggleModal();
                                        }}
                                        className="ml-1 text-blue-600 hover:text-blue-700 font-medium"
                                    >
                                        Read more...
                                    </button>
                                </>
                            ) : (
                                description
                            )}
                        </p>
                        <Link to={`/projects/${_id}`} >
                            <button className="w-full py-3 bg-rose-600 text-white font-medium rounded-b-xl hover:bg-rose-700 active:bg-rose-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 mt-4">
                                See Details
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Modal Section */}
            <div
                className={`fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center transition-opacity duration-500 ${
                    isModalOpen ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
                onClick={toggleModal}
            >
                <div
                    onClick={(e) => e.stopPropagation()}
                    className={`bg-white rounded-lg p-6 w-11/12 sm:w-2/3 lg:w-1/2 transform transition-all duration-500 ${
                        isModalOpen ? "scale-100" : "scale-95"
                    }`}
                >
                    <h2 className="lg:text-2xl font-bold text-rose-600 mb-4 border-b pb-2">
                        {category_title || "Support a Cause"}
                    </h2>
                    <p className="lg:text-xl font-semibold">
                        <span className="text-blue-600">Category: </span> {category_name}
                    </p>
                    <p className="lg:text-xl font-semibold">
                        <span className="text-blue-600">Need: </span>$ {donate_amount}
                    </p>
                    <p className="text-gray-800 mb-6 mt-2">{description}</p>
                    <div className="flex justify-end">
                        <button
                            onClick={toggleModal}
                            className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition-all"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DonateHelp;
