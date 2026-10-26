import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Navbar";
import AOS from "aos";
import "aos/dist/aos.css";

function Hero() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <section className="hero">
        <div className="hero-overlay">
          <div className="container hero-content" data-aos="fade-right"
              data-aos-offset="400" data-aos-easing="ease-in-sine" data-aos-duration="1800">
            <span className="hero-badge">
              ✨ Trusted Cleaning Professionals
            </span>

            <h1>
              A Cleaner Space,
              <br />
              <span> A Happier Place.</span>
            </h1>

            <p>
              Professional home and office cleaning services designed to make
              your space fresh, clean, and comfortable.
            </p>

            <div className="hero-buttons">
              <button
                className="btn btn-primary hero-btn"
                onClick={() => navigate("/services")}
              >
                Explore Services →
              </button>

              <button
                className="btn btn-outline-light hero-btn"
                onClick={() => navigate("/contact")}
              >
                Contact Us
              </button>
            </div>

            <div className="hero-trust">
              <span>✓ Professional Team</span>
              <span>✓ Quality Service</span>
              <span>✓ Easy Booking</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;

