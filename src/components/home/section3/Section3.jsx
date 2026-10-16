import React from "react";

function Section3() {
  return (
    <div className="container p-5 mt-4">
      <div className="row">
        <div className="col-sm-5 col-md-6 mt-5">
          <div className="d-flex align-items-center gap-2">
            <div>
              <i className="bi bi-star"></i>
            </div>
            <small className="fw-bold text-uppercase ">What you do</small>
          </div>
          <h1 className="main-title mt-5 mb-3">
            Behind
            <span>
              {" "}
              The Home <br></br>Master
            </span>{" "}
            Company <br></br>
            Stories.
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            <br></br> officia iste non distinctio facilis itaque voluptate nemo
            veniam labore voluptas dolores odio{" "}
          </p>

          <div className="flex">
            <div>
              <h1>269+</h1>
              <p>Active Clients</p>
            </div>
            <div>
              <h1>386+</h1>
              <p>Glorious Years</p>
            </div>
          </div>
        </div>

        <div className=" col-md-6 p-5 section3-img">
          <img
            src="https://i.pinimg.com/736x/45/59/d5/4559d565d473a92ee5bb2ce9096d065d.jpg"
            className="img-fluid rounded-4"
          />
        </div>
      </div>
    </div>
  );
}
export default Section3;
