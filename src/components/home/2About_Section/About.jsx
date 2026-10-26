import React from "react";
import aboutimg from "../../../assets/aboutimg.png";

function About() {
  const features = [
    {
      icon: "bi-house-check",
      title: "Home & Office Cleaning",
      desc: "Keep your home and workplace clean, fresh, and comfortable.",
    },
    {
      icon: "bi-stars",
      title: "Specialized Cleaning",
      desc: "Cleaning solutions for bathrooms, water tanks, and gardens.",
    },
    {
      icon: "bi-calendar-check",
      title: "Convenient Booking",
      desc: "Choose your service and preferred schedule with ease.",
    },
  ];

  return (
    <section className="about-section py-5">
      <div className="container py-lg-5">
        <div className="row align-items-center g-5">
          {/* Left Content */}
          <div
            className="col-lg-6"
            data-aos="fade-right"
            data-aos-duration="1800"
          >
            <div className="about-label mb-3">
              <i className="bi bi-stars"></i>
              <span>ABOUT CLEANEXPERT</span>
            </div>

            <h2 className="about-heading">
              A Cleaner Space,
              <br />
              <span>A Better Everyday.</span>
            </h2>

            <p className="about-description mt-4">
              At CleanExpert, we aim to make everyday cleaning simpler and more
              convenient. From homes and offices to bathrooms, water tanks, and
              gardens, explore cleaning services designed to help keep your
              spaces clean and comfortable.
            </p>

            <div className="about-features mt-4">
              {features.map((feature, index) => (
                <div className="about-feature" key={index}>
                  <div className="about-feature-icon">
                    <i className={`bi ${feature.icon}`}></i>
                  </div>

                  <div>
                    <h5>{feature.title}</h5>
                    <p>{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="col-lg-6">
            <div
              className="about-image-wrapper"
              data-aos="fade-left"
              data-aos-duration="1800"
            >
              <img
                src={aboutimg}
                alt="Professional cleaning service"
                className="about-main-image"
                loading="lazy"
              />

              <div className="about-image-badge">
                <i className="bi bi-check-circle-fill"></i>
                <div>
                  <strong>Clean Spaces</strong>
                  <span>More everyday comfort</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

