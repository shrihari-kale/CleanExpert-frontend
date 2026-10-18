import React from "react";
import ServiceCard from "./ServiceCard";

function Service() {
  return (
    <section className="services py-5">
      <div className="container">
        <div className="services-heading text-center">
          <span className="services-label">
            <i className="bi bi-stars"></i> OUR SERVICES
          </span>

          <h2 className="services-title mt-3">
            Professional Cleaning
            <br />
            <span>For Every Space</span>
          </h2>

          <p className="services-description">
            From everyday home cleaning to specialized cleaning solutions,
            find the right service for your space.
          </p>
        </div>

        {/* <ServiceCard /> */}
      </div>
    </section>
  );
}

export default Service;
