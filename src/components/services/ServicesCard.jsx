import React from "react";
import { useNavigate } from "react-router-dom";
import home from "../../assets/homecleaning.png";
import office from "../../assets/officecleaning.png";
import deep from "../../assets/deepcleaning.png";


const services = [
  { title: "Home Cleaning",
    image: home,
    desc: "Complete home cleaning service.",
    price:999,
   },

  { title: "Office Cleaning", 
    image: office, 
    desc: "Professional office cleaning.",
    price:1499,
   },

  { title: "Deep Cleaning", 
    image: deep, 
    desc: "Detailed deep cleaning.",
    price: 1900
  },
   {
    title: "Water Tank Cleaning", 
    image: "https://media.istockphoto.com/id/2150787685/photo/rooftop-view-of-overhead-water-tank-and-metal-staircase-in-dehradun-india.jpg?s=1024x1024&w=is&k=20&c=H9DLjtHHhkQ_kSYxC2WAKTwl9PKFXsQMwXniT9lUoPw=", 
    desc: "Keep clean.",
    price:699
   },

  { title: "Bathroom Cleaning", 
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a", 
    desc: "Sanitized and germ-free bathroom cleaning.",
    price:499
  },

  { title: "Garden Cleaning", 
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b", 
    desc: "Beautiful and clean garden maintenance.",
    price:699
   },
];

const ServicesCard = () => {
  const navigate = useNavigate();

  return (
    <div className="container p-5">
      <h1 className="mt-5 p-5 text-center">Our Services</h1>
      <div className="row">
        {services.map((service, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card shadow h-100">
              <img
                src={service.image}
                className="card-img-top"
                alt={service.title}
                style={{ height: "220px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{service.title}</h5>
                <p className="card-text">{service.desc}</p>
                <h5 className="text-success">₹{service.price}</h5>
                <button
                  className="btn btn-primary mt-auto"
                  onClick={() => navigate("/booking",{
                    state:{
                      service:service.title,
                      price:service.price,
                    },
                  })
                  }>
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesCard;
