import { useState, useEffect } from "react";
import Navbar from "./Navbar";

function ViewBooking() {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [updatingId, setUpdatingId] = useState(null);

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const response = await fetch(
                  "http://localhost:3000/api/bookings"
                );
              const data = await response.json();
              
              if(!response.ok) {
                throw new Error(data.message || "failed to fetch bookings");
              }
              setBookings(data.bookings);
            } catch(error){
                console.error("Error fetching bookings:",error);
            }
        };
        fetchBookings();
    },[]);

    return (
      <>
      <Navbar/>
      <div className="container mybooking">
        <h2 className="">Customer Bookings</h2>
        <p>Total Bookings:{bookings.length}</p>

        <table boder="1" cellPadding="10">
          <thead>
            <tr>
              <th>Name</th>
              <th>Mobile</th>
              <th>Email</th>
              <th>Service</th>
              <th>Date</th>
              <th>Time</th>
              <th>Address</th>
            </tr>
          </thead>

          <tbody>
            {bookings.map((booking) => (
              <tr key={booking.id}>
                <td>{booking.name}</td> 
                <td>{booking.mobile}</td>{" "}
                <td>{booking.email}</td>
                <td>{booking.service}</td>{" "}
                <td>{booking.date}</td> 
                <td>{booking.time}</td>{" "}
                <td>{booking.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </>
    );
}

export default ViewBooking;