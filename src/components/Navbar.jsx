import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Navbar() {
const location = useLocation();
const navigate = useNavigate();

const isHome = location.pathname === "/";
const [scrolled, setScrolled] = useState(false);
const [user, setUser] = useState(() => {
try {
return JSON.parse(sessionStorage.getItem("user"));
} catch {
return null;
}
});

useEffect(() => {
const handleScroll = () => {
setScrolled(window.scrollY > 50);
};


window.addEventListener("scroll", handleScroll);
return () => window.removeEventListener("scroll", handleScroll);


}, []);

useEffect(() => {
const syncUser = () => {
try {
setUser(JSON.parse(sessionStorage.getItem("user")));
} catch {
setUser(null);
}
};


window.addEventListener("storage", syncUser);
window.addEventListener("authChanged", syncUser);

return () => {
  window.removeEventListener("storage", syncUser);
  window.removeEventListener("authChanged", syncUser);
};


}, [location.pathname]);

const handleLogout = () => {
sessionStorage.removeItem("token");
sessionStorage.removeItem("user");
setUser(null);
window.dispatchEvent(new Event("authChanged"));
navigate("/login");
};

return (
<nav
className={`navbar navbar-expand-lg navbar-dark fixed-top w-100 ${
        isHome && !scrolled ? "" : "bg-dark shadow"
      }`}
>
<div className="container">
<Link
className="navbar-brand fw-bold"
to="/"
style={{ fontSize: "1.7rem" }}
>
Clean<span className="text-primary">E</span>xpert
</Link>

```
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
          <Link className="nav-link" to="/">Home</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/services">Services</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/review">Reviews</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/bookings">Booking</Link>
        </li>

        {!user ? (
          <>
            <li className="nav-item ms-lg-3 mt-2 mt-lg-0">
              <Link className="btn btn-outline-light" to="/login">
                Login
              </Link>
            </li>

            <li className="nav-item ms-lg-2 mt-2 mt-lg-0">
              <Link className="btn btn-outline-light" to="/signup">
                Signup
              </Link>
            </li>
          </>
        ) : (
          <>
            {user.role === "admin" && (
              <li className="nav-item ms-lg-3 mt-2 mt-lg-0">
                <Link className="btn btn-warning" to="/admin">
                  Admin Dashboard
                </Link>
              </li>
            )}

            <li className="nav-item ms-lg-3 mt-2 mt-lg-0">
              <span className="nav-link">
                Welcome, {user.name}
              </span>
            </li>

            <li className="nav-item ms-lg-2 mt-2 mt-lg-0">
              <button
                className="btn btn-outline-light"
                onClick={handleLogout}
              >
                Logout
              </button>
            </li>
           </>
        )}

        {/* <li className="nav-item ms-lg-2 mt-2 mt-lg-0">
          <Link className="btn btn-primary" to="/servicescard">
            Book Now
          </Link>
        </li> */}
      </ul>
    </div>
  </div>
</nav>


);
}

export default Navbar;
