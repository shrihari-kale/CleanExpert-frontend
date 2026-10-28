import { useState } from "react";

function Signup({ onClose, onSwitchToLogin }) {
const [formData, setFormData] = useState({
name: "",
email: "",
mobile: "",
password: "",
confirmPassword: "",
});

const [message, setMessage] = useState("");
const [loading, setLoading] = useState(false);

const handleChange = (e) => {
setFormData({
...formData,
[e.target.name]: e.target.value,
});
};

const handleSubmit = async (e) => {
e.preventDefault();
setMessage("");


if (formData.password !== formData.confirmPassword) {
  setMessage("Passwords do not match!");
  return;
}

setLoading(true);

try {
  const response = await fetch(
    "http://localhost:3000/api/auth/register",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Signup failed");
  }

  setMessage("Account created successfully!");

  setFormData({
    name: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });
} catch (error) {
  setMessage(error.message || "Something went wrong");
} finally {
  setLoading(false);
}


};

return ( <div className="auth-overlay" onClick={onClose}>
<div
className="auth-modal"
onClick={(e) => e.stopPropagation()}
> <button
       type="button"
       className="auth-close"
       onClick={onClose}
       aria-label="Close signup"
     >
× </button>


    <h2 className="text-center mb-4">Create Account</h2>

    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Full Name</label>
        <input
          type="text"
          name="name"
          className="form-control"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Email</label>
        <input
          type="email"
          name="email"
          className="form-control"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Mobile Number</label>
        <input
          type="tel"
          name="mobile"
          className="form-control"
          value={formData.mobile}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Password</label>
        <input
          type="password"
          name="password"
          className="form-control"
          value={formData.password}
          onChange={handleChange}
          minLength={8}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          className="form-control"
          value={formData.confirmPassword}
          onChange={handleChange}
          minLength={8}
          required
        />
      </div>

      {message && (
        <div className="alert alert-info" role="alert">
          {message}
        </div>
      )}

      <button
        type="submit"
        className="btn btn-primary w-100"
        disabled={loading}
      >
        {loading ? "Creating Account..." : "Sign Up"}
      </button>
    </form>

    <p className="text-center mt-3 mb-0">
      Already have an account?{" "}
      <button
        type="button"
        className="auth-link"
        onClick={onSwitchToLogin}
      >
        Login
      </button>
    </p>
  </div>
</div>


);
}

export default Signup;
