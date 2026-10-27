import { useState, useEffect } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";

function Review() {
  const [task, setTask] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [reviewData, setReviewData] = useState({
    name: "",
    writeReview: "",
  });

  // get api call
  const fetchReviews = async () => {
    try {
      const response = await fetch(
        "https://cleanexpert-backend-1.onrender.com/api/review",
      );
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "failed to fetch bookings");
      }
      setReviews(data.reviews);
    } catch (error) {
      console.error("Error fetching bookings:", error);
    }
  };
  useEffect(() => {
    fetchReviews();
  }, []);

  // post api call
  const handlesubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://cleanexpert-backend-1.onrender.com/api/review",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(reviewData),
        },
      );
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Review failed");
      }
      alert("Review Added");

      setReviewData({
        name: "",
        writeReview: "",
      });
      await fetchReviews();
    } catch (error) {
      console.error("Review error:", error);
      alert("Booking failed:" + error.message);
    }
  };

  const deleteReview = (idx) => {
    const copyTask = [...task];

    copyTask.splice(idx, 1);

    setTask(copyTask);
  };

  return (
    <>
      <Navbar />
      <main className="review-page">
        <section className="review-hero">
          <div className="container text-center">
            <span className="review-eyebrow">
              <i className="bi bi-stars"></i> CUSTOMER EXPERIENCES
            </span>

            <h1>
              Your Feedback, <span>Our Motivation.</span>
            </h1>

            <p>
              Share your experience with CleanExpert and help us improve our
              cleaning services.
            </p>
          </div>
        </section>
        <section className="review-content">
         <div className="container">
          <div className="row g-5 align-item-start">
            <div className="col-lg-5">
            <div className="review-form-card">
            <div className="review-from-icon">
              <i className="bi bi-chat-squre-heart"></i>
            </div>
            {/* Form */}
            <form onSubmit={handlesubmit}>
              {/* <div className="card p-4 shadow-lg border-0"> */}
                {/* <h1 className="fw-bold mb-4 text-center">Customer Review</h1> */}

                <input
                  type="text"
                  placeholder="Enter your Name"
                  className="form-control review-input"
                  value={reviewData.name}
                  onChange={(e) =>
                    setReviewData({ ...reviewData, name: e.target.value })
                  }
                />
                
                {/* <lable className="mt-5">Your Review</lable> */}
                <textarea
                  placeholder="Write Review"
                  className="form-control review-input mt-5"
                  rows="4"
                  value={reviewData.writeReview}
                  onChange={(e) =>
                    setReviewData({
                      ...reviewData,
                      writeReview: e.target.value,
                    })
                  }
                ></textarea>

                <button className="review-submit-btn" type="submit">
                  Add Review
                </button>
              {/* </div> */}
            </form>
            </div>
            </div>

            {/* Review Section */}
            <div className="col-lg-7">
               <div className="review-list-heading">
                  <div>
                    <span className="review-section-lable">
                      WHAT CUSTOMER SAY
                    </span>
                    <h2>Customer Reviews</h2>
                  </div>

                  <div className="review-count">
                    <strong>{reviews.length}</strong>
                    <span>Total Reviews</span>
                  </div>
               </div>

              <div className="row g-4">
                {reviews.map((elem, idx) => {
                  return (
                    <div key={idx} className="col-md-6">
                      <div className="review-card h-100">
                        <div className="review-card-top">
                          <span
                            onClick={() => {
                              deleteReview(idx);
                            }}
                            className="position-absolute top-0 end-0 m-3 fw-bold fs-5"
                            style={{ cursor: "pointer" }}
                          >
                            {/* × */}
                          </span>
                          <div className="review-avatar">
                            {(elem.name || "c")
                              .trim()
                              .charAt(0)
                              .toUpperCase()}
                          </div>
                          <div>
                          <h3>{elem.name}</h3>
                          <span>CleanExpert Customer</span>
                           </div>
                           </div>

                           <div className="review-quote-icon">
                              <i className="bi bi-quote"></i>
                           </div>

                          <p className="review-card-text">
                            {elem.writeReview}
                          </p>
             
                          <div className="review-card-footer">
                            <i className="bi bi-heart-fill"></i>
                            <span>Thank you for feedback</span>
                          </div>
                        </div>
                      </div>
                    // </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        </section>
        <Footer />
      </main>
    </>
  );
}

export default Review;
