import React from "react";
import Sect4Card from "./Steps";
import Steps from "./Steps";

function Section4() {
     return (
       <div className="container text-center section-4">
         <div className="d-flex justify-content-center align-items-center gap-2 mb-4">
           <div>
             <i className="bi bi-star"></i>
           </div>
           <small className="fw-bold text-uppercase">how it work</small>
         </div>
         <h1 className="main-title mb-3">
           Get Cleaner{" "}
           <span>
             Space In
             <br></br>Four{" "}
           </span>
           Steps
         </h1>

         <div>
           <Steps />
         </div>
       </div>
     );
}
export default Section4;