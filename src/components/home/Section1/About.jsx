import React from "react";

function About() {
  return (
    <section className="why">
      <div className="d-flex justify-content-center align-items-center gap-2 mb-3">
        <div>
          <i className="bi bi-star"></i>
        </div>
        <small className="fw-bold text-uppercase ">About cleaning agency</small>
      </div>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="main-title">
            Why Should{" "}
            <span>
              You <br />
              Choose{" "}
            </span>
            Our Services?
          </h2>
          <i className="bi bi-stars"></i>
          <p className="sub-text">
            We are comenitted to delivering exceptional cleaning services that
            leave your spaces <br></br>spaking clean and hygienic. Out
            professional team user eco-friendly products to ensure<br></br> a
            safe and healthy envorment for you.
          </p>
        </div>

        <div className="row align-items-center">
          {/* LEFT */}
          <div className="col-md-6 left">
            <div className="item">
              <div className="circle">🏠</div>
              <div>
                <h5>House Cleaning</h5>
                <p>
                  {" "}
                  Apartment, condod and houses-busy people<br></br>
                  who want their house to feel fresh again.
                </p>
                <hr></hr>
              </div>
            </div>

            <div className="item">
              <div className="circle">🏢</div>
              <div>
                <h5>Office Cleaning</h5>
                <p>
                  Maintain a clean healthy workspace that supports<br></br>
                  productivity and professionalism.
                </p>
                <hr></hr>
              </div>
            </div>

            <div className="item">
              <div className="circle">🛒</div>
              <div>
                <h5>Store Cleaning</h5>
                <p>
                  Retail shops,studiosm and showrooms-sportless<br></br>
                  spaces that make a great impreaaion.
                </p>
                <hr></hr>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="col-md-6 right">
            <img src="https://images.pexels.com/photos/6195130/pexels-photo-6195130.jpeg" />
            <img src="https://media.istockphoto.com/id/654153794/photo/cleaning-service-sponges-chemicals-and-mop.jpg?s=612x612&w=0&k=20&c=nt781T5f6PJbl56ZVFwCeFMOODeg-zDnNmn_PQaFDxU=" />
          </div>
        </div>
      </div>
      <div className="row text-center about-bg-text">
        <div className="col-md-4 col-12">VACCUME</div>

        <div className="col-md-4 col-12">CLEANING</div>

        <div className="col-md-4 col-12">SWEEPING</div>
      </div>
    </section>
  );
}

export default About;