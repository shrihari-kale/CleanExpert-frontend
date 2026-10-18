import React from "react";

function Section3() {
  return (
    <section className="section3-wrapper">
      <div className="container py-5">
        <div className="row align-items-center g-5">
          {/* Left Content */}
          <div className="col-lg-6">
            <div className="section3-label">
              <i className="bi bi-stars"></i>
              <span>WHY CLEANEXPERT</span>
            </div>

            <h2 className="section3-heading">
              Clean Spaces.
              <br />
              <span>Comfortable Living.</span>
            </h2>

            <p className="section3-description">
              A clean space makes everyday life more comfortable. CleanExpert
              offers a range of cleaning services for homes, offices,
              bathrooms, water tanks, and gardens. Choose a service that
              suits your needs and book at your convenience.
            </p>

            <div className="section3-benefits">
              <div className="section3-benefit">
                <i className="bi bi-check-circle-fill"></i>
                <div>
                  <h5>Services for Different Spaces</h5>
                  <p>Cleaning options for homes, workplaces, and more.</p>
                </div>
              </div>

              <div className="section3-benefit">
                <i className="bi bi-calendar-check-fill"></i>
                <div>
                  <h5>Convenient Booking</h5>
                  <p>Select your service and preferred booking schedule.</p>
                </div>
              </div>

              <div className="section3-benefit">
                <i className="bi bi-house-heart-fill"></i>
                <div>
                  <h5>A Fresher Environment</h5>
                  <p>Make cleanliness part of your everyday routine.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="col-lg-6">
            <div className="section3-image-wrapper">
              <img
                src="https://images.pexels.com/photos/4108710/pexels-photo-4108710.jpeg"
                alt="Cleaning professional working indoors"
                className="section3-image"
                loading="lazy"
              />

              <div className="section3-image-note">
                <i className="bi bi-stars"></i>
                <span>Make room for a cleaner everyday.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section3;
