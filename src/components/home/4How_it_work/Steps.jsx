
import React from "react";

const steps = [
  {
    id: "01",
    icon: "bi-grid",
    title: "Choose Your Service",
    desc: "Explore our cleaning services and select the one that suits your needs.",
  },
  {
    id: "02",
    icon: "bi-calendar-check",
    title: "Book Your Schedule",
    desc: "Fill in your contact details, address, and preferred date and time.",
  },
  {
    id: "03",
    icon: "bi-clipboard-check",
    title: "Confirm Your Booking",
    desc: "Review your booking details and complete the available booking steps.",
  },
  {
    id: "04",
    icon: "bi-house-check",
    title: "Enjoy a Cleaner Space",
    desc: "Get ready to enjoy a cleaner and more comfortable environment.",
  },
];

function Steps() {
  return (
    <div className="container">
      <div className="row g-4">
        {steps.map((step) => (
          <div className="col-sm-6 col-lg-3" key={step.id}>
            <div className="how-step-card h-100">
              <div className="how-step-top">
                <div className="how-step-icon">
                  <i className={`bi ${step.icon}`}></i>
                </div>
                <span className="how-step-number">{step.id}</span>
              </div>

              <h5>{step.title}</h5>
              <p>{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Steps;

