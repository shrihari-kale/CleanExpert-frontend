import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row gy-5 text-center text-md-start">
          {/* col-1 */}
          <div className="col-12 col-md-3 d-flex flex-column align-items-center align-items-md-start">
            <h2 className="logo">CleanExpert</h2>
            <p className="footer-text">
              Professional cleaning services for homes, offices and commercial
              spaces with trusted experts.
            </p>

            <div className="social-icons p-1">
              <i className="bi bi-facebook"></i>
              <i className="bi bi-instagram"></i>
              <i className="bi bi-twitter-x"></i>
              {/* <i className="bi bi-youtube"></i> */}
            </div>
          </div>

          {/* col-2 */}
          <div className="col-12 col-md-3 d-flex flex-column align-items-center">
            <h4>Quick Links</h4>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Pricing</a>
            <a href="#">Contact</a>
          </div>

          {/* col-3 */}
          <div className="col-12 col-md-3 d-flex flex-column align-items-center">
            <h4 className="footer-title">Services</h4>

            <a href="#">Home Cleaning</a>
            <a href="#">Office Cleaning</a>
            <a href="#">Deep Cleaning</a>
            <a href="#">Kitchen Cleaning</a>
            <a href="#">Bathroom Cleaning</a>
          </div>
          {/* col--4 */}
          <div className="col-12 col-md-3 d-flex flex-column align-items-center align-items-md-end">
            <h4>Contact</h4>
            <p>
              <i className="bi bi-telephone-fill"></i> +91 9356268841
            </p>
            <p>
              <i className="bi bi-envelope-fill"></i> cleanexpert@gmail.com
            </p>
            <p>
              <i className="bi bi-geo-alt-fill"></i> pune, Maharashtra
            </p>
          </div>
        </div>

        {/* line */}
        <hr></hr>
        {/* copyright */}
        <div className="text-center copyright">
          © 2026 CleanExpert Services. All Rights Reserved. Developed by :
          Shrihari Kale
        </div>
      </div>
      <h1 className="bg-text">CleanExpert</h1>
    </footer>
  );
}

export default Footer;