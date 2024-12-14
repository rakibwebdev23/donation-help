import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { saveCardData } from "../../utilities/storage";

const DonateHelp = ({ donate }) => {
    const { id, category_name, img, category_title, font_color, color_bg_btn, color_bg } = donate || {};

    const cardStyle = {
        backgroundColor: color_bg,
        fontColor: font_color,
        btnBgColor: color_bg_btn
    }
    const idInt = parseInt(id);
    const handleSavedData = () => {
        saveCardData(idInt);
    }

    return (
        <div onClick={handleSavedData} >
            <div style={{ backgroundColor: cardStyle.backgroundColor }} className="card rounded-b-none mb-6 mt-6  bg-base-100 shadow-xl mx-auto m-0 p-0 mr-4 ml-4">
                <figure><img className="h-72" src={img} alt="" /></figure>
                <div className="card-body">
                    <Link to={`/donate/${id}`}><button className="py-1 px-2 rounded-md font-bold hover:bg-red-500" style={{
                        backgroundColor: cardStyle.btnBgColor,
                        color: cardStyle.fontColor
                    }}>{category_name}</button></Link>
                    <h2 className="text-xl font-semibold" style={{ color: cardStyle.fontColor }}>{category_title}</h2>
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
        text: PropTypes.string.isRequired,
        button: PropTypes.string.isRequired,
        background: PropTypes.string.isRequired,
    }).isRequired,
};
export default DonateHelp;