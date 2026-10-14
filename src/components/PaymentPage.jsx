import { useLocation,useNavigate } from "react-router-dom";

function PaymentPage() {
    const location = useLocation();
    const navigate = useNavigate();

    const booking = location.state?.booking;
    const price = location.state?.price;

    if(!booking || price == null) {
        return (
            <div className="container text-center mt-5">
                <h3>Booking details not found.</h3>

                <button 
                  className="btn btn-primary mt-3"
                  onClick={()=>navigate("/booking")}>
                    Go to Booking
                </button>
            </div>
        )
    }

const handlePayment = async () => {
  try {
    // Step 1: Backend kadun Razorpay Order tayar karun ghya
    const response = await fetch(
      "http://localhost:3000/api/payment/create-order",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(booking),
      },
    );


const data = await response.json();

if (!response.ok) {
  throw new Error(data.message || "Order creation failed");
}

// Step 2: Razorpay Checkout script load kara
const script = document.createElement("script");
script.src = "https://checkout.razorpay.com/v1/checkout.js";

script.onload = () => {
  const options = {
    key: data.keyId,
    amount: data.order.amount,
    currency: data.order.currency,
    name: "Cleaning Service",
    description: booking.service,
    order_id: data.order.id,

    handler: async function (paymentResponse) {
      try {
        const verifyResponse = await fetch(
          "http://localhost:3000/api/payment/verify-payment",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              razorpay_order_id: paymentResponse.razorpay_order_id,
              razorpay_payment_id: paymentResponse.razorpay_payment_id,
              razorpay_signature: paymentResponse.razorpay_signature,
            }),
          },
        );

        const verifyData = await verifyResponse.json();

        if (!verifyResponse.ok || !verifyData.success) {
          throw new Error(verifyData.message || "Payment verification failed");
        }

        alert("Payment verified successfully! Your booking is confirmed.");

        console.log("Confirmed booking:", verifyData.booking);

        navigate("/"); // Home page
      } catch (error) {
        console.error("Verification error:", error);
        alert(
          "Payment was completed, but verification could not be confirmed. Please contact support and do not pay again immediately.",
        );
      }
    },
    prefill: {
      name: booking.name,
      email: booking.email,
      contact: booking.mobile,
    },

    theme: {
      color: "#0d6efd",
    },
  };

  const razorpay = new window.Razorpay(options);
  razorpay.open();
};

script.onerror = () => {
  alert("Razorpay Checkout load failed. Please try again.");
};

document.body.appendChild(script);
  } catch (error) {
    console.error("Payment error:", error);
    alert(error.message || "Unable to start payment");
  }
};



    return (
      <div className="container mt-5">
        <div className="card shadow p-4 mx-auto" style={{ maxWidth: "500px" }}>
          <h2 className="text-center mb-4">Payment Summary</h2>
          <p>
            <strong>Name:</strong>
            {booking.name}
          </p>
          <p>
            <strong>Service:</strong>
            {booking.service}
          </p>
          <p>
            <strong>Date:</strong>
            {booking.date}
          </p>
          <p>
            <strong>Time:</strong>
            {booking.time}
          </p>

          <hr />

          <h4 className="text-center">Total Amount: ₹{price}</h4>

          <button
            className="btn btn-success w-100 mt-3"
            onClick={handlePayment}
          >
            Pay Now
          </button>
        </div>
      </div>
    );
}

export default PaymentPage;