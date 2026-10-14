import React from "react";

function Hero() {
     return (
       <div className="hero">
         <div className="container text-white hero-img">
           <h1 className="display-4 fw-bold main-text">
             Professional <br></br>
             <span className="text-primary">Cleaning</span> Services
           </h1>

           <p className="mt-3 main-text">
             Professional cleaning services for homes and offices.
           </p>

           <button
             className="btn btn-primary mt-3"
             style={{ width: "10%", marginLeft: "30px" }}
           >
             Our Services
           </button>
         </div>
       </div>
     );
}
export default Hero;