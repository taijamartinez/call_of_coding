import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import auth from "../utils/auth";
import "./css/Navbar.css"; 

const Navbar = () => {
  const [loginCheck, setLoginCheck] = useState(false);

  useEffect(() => {
    setLoginCheck(auth.loggedIn());
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-title">
        <Link to="/dashboard" className="nav-logo">Call of Coding</Link>
      </div>
      <ul className="nav-links">
        <li className="nav-item">
          <Link to="/leaderboard" className="nav-button">Leaderboard</Link>
        </li>

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