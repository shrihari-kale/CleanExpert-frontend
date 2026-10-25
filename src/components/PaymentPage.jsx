import { useLocation, useNavigate } from "react-router-dom";

function PaymentPage() {
const location = useLocation();
const navigate = useNavigate();

const booking = location.state?.booking;
const price = location.state?.price;

const handlePayment = async () => {
const token = sessionStorage.getItem("token");


if (!token) {
  alert("Please login before booking.");
  navigate("/login");
  return;
}

if (!booking || price == null) {
  alert("Booking details not found.");
  navigate("/booking");
  return;
}

try {
  // Step 1: Create Razorpay order
  const response = await fetch(
    "http://localhost:3000/api/payment/create-order",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        ...booking,
        amount: price,
      }),
    }
  );

  const data = await response.json();

  if (!response.ok || !data.success) {
    throw new Error(data.message || "Order creation failed.");
  }

  // Step 2: Load Razorpay Checkout
  if (!window.Razorpay) {
    await new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = resolve;
      script.onerror = () =>
        reject(new Error("Unable to load Razorpay Checkout."));

      document.body.appendChild(script);
    });
  }

  // Step 3: Configure Razorpay
  const options = {
    key: data.keyId,
    amount: data.order.amount,
    currency: data.order.currency,
    name: "Cleaning Service",
    description: booking.service,
    order_id: data.order.id,

    prefill: {
      name: booking.name,
      email: booking.email,
      contact: booking.mobile,
    },

    theme: {
      color: "#0d6efd",
    },

    handler: async (paymentResponse) => {
      try {
        // Step 4: Verify payment on backend
        const verifyResponse = await fetch(
          "http://localhost:3000/api/payment/verify-payment",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
              razorpay_order_id:
                paymentResponse.razorpay_order_id,
              razorpay_payment_id:
                paymentResponse.razorpay_payment_id,
              razorpay_signature:
                paymentResponse.razorpay_signature,
            }),
          }
        );

        const verifyData = await verifyResponse.json();

        if (!verifyResponse.ok || !verifyData.success) {
          throw new Error(
            verifyData.message || "Payment verification failed."
          );
        }

        alert(
          "Payment verified successfully! Your booking is confirmed."
        );

        console.log("Confirmed booking:", verifyData.booking);

        navigate("/");
      } catch (error) {
        console.error("Payment verification error:", error);

        alert(
          "Payment may have been completed, but verification failed. Please contact support before attempting another payment."
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
}


};

if (!booking || price == null) {
return ( <div className="container text-center mt-5"> <h3>Booking details not found.</h3>


    <button
      className="btn btn-primary mt-3"
      onClick={() => navigate("/booking")}
    >
      Go to Booking
    </button>
  </div>
);


}

return ( <div className="container mt-5">
<div
className="card shadow p-4 mx-auto"
style={{ maxWidth: "500px" }}
> <h2 className="text-center mb-4">Payment Summary</h2>


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
    >
      Pay Now
    </button>
  </div>
</div>


);
}

export default PaymentPage;
