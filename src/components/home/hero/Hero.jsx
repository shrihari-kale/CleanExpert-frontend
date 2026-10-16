import React from "react";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <div className="hero">
      <div className="contain text-white hero-img">
        <h1 className="display-4 fw-bold main-text">
          Professional <br></br>
          <span className="text-primary">Cleaning</span>
          Services
        </h1>

        <p className="mt-3 main-text">
          Professional cleaning services for homes and offices.
        </p>

        <button
          className="btn btn-primary mt-3"
          style={{ width: "10%", marginLeft: "30px" }}
          onClick={() => navigate("/servicescard")}
        >
          Our Services
        </button>
        
      </div>
    </div>
  );
}

export default Hero;