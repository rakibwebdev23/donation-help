import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { saveCardData } from "../../utilities/storage";

const DonateHelp = ({ donate, alternate }) => {
    const {
        id,
        category_name,
        img,
        category_title
    } = donate || {};

    // Multiple fallback styles
    // const defaultStyles = [
    //     {
    //         backgroundColor: "#F6DDCC", // Light Red
    //         fontColor: "#D35400", // Deep Orange
    //         btnBgColor: "#E59866", // Soft Orange
    //         border: "2px solid #E59866",
    //     },
    //     {
    //         backgroundColor: "#ADD8E6", // Light Blue
    //         fontColor: "#0000FF", // Blue
    //         btnBgColor: "#87CEEB", // Sky Blue
    //         border: "2px solid #87CEEB",
    //     },
    //     {
    //         backgroundColor: "#90EE90", // Light Green
    //         fontColor: "#008000", // Green
    //         btnBgColor: "#32CD32", // Lime Green
    //         border: "2px solid #32CD32",
    //     },
    //     {
    //         backgroundColor: "#F1948A", // Light Salmon
    //         fontColor: "#CB4335", // Red
    //         btnBgColor: "#EC7063", // Light Red
    //         border: "2px solid #EC7063",
    //     },
    // ];

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
            <div className="card rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 ease-in-out
                bg-[#F6DDCC]"
            >
                {/* Image Section */}
                <figure>
                    <img
                        className="w-full h-40 sm:h-48 md:h-56 object-cover"
                        src={img}
                        alt={category_name || "Donate Image"}
                    />
                </figure>

                {/* Card Content */}
                <div className="card-body p-3 text-center md:p-6">
                    <Link to={`/donate/${id}`}>
                        <button
                            className="py-2 px-4 rounded-md font-bold hover:scale-105 transition-transform duration-300 ease-in-out bg-[#E59866] text-white hover:text-[#D35400]">
                            {category_name || "Donate"}
                        </button>
                    </Link>
                    <h2
                        className="text-base sm:text-lg font-semibold mt-2 md:mt-3 text-[#D35400]">
                        {category_title || "Default Title"}
                    </h2>
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
