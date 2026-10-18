import React from "react";
import { Link } from "react-router-dom";

function Section5() {
  const benefits = [
    {
      icon: "bi-calendar-check",
      title: "Convenient Booking",
      description:
        "Choose your preferred cleaning service and schedule your booking with ease.",
    },
    {
      icon: "bi-stars",
      title: "Cleaning for Every Space",
      description:
        "Explore cleaning options for homes, offices, bathrooms, water tanks, and gardens.",
    },
    {
      icon: "bi-wallet2",
      title: "Clear Service Pricing",
      description:
        "View the listed starting price for each service before proceeding with your booking.",
    },
  ];

  return (
    <section className="why-choose-section">
      <div className="container py-5">
        <div className="row align-items-center g-5">
          {/* Left Side: Image */}
          <div className="col-lg-6">
            <div className="why-image-wrapper">
              <img
                src="https://images.pexels.com/photos/6195125/pexels-photo-6195125.jpeg"
                alt="Cleaning professional maintaining a clean space"
                className="why-main-image"
                loading="lazy"
              />

              <div className="why-image-card">
                <div className="why-image-card-icon">
                  <i className="bi bi-house-check"></i>
                </div>
                <div>
                  <h6>Clean Spaces</h6>
                  <p>A fresh start for your space</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="col-lg-6">
            <div className="why-content">
              <span className="why-label">
                <i className="bi bi-stars"></i>
                WHY CHOOSE CLEANEXPERT
              </span>

              <h2 className="why-title">
                We Make Your Space
                <br />
                <span>Fresh & Comfortable</span>
              </h2>

              <p className="why-description">
                Finding the right cleaning service should be simple.
                CleanExpert brings different cleaning options together
                so you can explore services, check starting prices, and
                book according to your needs.
              </p>

              <div className="why-benefits">
                {benefits.map((benefit) => (
                  <div className="why-benefit" key={benefit.title}>
                    <div className="why-benefit-icon">
                      <i className={`bi ${benefit.icon}`}></i>
                    </div>

                    <div>
                      <h5>{benefit.title}</h5>
                      <p>{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link to="/servicescard" className="why-cta-btn">
                Explore Our Services
                <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section5;

