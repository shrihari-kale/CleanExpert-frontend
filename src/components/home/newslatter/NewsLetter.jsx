import React from 'react'

export const NewsLetter = () => {
  return (
    <div className="container p-4 mt-5">
      <div className="row">
        <div className="col">
          <h2 className="main-title  mb-4">
            Join Our
            <span>
              {" "}
              Newsletter<br></br>Stay Up To
            </span>{" "}
            Date
          </h2>
          <p>
            Join our newslatter.Lear something new, gain access to exclusice
            content,<br></br>
            and stay informmed with the letest updates in the industry
          </p>
        </div>

        <div className="col mt-5">
          <input
            type="email"
            className="form-control"
            placeholder="Email address..."
          />
          <button className="newsletter-btn">Subscribe Now</button>
        </div>
      </div>
      <hr></hr>
      <hr></hr>
    </div>
  );
}

