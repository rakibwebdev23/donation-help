import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useState } from "react";
import { saveCardData } from "../../utilities/storage";

const DonateHelp = ({ donate, alternate }) => {
    const { id, category_name, img, category_title, description } = donate || {};
    const idInt = parseInt(id);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSavedData = () => {
        saveCardData(idInt);
    };

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <>
            <div
                onClick={handleSavedData}
                className={`w-full px-4 mb-8 ${alternate ? "alternate-card" : ""}`}
            >
                <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all transform hover:scale-105 hover:shadow-2xl hover:translate-y-3">
                    <figure className="relative mb-6 overflow-hidden rounded-t-xl">
                        <img
                            className="w-full h-48 sm:h-56 lg:h-64 object-cover"
                            src={img}
                            alt={category_name || "Donate Image"}
                        />
                    </figure>
                    <div className="p-6 text-left">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                            {category_title || "Support a Cause"}
                        </h2>
                        <p className="text-gray-600 text-sm sm:text-base mb-6">
                            {description.length > 200 ? (
                                <>
                                    {description.slice(0, 100)}{" "}
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            toggleModal();
                                        }}
                                        className="text-blue-600 underline font-bold"
                                    >
                                        Read more...
                                    </button>
                                </>
                            ) : (
                                description
                            )}
                        </p>
                        <Link to={`/donate/${id}`}>
                            <button className="w-full py-3 px-6 bg-gradient-to-r from-indigo-600 to-blue-500 text-white font-medium rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out">
                                Donate Now
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div
                    onClick={toggleModal}
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className={`bg-white rounded-lg p-6 w-11/12 sm:w-2/3 lg:w-1/3 transform transition-all duration-300 ${
                            isModalOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
                        }`}
                    >
                        <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">
                            {category_title || "Support a Cause"}
                        </h2>
                        <p className="text-gray-600 mb-6">{description}</p>
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
            )}
        </>
    );
};

DonateHelp.propTypes = {
    donate: PropTypes.shape({
        category_name: PropTypes.string.isRequired,
        category_title: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        img: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
    }).isRequired,
    alternate: PropTypes.bool,
};

export default DonateHelp;
