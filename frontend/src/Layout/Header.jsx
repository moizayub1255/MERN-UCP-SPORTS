import React from "react";
import { NavLink, Link } from "react-router-dom";
import "../Styles/Header.css";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img
              src="./logo (2).png"
              alt="Logo"
              width={100}
              height={80}
              className="me-2"
            />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/events" className="nav-link">
                  Events
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/teams" className="nav-link">
                  Teams
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/leaderboard" className="nav-link">
                  Leaderboard
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/games" className="nav-link">
                  Games
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/contact" className="nav-link">
                  Contact Us
                </NavLink>
              </li>
              

              <li className="nav-item">
                <NavLink to="/register-now" className="nav-link">
                  Register
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;