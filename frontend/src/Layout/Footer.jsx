import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Footer.css";

const Footer = () => {
  return (
    <div>

      <hr className="footer-line" />

      <footer className="text-light pt-5 pb-4">
        <div className="container">
          <div className="row">

            <div className="col-md-4">
              <img
                src="./logo.jpg"
                alt="University Logo"
                className="mb-3"
                style={{ width: 200 }}
              />
              <h5 className="mb-3 ">University of Central Punjab</h5>
              <div className="d-flex">
                {/* <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-light btn-sm rounded-circle me-2"
                >
                  <i className="bi bi-facebook"></i>
                </a>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-light btn-sm rounded-circle me-2"
                >
                  <i className="bi bi-twitter"></i>
                </a> */}
                <a
                  href="https://www.linkedin.com/in/moaz-softwire?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-light btn-sm rounded-circle me-2"
                >
                  <i className="bi bi-linkedin"></i>
                </a>
                {/* <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-light btn-sm rounded-circle me-2"
                >
                  <i className="bi bi-youtube"></i>
                </a> */}
                <a
                  href="https://www.instagram.com/softwiretechnologies/profilecard/?igsh=eDRnaHdwMWMydDRx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-light btn-sm rounded-circle me-2"
                >
                  <i className="bi bi-instagram"></i>
                </a>
              </div>
            </div>

            <div className="col-md-4">
              <h5 className="mb-4 ">Useful Links</h5>
              <ul className="list-unstyled ">
                <li className="text-white">
                  <Link
                    to="/"
                    className="nav-link text-light text-decoration-none"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/events"
                    className="nav-link text-light text-decoration-none"
                  >
                    Events
                  </Link>
                </li>
                <li>
                  <Link
                    to="/teams"
                    className="nav-link text-light text-decoration-none"
                  >
                    Team
                  </Link>
                </li>
                <li>
                  <Link
                    to="/leaderboard"
                    className="nav-link text-light text-decoration-none"
                  >
                    Leaderboard
                  </Link>
                </li>

                <li>
                  <Link
                    to="/games"
                    className="nav-link text-light text-decoration-none"
                  >
                    Games
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="nav-link text-light text-decoration-none"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/register-now"
                    className="nav-link text-light text-decoration-none"
                  >
                    Register
                  </Link>
                </li>
                {/* <li>
                  <Link
                    to="/login"
                    className="nav-link text-light text-decoration-none"
                  >
                    Admin Pannel
                  </Link>
                </li> */}
              </ul>
            </div>

            <div className="col-md-4">
              <h5 className="mb-4">Contact Us</h5>
              <p>
                <i className="bi bi-geo-alt-fill me-2" />
                5KM Main Jaranwala Road, Near PSO Petrol Pump, Faisalabad
              </p>
              <p>
                <i className="bi bi-telephone-fill me-2" />
                041-2422722
              </p>
              
      
            </div>
          </div>
        </div>
      </footer>

      <hr className="footer-line" />

      <div className="footer-text text-center py-3">
        
        <p className="thanks">
          Special Thanks to <strong>Prof. AbuBakar</strong> for Directions and Guidence.
        </p>

        <a
                  href="https://softwire.tech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  // className="btn btn-outline-light btn-sm rounded-circle me-2"
                >
                  
        {/* <p className="thanks"> */}
        Special Thanks to <strong>Softwire Technologies (Moaz)</strong> for sponsorship
        {/* </p> */}
                </a>
        
        
      </div>

    </div>
  );
};

export default Footer;
