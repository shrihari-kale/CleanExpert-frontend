import React from "react";

const steps = [
  {
    id: "01",
    title: "Provide The Details",
    desc: "Fill out a quick form with details about your space, schedule, and preferences.",
    img: "https://i.pinimg.com/1200x/c1/0f/1e/c10f1e560ebaeb8f18781de0e285d207.jpg",
  },
  {
    id: "02",
    title: "Pick A Suitable Plan",
    desc: "We'll send you a personalized estimate — no hidden fees, no upselling.",
    img: "https://i.pinimg.com/1200x/c1/0f/1e/c10f1e560ebaeb8f18781de0e285d207.jpg",
  },
  {
    id: "03",
    title: "We House Cleaned",
    desc: "Our team arrives on time, equipped, and ready to clean thoroughly.",
    img: "https://i.pinimg.com/736x/a6/b5/93/a6b593e7850201e7da1f99bfe3db201c.jpg",
  },
  {
    id: "04",
    title: "You Enjoy & Relax",
    desc: "Enjoy a spotless home or workspace that looks, feels, and smells truly clean.",
    img: "https://media.istockphoto.com/id/1189188509/photo/relaxed-serene-young-woman-lounge-on-comfortable-sofa-at-home.jpg?s=1024x1024&w=is&k=20&c=oVTGcdOV3OFBoSQEmT0H_wGDT6bV_PyAB3gnlEhQbcQ=",
  },
];

function Steps() {
  return (
    <div className="container section-4">
      <div className="content d-flex justify-content-center">
        <div className="timeline">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`row step align-items-center ${
                index % 2 !== 0 ? "justify-content-end right" : "left"
              }`}
            >
              <div className="col-md-6 content">
                <div className="card shadow border-0 rounded-4 overflow-hidden">
                  <img
                    src={step.img}
                    alt={step.title}
                    className="card-img-top step-img"
                  />
                  <div className="card-body">
                    <h5 className="fw-bold">{step.title}</h5>
                    <p className="text-muted">{step.desc}</p>
                  </div>
                </div>
              </div>
              <div className="step-number">{step.id}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Steps;
