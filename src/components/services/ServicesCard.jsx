
import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";

import home from "../../assets/homecleaning.png";
import office from "../../assets/officecleaning.png";
import deep from "../../assets/deepcleaning.png";
import tank from "../../assets/watertank.png";

const services = [
  {
    title: "Home Cleaning",
    image: home,
    desc: "Complete home cleaning to keep your living space fresh and comfortable.",
    price: 999,
    icon: "bi-house-door",
  },
  {
    title: "Office Cleaning",
    image: office,
    desc: "Keep your workspace neat, clean, and ready for productive work.",
    price: 1499,
    icon: "bi-building",
  },
  {
    title: "Deep Cleaning",
    image: deep,
    desc: "Detailed cleaning for areas that need extra attention.",
    price: 1900,
    icon: "bi-stars",
  },
  {
    title: "Water Tank Cleaning",
    image: tank,
    desc: "Cleaning services to help maintain a cleaner water storage tank.",
    price: 699,
    icon: "bi-droplet",
  },
  {
    title: "Bathroom Cleaning",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=900&q=80",
    desc: "Give your bathroom a fresh look with detailed cleaning.",
    price: 499,
    icon: "bi-water",
  },
  {
    title: "Garden Cleaning",
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=900&q=80",
    desc: "Keep your garden tidy, organized, and enjoyable.",
    price: 699,
    icon: "bi-flower1",
  },
];

function ServicesCard() {
  const navigate = useNavigate();

  return (
    <>
    <Navbar/>
    <section className="services-catalog-section">
      <div className="container py-5">
        <div className="services-catalog-heading text-center mt-5">
          <span className="services-catalog-label">
            <i className="bi bi-stars"></i> CLEANING SOLUTIONS
          </span>

          <h1>
            Our Cleaning <span>Services</span>
          </h1>

          <p>
            Explore our range of cleaning services and choose the right
            solution for your space.
          </p>
        </div>

        <div className="row g-4 mt-4">
          {services.map((service) => (
            <div
              className="col-sm-6 col-lg-4"
              key={service.title}
            >
              <article className="catalog-service-card h-100">
                <div className="catalog-service-image-wrapper">
                  <img
                    src={service.image}
                    className="catalog-service-image"
                    alt={service.title}
                    loading="lazy"
                  />

                  
                </div>

                <div className="catalog-service-body">
                  <h2>{service.title}</h2>

                  <p>{service.desc}</p>

                  <div className="catalog-service-footer">
                    <div>
                      <small>Starting from</small>
                      <h3>₹{service.price}</h3>
                    </div>

                    <button
                      type="button"
                      className="catalog-book-btn"
                      onClick={() =>
                        navigate("/booking", {
                          state: {
                            service: service.title,
                            price: service.price,
                          },
                        })
                      }
                    >
                      Book Now <i className="bi bi-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}

export default ServicesCard;

