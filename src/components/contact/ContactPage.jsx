import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";

function ContactPage() {
    return (
      <>
      <Navbar/>
      <div className="container mt-5 p-5">

          <div className="row">
            <div className="col-lg-6 contact-page contact-section p-5">
              <div className="d-flex align-items-center gap-2 mb-4">
                <i className="bi bi-star-fill text-info"></i>

                <small className="fw-bold text-uppercase">Get A Quote</small>
              </div>

              <h4 className="contact-title mb-4">
                Schedule{" "}
                <span>
                  Your <br></br> Appointment
                </span>{" "}
                Today!
              </h4>
          
              <div className="row g-4 mt-2 ">
                <div className="col-md-6">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="form-control custom-input"
                  />
                </div>

                <div className="col-md-6">
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="form-control custom-input"
                  />
                </div>

                <div className="col-md-6">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="form-control custom-input"
                  />
                </div>

                <div className="col-md-6">
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="form-control custom-input"
                  />
                </div>

                <div className="col-12">
                  <select className="form-select custom-input text-dark">
                    <option>Choose a service...</option>
                    <option>Home Cleaning</option>
                    <option>Office Cleaning</option>
                    <option>Store Cleaning</option>
                    <option>Deep Cleaning</option>
                    <option>Bathroom Cleaning</option>
                    <option>Kichen Cleaning</option>
                  </select>
                </div>

                <div className="col-12">
                  <textarea
                    className="form-control custom-input"
                    rows="4"
                    placeholder="Message"
                  ></textarea>
                </div>

                <div className="col-12">
                  <button className="btn btn-light custom-btn">
                    Request A Service
                  </button>
                </div>
              </div>
            </div>
      
            <div className="col-lg-6 ">
              <div className="">
                <img
                  src="https://i.pinimg.com/736x/ad/02/ac/ad02ac5c76eb582e3beeae2e50b453ba.jpg"
                  className="img-fluid"
                />
                <h3 className="bg-primary tag-line p-4 fs-4">
                  100% Satisfaction <br></br>Guaranteed!
                </h3>
              </div>
            </div>
          </div>
      </div>
       <Footer/>
      </>
    );
}
export default ContactPage;