import React, { useState } from "react";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    service: "",
    date: "",
    time: "",
    address: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const services = [
    "Home Cleaning",
    "Office Cleaning",
    "Deep Cleaning",
    "Water Tank Cleaning",
    "Bathroom Cleaning",
    "Garden Cleaning",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Frontend validation only. Connect your existing booking API
    // before treating this form as a real booking.
    setStatus(
      "Your details are ready. Connect this form to your booking API to submit your request."
    );
  };

  return (
    <section className="contact-modern-section py-5">
      <div className="container py-lg-4">
        <div className="row align-items-stretch g-4">
          {/* Contact Form */}
          <div
            className="col-lg-7"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            <div className="contact-modern-card h-100">
              <span className="contact-modern-label">
                <i className="bi bi-stars"></i>
                GET A QUOTE
              </span>

              <h2 className="contact-modern-title">
                Let's Make Your
                <br />
                <span>Space Shine.</span>
              </h2>

              <p className="contact-modern-description">
                Tell us what you need, and choose your preferred date and time
                for your cleaning request.
              </p>

              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label htmlFor="contact-name" className="form-label">
                      Full Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      className="form-control contact-modern-input"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleChange}
                      autoComplete="name"
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="contact-mobile" className="form-label">
                      Mobile Number
                    </label>
                    <input
                      id="contact-mobile"
                      type="tel"
                      name="mobile"
                      className="form-control contact-modern-input"
                      placeholder="Enter mobile number"
                      value={formData.mobile}
                      onChange={handleChange}
                      autoComplete="tel"
                      pattern="[0-9]{10}"
                      maxLength={10}
                      title="Enter a 10-digit mobile number"
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="contact-email" className="form-label">
                      Email Address
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      className="form-control contact-modern-input"
                      placeholder="Enter email address"
                      value={formData.email}
                      onChange={handleChange}
                      autoComplete="email"
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="contact-service" className="form-label">
                      Cleaning Service
                    </label>
                    <select
                      id="contact-service"
                      name="service"
                      className="form-select contact-modern-input"
                      value={formData.service}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Choose a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="contact-date" className="form-label">
                      Preferred Date
                    </label>
                    <input
                      id="contact-date"
                      type="date"
                      name="date"
                      className="form-control contact-modern-input"
                      value={formData.date}
                      onChange={handleChange}
                      min={new Date().toLocaleDateString("en-CA")}
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="contact-time" className="form-label">
                      Preferred Time
                    </label>
                    <select
                      id="contact-time"
                      name="time"
                      className="form-select contact-modern-input"
                      value={formData.time}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Choose a time</option>
                      <option value="09:00">9:00 AM</option>
                      <option value="11:00">11:00 AM</option>
                      <option value="13:00">1:00 PM</option>
                      <option value="15:00">3:00 PM</option>
                      <option value="17:00">5:00 PM</option>
                    </select>
                  </div>

                  <div className="col-12">
                    <label htmlFor="contact-address" className="form-label">
                      Service Address
                    </label>
                    <textarea
                      id="contact-address"
                      name="address"
                      className="form-control contact-modern-input"
                      rows="2"
                      placeholder="Enter the address where cleaning is needed"
                      value={formData.address}
                      onChange={handleChange}
                      autoComplete="street-address"
                      required
                    />
                  </div>

                  <div className="col-12">
                    <label htmlFor="contact-message" className="form-label">
                      Additional Details (Optional)
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      className="form-control contact-modern-input"
                      rows="3"
                      placeholder="Tell us about any special requirements"
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-12 mt-4">
                    <button type="submit" className="contact-modern-btn">
                      Request a Service
                      <i className="bi bi-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </form>

              {status && (
                <div className="alert alert-info mt-3 mb-0" role="status">
                  {status}
                </div>
              )}
            </div>
          </div>

          {/* Right Side */}
          <div
            className="col-lg-5"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
          >
            <div className="contact-visual h-100">
              <img
                src="https://i.pinimg.com/736x/ad/02/ac/ad02ac5c76eb582e3beeae2e50b453ba.jpg"
                alt="Cleaning professional working in a clean space"
                className="contact-visual-image"
                loading="lazy"
              />

              <div className="contact-visual-overlay">
                <span>
                  <i className="bi bi-house-check"></i> CLEANEXPERT
                </span>
                <h3>
                  A Cleaner Space.
                  <br />A Better Everyday.
                </h3>
                <p>
                  Explore cleaning services for your home, office, and other
                  spaces.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
