import "./Banner.css";
import img1 from "../../assets/images/education.jpg"
import img2 from "../../assets/images/education2.jpg"

const Banner = () => {
  return (
    <div className="banner-container bg-gradient-to-r from-rose-100 via-rose-200 to-rose-300">
      <div className="banner-content half-width">
      <h1 className="banner-title">Help Build a <br />Brighter Tomorrow</h1>
        <p className="banner-subtitle italic">
          Join us in helping poor families, providing essential support, and
          creating opportunities for a brighter future. Together, we can make a
          lasting difference in the lives of those in need.
        </p>
        <button className="donate-button">Donate Now</button>
      </div>
      <div className="image-container half-width">
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
