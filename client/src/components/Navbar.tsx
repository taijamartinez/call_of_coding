import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import auth from "../utils/auth";
import "./css/Navbar.css"; // Import the CSS file

const Navbar = () => {
  const [loginCheck, setLoginCheck] = useState(false);

  useEffect(() => {
    setLoginCheck(auth.loggedIn());
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-title">
        <Link to="/" className="nav-logo">Call of Coding</Link>
      </div>
      <ul className="nav-links">
        {!loginCheck ? (
          <li className="nav-item">
            <Link to="/login" className="nav-button">Login</Link>
          </li>
        ) : (
          <li className="nav-item">
            <button className="nav-button logout-btn" onClick={auth.logout}>
              Logout
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
