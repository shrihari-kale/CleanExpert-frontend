import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top w-100">
      <div className="container">
        <h1 className="navbar-brand fw-bold">
          Clean<span className="text-primary fs-1 fst-italic">E</span>xpert
        </h1>

        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#menu">
            
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/review">
                Review
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/bookings">
                View Booking
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
