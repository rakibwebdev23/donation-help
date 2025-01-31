import "./Banner.css";
import img1 from "../../assets/images/education.jpg"
import img2 from "../../assets/images/education2.jpg"
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="banner-content w-1/2">
        <h1 className="banner-title"><span className="first-title">Help Build a</span> <br /> Brighter Tomorrow</h1>
        <p className="banner-subtitle italic">
          Join us in helping poor families, providing essential support, and
          creating opportunities for a brighter future. Together, we can make a
          lasting difference in the lives of those in need.
        </p>
        <Link to="/signin"><button className="donate-button">Donate Now</button></Link>
      </div>
      <div className="image-container w-1/2">
        <img
          src={img1}
          alt="Main Image"
          className="main-image"
        />
        <img
          src={img2}
          alt="Overlay Image"
          className="overlay-image"
        />
      </div>
    </div>
  );
};

export default Banner;
