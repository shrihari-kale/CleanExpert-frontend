import { useState, useEffect } from "react";
import Navbar from "./Navbar";

function ViewBooking() {
const [bookings, setBookings] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState("");
useEffect(() => {
const fetchBookings = async () => {
try {
const token = sessionStorage.getItem("token");


  if (!token) {
    throw new Error("Please login to view your bookings.");
  }

  const response = await fetch("http://localhost:3000/api/bookings", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
  });

  const data = await response.json();

  console.log("Bookings API response:", data);

  if (!response.ok) {
    throw new Error(data.message || "Failed to fetch bookings");
  }

  setBookings(Array.isArray(data.bookings) ? data.bookings : []);
  setError("");
} catch (err) {
  console.error("Error fetching bookings:", err);
  setError(err.message || "Unable to load bookings.");
} finally {
  setLoading(false);
}

};

fetchBookings();
}, []);


const getStatusClass = (status) => {
switch ((status || "Pending").toLowerCase()) {
case "confirmed":
return "status-confirmed";
case "completed":
return "status-completed";
case "cancelled":
return "status-cancelled";
default:
return "status-pending";
}
};

const formatDate = (date) => {
if (!date) return "Not specified";


// Avoid changing dates that are stored as YYYY-MM-DD.
const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(date);

if (match) {
  return new Date(
    Number(match[1]),
    Number(match[2]) - 1,
    Number(match[3])
  ).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

const parsed = new Date(date);

return Number.isNaN(parsed.getTime())
  ? date
  : parsed.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });


};

return (
<> 
<Navbar/>
  <main className="my-bookings-page">
    <section className="my-bookings-hero">
      <div className="container">
        <span className="my-bookings-eyebrow">
          <i className="bi bi-calendar-check me-2"></i>
          CLEANEXPERT SERVICES
        </span>

        <h1>
          My <span>Bookings</span>
        </h1>

        <p>
          Keep track of your cleaning appointments, schedules, and booking
          details in one place.
        </p>
      </div>
    </section>

    <section className="my-bookings-content">
      <div className="container">
        <div className="my-bookings-heading">
          <div>
            <h2>Your Appointments</h2>
            <p>Here are the details of your bookings.</p>
          </div>

          <div className="my-bookings-count">
            <i className="bi bi-journal-check"></i>
            <span>
              <strong>{bookings.length}</strong> Bookings
            </span>
          </div>
        </div>

        {loading ? (
          <div className="my-bookings-message">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p>Loading your bookings...</p>
          </div>
        ) : error ? (
          <div className="my-bookings-message">
            <i className="bi bi-exclamation-circle"></i>
            <h3>Unable to Load Bookings</h3>
            <p>{error}</p>
          </div>
        ) : bookings.length === 0 ? (
          <div className="my-bookings-empty">
            <div className="empty-booking-icon">
              <i className="bi bi-calendar2-plus"></i>
            </div>

            <h3>No Bookings Yet</h3>

            <p>
              You haven't booked a cleaning service yet. Your appointments
              will appear here after you make a booking.
            </p>

            <a href="/servicescard" className="browse-services-btn">
              Explore Services
              <i className="bi bi-arrow-right ms-2"></i>
            </a>
          </div>
        ) : (
          <div className="row g-4">
            {bookings.map((booking, index) => (
              <div
                className="col-12 col-lg-6"
                key={booking._id || booking.id || index}
              >
                <article className="my-booking-card">
                  <div className="my-booking-card-top">
                    <div className="my-booking-service-icon">
                      <i className="bi bi-stars"></i>
                    </div>

                    <div className="my-booking-service-info">
                      <span className="my-booking-label">
                        CLEANING SERVICE
                      </span>

                      <h3>{booking.service || "Cleaning Service"}</h3>

                      <p>
                        Booking ID:{" "}
                        {(booking._id || booking.id || "")
                          .toString()
                          .slice(-8)
                          .toUpperCase() || "N/A"}
                      </p>
                    </div>

                    <span
                      className={`my-booking-status ${getStatusClass(
                        booking.status
                      )}`}
                    >
                      {booking.status || "Pending"}
                    </span>
                  </div>

                  <div className="my-booking-divider"></div>

                  <div className="my-booking-details">
                    <div className="my-booking-detail">
                      <div className="my-booking-detail-icon">
                        <i className="bi bi-calendar-event"></i>
                      </div>

                      <div>
                        <span>Booking Date</span>
                        <strong>{formatDate(booking.date)}</strong>
                      </div>
                    </div>

                    <div className="my-booking-detail">
                      <div className="my-booking-detail-icon">
                        <i className="bi bi-clock"></i>
                      </div>

                      <div>
                        <span>Preferred Time</span>
                        <strong>{booking.time || "Not specified"}</strong>
                      </div>
                    </div>

                    <div className="my-booking-detail my-booking-address">
                      <div className="my-booking-detail-icon">
                        <i className="bi bi-geo-alt"></i>
                      </div>

                      <div>
                        <span>Service Address</span>
                        <strong>{booking.address || "Not specified"}</strong>
                      </div>
                    </div>
                  </div>

                  <div className="my-booking-card-footer">
                    <div>
                      <span>Total Price</span>
                      <strong>
                        ₹{Number(booking.amount || 0).toLocaleString("en-IN")}
                      </strong>
                    </div>

                    <span className="booking-reference">
                      <i className="bi bi-shield-check me-1"></i>
                      Booking Details
                    </span>
                  </div>
                </article>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  </main>
</>


);
}

export default ViewBooking;
