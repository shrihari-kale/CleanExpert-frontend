import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function PaymentPage() {
const location = useLocation();
const navigate = useNavigate();

const booking = location.state?.booking;
const price = location.state?.price;

const [loading, setLoading] = useState(false);

const loadRazorpayScript = () => {
return new Promise((resolve, reject) => {
if (window.Razorpay) {
resolve(true);
return;
}


  const existingScript = document.querySelector(
    'script[src="https://checkout.razorpay.com/v1/checkout.js"]'
  );

  if (existingScript) {
    existingScript.addEventListener("load", () => resolve(true), {
      once: true,
    });
    existingScript.addEventListener(
      "error",
      () => reject(new Error("Unable to load Razorpay Checkout.")),
      { once: true }
    );
    return;
  }

  const script = document.createElement("script");
  script.src = "https://checkout.razorpay.com/v1/checkout.js";
  script.async = true;
  script.onload = () => resolve(true);
  script.onerror = () =>
    reject(new Error("Unable to load Razorpay Checkout. Check your internet connection."));

  document.body.appendChild(script);
});


};

const handlePayment = async () => {
if (loading) return;


const token = sessionStorage.getItem("token");

if (!token) {
  alert("Please login before booking.");
  navigate("/login");
  return;
}

if (!booking || price == null || Number(price) <= 0) {
  alert("Booking details or price are invalid.");
  navigate("/booking");
  return;
}

setLoading(true);

try {
  // Step 1: Create Razorpay order on backend
  const response = await fetch(
    "https://cleanexpert-backend-1.onrender.com/api/payment/create-order",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        ...booking,
        amount: Number(price),
      }),
    }
  );

  const data = await response.json();

  if (!response.ok || !data.success || !data.order?.id || !data.keyId) {
    throw new Error(data.message || "Order creation failed.");
  }

  // Step 2: Load Razorpay Checkout
  await loadRazorpayScript();

  // Step 3: Configure Razorpay Checkout
  const options = {
    key: data.keyId,
    amount: data.order.amount,
    currency: data.order.currency,
    name: "Cleaning Service",
    description: booking.service,
    order_id: data.order.id,

    prefill: {
      name: booking.name || "",
      email: booking.email || "",
      contact: booking.mobile || "",
    },

    theme: {
      color: "#0d6efd",
    },

    handler: async (paymentResponse) => {
      try {
        const verifyResponse = await fetch(
          "https://cleanexpert-backend-1.onrender.com/api/payment/verify-payment",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
              razorpay_order_id: paymentResponse.razorpay_order_id,
              razorpay_payment_id: paymentResponse.razorpay_payment_id,
              razorpay_signature: paymentResponse.razorpay_signature,
            }),
          }
        );

        const verifyData = await verifyResponse.json();

        if (!verifyResponse.ok || !verifyData.success) {
          throw new Error(
            verifyData.message || "Payment verification failed."
          );
        }

        alert("Payment verified successfully! Your booking is confirmed.");
        navigate("/");
      } catch (error) {
        console.error("Payment verification error:", error);
        alert(
          "Payment may have completed, but verification failed. Please contact support before trying again."
        );
      }
    },

    modal: {
      ondismiss: () => {
        console.log("Razorpay Checkout closed.");
      },
    },
  };

  const razorpay = new window.Razorpay(options);

  razorpay.on("payment.failed", (event) => {
    console.error("Razorpay payment failed:", event.error);
    alert(
      event.error?.description || "Payment failed. Please try again."
    );
  });

  razorpay.open();
} catch (error) {
  console.error("Payment error:", error);
  alert(error.message || "Unable to start payment.");
} finally {
  setLoading(false);
}


};

if (!booking || price == null) {
return ( <div className="container text-center mt-5"> <h3>Booking details not found.</h3>
<button
className="btn btn-primary mt-3"
onClick={() => navigate("/booking")}
>
Go to Booking </button> </div>
);
}

return ( <div className="container mt-5">
<div className="card shadow p-4 mx-auto" style={{ maxWidth: "500px" }}> <h2 className="text-center mb-4">Payment Summary</h2>


    <p>
      <strong>Name:</strong> {booking.name}
    </p>
    <p>
      <strong>Service:</strong> {booking.service}
    </p>
    <p>
      <strong>Date:</strong> {booking.date}
    </p>
    <p>
      <strong>Time:</strong> {booking.time}
    </p>

    <hr />

    <h4 className="text-center">Total Amount: ₹{price}</h4>

    <button
      className="btn btn-success w-100 mt-3"
      onClick={handlePayment}
      disabled={loading}
    >
      {loading ? "Processing..." : "Pay Now"}
    </button>
  </div>
</div>


);
}

export default PaymentPage;
