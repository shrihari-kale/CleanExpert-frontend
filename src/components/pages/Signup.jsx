import { useState } from "react";

function Signup() {
    const [formData, setFormData] = useState({
        name:"",
        email:"",
        mobile:"",
        password:"",
        confirmPassword:"",
    });
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]:e.target.value,
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");
        setLoading(true);

        try{
            const response = await fetch("http://localhost:3000/api/auth/register",
                {
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json",
                    },
                    body:JSON.stringify(formData),
                }

            );
            const data = await response.json();

            if(!response.ok){
                throw new Error(data.message || "Signup failed");
            }
            setMessage("Account create successfully!");

            setFormData({
                name:"",
                email:"",
                mobile:"",
                password:"",
                confirmPassword:"",
            });
        }catch(error){
            setMessage(error.message || "Something went wrong");

        } finally{
            setLoading(false);
        }
    };
    
    return (
      <div className="container mt-5" style={{ maxWidth: "500px" }}>
        <div className="card shadow p-4">
          <h2 className="text-centermb-4">Create Account</h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Full name</label>
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
              {" "}
              <label className="form-label">Email</label>{" "}
              <input
                type="email"
                name="email"
                className="form-control"
                value={formData.email}
                onChange={handleChange}
                required
              />{" "}
            </div>{" "}
            <div className="mb-3">
              {" "}
              <label className="form-label">Mobile Number</label>{" "}
              <input
                type="tel"
                name="mobile"
                className="form-control"
                value={formData.mobile}
                onChange={handleChange}
                required
              />{" "}
            </div>{" "}
            <div className="mb-3">
              {" "}
              <label className="form-label">Password</label>{" "}
              <input
                type="password"
                name="password"
                className="form-control"
                value={formData.password}
                onChange={handleChange}
                minLength={8}
                required
              />{" "}
            </div>{" "}
            <div className="mb-3">
              {" "}
              <label className="form-label">Confirm Password</label>{" "}
              <input
                type="password"
                name="confirmPassword"
                className="form-control"
                value={formData.confirmPassword}
                onChange={handleChange}
                minLength={8}
                required
              />{" "}
            </div>
            {message && (
              <div className="alert alert-info" role="alert">
                {" "}
                {message}{" "}
              </div>
            )}{" "}
            <button
              type="submit"
              className="btn btn-primary w-100"
              disabled={loading}
            >
              {" "}
              {loading ? "Creating Account..." : "Sign Up"}{" "}
            </button>
          </form>
        </div>
      </div>
    );
}

export default Signup;