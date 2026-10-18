
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top w-100">
      <div className="container">
        <Link
          className="navbar-brand fw-bold"
          to="/"
          style={{ fontSize: "1.7rem" }}
        >
          Clean<span className="text-primary">E</span>xpert
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
          aria-controls="menu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav ms-auto align-items-lg-center">
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
                Reviews
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/bookings">Booking</Link>
            </li>

            <li className="nav-item ms-lg-3 mt-2 mt-lg-0">
              <Link className="btn btn-outline-light" to="/login">
                Login
              </Link>
            </li>

            <li className="nav-item ms-lg-2 mt-2 mt-lg-0">
              <Link className="btn btn-primary" to="/servicescard">
                Book Now
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

