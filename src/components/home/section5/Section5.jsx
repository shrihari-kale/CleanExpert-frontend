import React from "react";

function Section5() {
  return (
    <div className="mt-5 p-5">
      <div className="row">
        <div className=" col-md-6 ">
          <img
            src="https://i.pinimg.com/1200x/df/f8/fd/dff8fd81708903bc3f2fd844333405eb.jpg"
            className="img-fluid rounded-4"
          />
        </div>

        <div className="col-sm-5 col-md-6 ">
          <div className="d-flex align-items-center gap-2 section5">
            <div>
              <i className="bi bi-star"></i>
            </div>
            <small className="fw-bold text-uppercase">Why choosing us</small>
          </div>

          <h6 className="main-title mb-3 section5 mt-5">
            We Make
            <span>
              {" "}
              Your Home<br></br> Sparkle
            </span>{" "}
            And Shine
          </h6>
          <p className="text-muted text-left section5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            <br></br> officia iste non distinctio facilis itaque voluptate nemo
            veniam labore voluptas dolores odio{" "}
          </p>

          <div className="section5">
            <div className="mt-4">
              <h4>100% Satisfaction</h4>
              <p className="text-muted">
                Cleaning services ecompass a wide range of tasks related
                <br></br>
                to the installation,repair,and maintenance
              </p>
            </div>
            <div className="mt-4">
              <h4>Eco-Friendly Cleaning Products</h4>
              <p className="text-muted">
                cleaning services ecompass a wide range of tasks related
                <br></br>
                to the installation,repair,and maintenance
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Section5;
