import React from "react";
import Steps from "./Steps";

function Section4() {
  return (
    <section className="how-it-works-section">
      <div className="container py-5">
        <div className="how-heading text-center">
          <span className="how-label">
            <i className="bi bi-stars"></i> HOW IT WORKS
          </span>

          <h2>
            Book Your Cleaning
            <br />
            <span>In Four Simple Steps</span>
          </h2>

          <p>
            Getting started is easy. Follow these simple steps to arrange
            your cleaning service.
          </p>
        </div>

        <div className="mt-5">
          <Steps />
        </div>
      </div>
    </section>
  );
}

export default Section4;
