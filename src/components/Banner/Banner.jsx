import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="overlay"></div>
      <div className="banner-content">
        <h1 className="banner-title ">Crowd Funding for a Better Tomorrow</h1>
        <p className="banner-subtitle italic">
        Join us in helping poor families, providing essential support, and creating opportunities for a brighter future. Together, we can make a lasting difference in the lives of those in need.
        </p>
        <button className="donate-button">Donate Now</button>
      </div>
    </div>
  );
};

export default Banner;
