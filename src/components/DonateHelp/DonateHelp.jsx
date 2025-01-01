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
            <div className="bg-white rounded-lg lg:h-full shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl hover:translate-y-2">
                {/* Image Section */}
                <figure className="relative mb-4">
                    <img
                        className="w-full h-48 sm:h-56 lg:h-64 object-cover rounded-lg"
                        src={img}
                        alt={category_name || "Donate Image"}
                    />
                </figure>

                {/* Card Content */}
                <div className="p-6 text-left hover:bg-pink-200">
                    <h2 className="text-xl sm:text-2xl font-semibold text-blue-600 mb-3">
                        {category_title || "Support a Cause"}
                    </h2>
                    <p className="text-black mb-4">{ description}</p>

                    {/* Donate Button */}
                    <Link to={`/donate/${id}`}>
                        <button className="py-3 w-full px-6 bg-gradient-to-r from-pink-600 to-red-600 text-white font-semibold rounded-lg shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out">
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
    }).isRequired,
    alternate: PropTypes.bool,
};

export default DonateHelp;
