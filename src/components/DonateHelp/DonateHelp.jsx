import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { saveCardData } from "../../utilities/storage";

const DonateHelp = ({ donate, alternate }) => {
    const { id, category_name, img, category_title, description } = donate || {};
    const idInt = parseInt(id);

    const handleSavedData = () => {
        saveCardData(idInt);
    };

    return (
        <div
            onClick={handleSavedData}
            className={`w-full px-4 mb-8 ${alternate ? "alternate-card" : ""}`}
        >
            {/* Card Container */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all transform hover:scale-105 hover:shadow-2xl hover:translate-y-3">
                {/* Image Section */}
                <figure className="relative mb-6 overflow-hidden rounded-t-xl">
                    <img
                        className="w-full h-48 sm:h-56 lg:h-64 object-cover"
                        src={img}
                        alt={category_name || "Donate Image"}
                    />
                </figure>

                {/* Card Content */}
                <div className="p-6 text-center">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-3">{category_title || "Support a Cause"}</h2>
                    <p className="text-gray-600 text-sm sm:text-base mb-6">{description}</p>

                    {/* Donate Button */}
                    <Link to={`/donate/${id}`}>
                        <button className="w-full py-3 px-6 bg-gradient-to-r from-indigo-600 to-blue-500 text-white font-medium rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out">
                            Donate Now
                        </button>
                    </Link>
                </div>
            </div>
        </div>
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
