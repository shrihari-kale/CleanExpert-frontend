import { useState, useEffect } from "react";
import Footer from "../Footer";

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
      const response = await fetch("http://localhost:3000/api/review");
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
      const response = await fetch("http://localhost:3000/api/review", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reviewData),
      });
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
      <div className="container-fluid  min-vh-100 py-5">
        <div className="container p-5">
          {/* Form */}
          <form onSubmit={handlesubmit}>
            <div className="card p-4 shadow-lg border-0">
              <h1 className="fw-bold mb-4 text-center">Customer Review</h1>

              <input
                type="text"
                placeholder="Enter Customer Name"
                className="form-control mb-3"
                value={reviewData.name}
                onChange={(e) =>
                  setReviewData({ ...reviewData, name: e.target.value })
                }
              />

              <textarea
                placeholder="Write Review"
                className="form-control mb-3"
                rows="4"
                value={reviewData.writeReview}
                onChange={(e) =>
                  setReviewData({ ...reviewData, writeReview: e.target.value })
                }
              ></textarea>

              <button className="btn btn-primary" type="submit">
                Add Review
              </button>
            </div>
          </form>

          {/* Review Section */}
          <div className="mt-5">
            <h2 className="fw-bold mb-4">
              Customer Reviews <span>Total Review:{reviews.length}</span>
            </h2>

            <div className="row g-4">
              {reviews.map((elem, idx) => {
                return (
                  <div key={idx} className="col-md-4">
                    <div className="card shadow-lg border-0 h-100">
                      <div className="card-body position-relative">
                        <span
                          onClick={() => {
                            deleteReview(idx);
                          }}
                          className="position-absolute top-0 end-0 m-3 fw-bold fs-5"
                          style={{ cursor: "pointer" }}
                        >
                          {/* × */}
                        </span>

                        <h4 className="fw-bold">{elem.name}</h4>

                        <p className="text-secondary mt-3">
                          {elem.writeReview}
                        </p>

                        <h5 className="text-warning">⭐⭐⭐⭐⭐</h5>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Review;
