import React from "react";
import { NavLink } from "react-router-dom";

const AdminHead = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/admin">
          Admin Pannel
        </NavLink>
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
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/admin/dashboard" className="nav-link">
                Overall
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/admin/boys" className="nav-link">
                Boys
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/admin/girls" className="nav-link">
                Girls
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default AdminHead;
