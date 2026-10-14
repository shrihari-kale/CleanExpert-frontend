import { useState } from "react";
import { useLocation,useNavigate } from "react-router-dom";

function BookingForm() {
   
  const location = useLocation();
  const navigate = useNavigate();

  const selectedService = location.state?.service || "";
  const selectedPrice = location.state?.price || 0;

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    service: selectedService,
    date: "",
    time: "",
    address: "",
  });

  // const handlesubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await fetch("http://localhost:3000/api/bookings", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(formData),
  //     });
  //     const data = await response.json();

  //     if (!response.ok) {
  //       throw new Error(data.message || "Booking failed");
  //     }
  //     alert("Booking successful!");

  //     setFormData({
  //       name: "",
  //       mobile: "",
  //       email: "",
  //       service: "",
  //       date: "",
  //       time: "",
  //       address: "",
  //     });
  //   } catch (error) {
  //     console.error("Booking error:", error);
  //     alert("Booking failed:" + error.message);
  //   }
  // };

const handlesubmit = (e) => {
  e.preventDefault();

  navigate("/payment", {
    state: {
      booking: formData,
      price: selectedPrice,
    },
  });
};


  return (
    <div className="booking-container">
      <h2 className="booking-title">Book a cleaning Service</h2>

      <form className="booking-form" onSubmit={handlesubmit}>
        <label className="booking-lable">Name</label>
        <input
          className="booking-input"
          type="text"
          placeholder="Enter your name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        ></input>
        <label className="booking-lable">Mobile No</label>
        <input
          className="booking-input"
          type="tel"
          placeholder="Enter mobile number"
          value={formData.mobile}
          onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
        ></input>
        <label className="booking-lable">Email</label>
        <input
          className="booking-input"
          type="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        ></input>
        <label className="booking-lable">Service</label>
        <select
          className="booking-select"
          value={formData.service}
          onChange={(e) =>
            setFormData({ ...formData, service: e.target.value })
          }
        >
          <option value="">Select Service</option>
          <option value="Home Cleaning">Home Cleaning</option>
          <option value="Office Cleaning">Office Cleaning</option>
          <option value="Deep Cleaning">Deep Cleaning</option>
        </select>
        <p>
          <strong>Price:</strong> ₹{selectedPrice}
        </p>
        <label className="booking-lable">Date</label>{" "}
        <input
          className="booking-input"
          type="date"
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
        />
        <label className="booking-lable">Time</label>
        <input
          className="booking-input"
          type="time"
          value={formData.time}
          onChange={(e) => setFormData({ ...formData, time: e.target.value })}
        />
        <label className="booking-lable">Address</label>{" "}
        <textarea
          className="booking-textarea"
          value={formData.address}
          onChange={(e) =>
            setFormData({ ...formData, address: e.target.value })
          }
          placeholder="Enter your full address"
        />
        <button type="submit" className="booking-button">
          Submit Booking
        </button>
      </form>
    </div>
  );
}

export default BookingForm;
