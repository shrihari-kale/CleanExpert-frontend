import React, { useEffect, useState } from "react";

function AdminDashboard() {
const [bookings, setBookings] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState("");

useEffect(() => {
const fetchBookings = async () => {
try {
const token = sessionStorage.getItem("token");


    const response = await fetch(
      "http://localhost:3000/api/bookings/admin/all",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Unable to fetch bookings");
    }

    setBookings(data.bookings || []);
  } catch (err) {
    setError(err.message);
  } finally {
    setLoading(false);
  }
};

fetchBookings();


}, []);

if (loading) {
return <div className="container mt-5">Loading bookings...</div>;
}

if (error) {
return ( <div className="container mt-5"> <div className="alert alert-danger">{error}</div> </div>
);
}

return ( <div className="container mt-5"> <h2 className="mb-4">Admin Dashboard</h2>


  <div className="card shadow-sm mb-4">
    <div className="card-body">
      <h5>Total Bookings: {bookings.length}</h5>
    </div>
  </div>

  <div className="table-responsive">
    <table className="table table-bordered table-striped align-middle">
      <thead className="table-dark">
        <tr>
          <th>Customer</th>
          <th>Mobile</th>
          <th>Service</th>
          <th>Date</th>
          <th>Time</th>
          <th>Add</th>
          <th>Amount</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>
        {bookings.length === 0 ? (
          <tr>
            <td colSpan="7" className="text-center">
              No bookings found.
            </td>
          </tr>
        ) : (
          bookings.map((booking) => (
            <tr key={booking._id}>
              <td>{booking.name}</td>
              <td>{booking.mobile}</td>
              <td>{booking.service}</td>
              <td>{booking.date}</td>
              <td>{booking.time}</td>
              <td>{booking.address}</td>
              <td>₹{booking.amount ?? 0}</td>
              <td>{booking.status || "Pending"}</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  </div>
</div>


);
}

export default AdminDashboard;
