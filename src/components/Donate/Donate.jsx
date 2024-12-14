import { Link } from "react-router-dom";


const Donate = ({ donate }) => {
    const { id, img, category_name, category_title, donate_amount, color_bg_btn, font_color, color_bg } = donate || {};
    const styleCard = {
        backgroundColor: color_bg,
        color: font_color,
        btn_color: color_bg_btn
    }
    return (
        <div style={{ backgroundColor: styleCard.backgroundColor }} className="items-center gap-6 flex rounded-md">
            <img className="h-48 w-48 rounded-l-md" src={img} alt="" />
            <div className="text-wrap">
                <Link to={`/donate/${id}`}><button style={{ backgroundColor: styleCard.btn_color, color: styleCard.color }} className="py-1 px-2 rounded-md font-bold mb-2">{category_name}</button></Link>
                <p className="text-2xl font-bold mb-2">{category_title}</p>
                <p style={{ color: styleCard.color }} className="font-bold mb-2">{donate_amount}</p>
                <Link to='/statistics'><button style={{ backgroundColor: styleCard.color }} className="text-xl font-bold py-2 px-4 rounded-md text-white">View Details</button></Link>
            </div>
        </div>
    );
}
export default Donate;