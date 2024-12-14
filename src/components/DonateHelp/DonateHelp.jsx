import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { saveCardData } from "../../utilities/storage";

const DonateHelp = ({ donate, alternate }) => {
  const { id, category_name, img, category_title, font_color, color_bg_btn, color_bg } = donate || {};

  const cardStyle = {
    backgroundColor: color_bg,
    fontColor: font_color,
    btnBgColor: color_bg_btn,
  };

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
      <div
        style={{ backgroundColor: cardStyle.backgroundColor }}
        className="card rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 ease-in-out"
      >
        {/* Image Section */}
        <figure>
          <img
            className="w-full h-40 sm:h-48 md:h-56 object-cover"
            src={img}
            alt={category_name}
          />
        </figure>

        {/* Card Content */}
        <div className="card-body p-3 text-center md:p-6">
          <Link to={`/donate/${id}`}>
            <button
              className="py-2 px-4 rounded-md font-bold hover:bg-red-500 transition duration-300 ease-in-out"
              style={{
                backgroundColor: cardStyle.btnBgColor,
                color: cardStyle.fontColor,
              }}
            >
              {category_name}
            </button>
          </Link>
          <h2
            className="text-base sm:text-lg font-semibold mt-2 md:mt-3"
            style={{ color: cardStyle.fontColor }}
          >
            {category_title}
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
    text: PropTypes.string,
    button: PropTypes.string,
    background: PropTypes.string,
  }).isRequired,
  alternate: PropTypes.bool,
};

export default DonateHelp;
