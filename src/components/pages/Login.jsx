import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
const navigate = useNavigate();

const [formData, setFormData] = useState({
email: "",
password: "",
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
setLoading(true);

try {
  const response = await fetch(
    "http://localhost:3000/api/auth/login",
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
    throw new Error(data.message || "Login failed");
  }

  // Save JWT token and user details
  sessionStorage.setItem("token", data.token);
  sessionStorage.setItem("user", JSON.stringify(data.user));

  // Redirect based on user role
  if (data.user.role === "admin") {
    navigate("/admin");
  } else {
    navigate("/");
  }
} catch (error) {
  setMessage(error.message || "Something went wrong");
} finally {
  setLoading(false);
}


};

return (
<div className="container mt-5" style={{ maxWidth: "450px" }}> <div className="card shadow p-4"> <h2 className="text-center mb-4">Login</h2>


    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input
          className="form-control"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Password</label>
        <input
          className="form-control"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>

      {message && (
        <div className="alert alert-danger" role="alert">
          {message}
        </div>
      )}

      <button
        type="submit"
        className="btn btn-primary w-100"
        disabled={loading}
      >
        {loading ? "Logging in..." : "Login"}
      </button>
    </form>

    <p className="text-center mt-3 mb-0">
      Don't have an account? <Link to="/signup">Sign Up</Link>
    </p>
  </div>
</div>


);
}

export default Login;
