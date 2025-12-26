import React from "react";
import { Link } from "react-router-dom";
import Headandfoot from "../Layout/Headandfoot";
import "../Styles/PageNotFound.css";

const PageNotAvailable = () => {
  return (
    <Headandfoot>
      <div className="pna-wrapper">
        <div className="pna-card">
          <h1 className="pna-code">404</h1>
          <h2 className="pna-title">Page Not Found</h2>
          <p className="pna-text">
            The page you are looking for might have been removed,  
            had its name changed, or is temporarily unavailable.
          </p>

          <Link to="/" className="pna-button">
            Go to Homepage
          </Link>
        </div>
      </div>
    </Headandfoot>
  );
};

export default PageNotAvailable;
