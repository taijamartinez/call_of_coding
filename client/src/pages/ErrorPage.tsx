import { Link } from "react-router-dom";
import "./css/ErrorPage.css";
import pixelIsland from "../assets/pixel-island.png"; 

const ErrorPage = () => {
  return (
    <div className="error-container">
      <h1 className="error-code">404</h1>
      <p className="error-message">Island not found</p>

      <div className="button-container">
      <Link to="/dashboard" className="error-button">GAMES</Link>
        <Link to="/" className="error-button">BACK TO HOME</Link>
      </div>

      <img src={pixelIsland} alt="Pixel Palm Island" className="error-image" />

      <div className="plus-icon">+</div>
    </div>
  );
};

export default ErrorPage;
