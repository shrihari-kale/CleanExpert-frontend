import React from "react";

const data = [
  {
    title: "Residential Services",
    img: "https://images.pexels.com/photos/6195130/pexels-photo-6195130.jpeg",
    desc: "Out indusetail cleaning ",
  },
  {
    title: "Skilled Cleaning",
    img: "https://images.pexels.com/photos/4108710/pexels-photo-4108710.jpeg",
    desc: "Highly trained cleaning staff.",
  },
  {
    title: "Regular Home Cleaning",
    img: "https://images.pexels.com/photos/6195290/pexels-photo-6195290.jpeg",
    desc: "Daily or weekly cleaning service.",
  },
  {
    title: "Residential Services",
    img: "https://images.pexels.com/photos/6195130/pexels-photo-6195130.jpeg",
    desc: "Out indusetail cleaning ",
  },
  {
    title: "Skilled Cleaning",
    img: "https://images.pexels.com/photos/4108710/pexels-photo-4108710.jpeg",
    desc: "Highly trained cleaning staff.",
  },
  {
    title: "Regular Home Cleaning",
    img: "https://images.pexels.com/photos/6195290/pexels-photo-6195290.jpeg",
    desc: "Daily or weekly cleaning service.",
  },
];

function ServiceCard() {
  return (
    <div className="container py-5">
      <div className="d-flex gap-4 overflow-auto service-container">
        {data.map((item, index) => (
          <div className="service-card" key={index}>
            <div className="img-box">
              <img src={item.img} alt="" />
              <div className="icon">→</div>
            </div>
            <div className="p-3">
              <h5>{item.title}</h5>
              <hr></hr>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default ServiceCard;
