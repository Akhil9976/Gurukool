import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../styles/login.css";

export default function Register() {
  const navigate = useNavigate();
  const { register } = useAuth();

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await register(user);

    if (!result.success) {
      alert(result.message);
      return;
    }

    alert("Registration Successful");
    navigate("/login");
  };

  return (
    <div className="auth-page">
      <div className="center">
        <h1>Register</h1>

        <form onSubmit={handleSubmit}>
          <div className="txt_field">
            <input
              type="text"
              id="reg-name"
              name="name"
              required
              onChange={handleChange}
            />
            <span></span>
            <label htmlFor="reg-name">Name</label>
          </div>

          <div className="txt_field">
            <input
              type="text"
              id="reg-username"
              name="username"
              required
              onChange={handleChange}
            />
            <span></span>
            <label htmlFor="reg-username">Username</label>
          </div>

          <div className="txt_field">
            <input
              type="email"
              id="reg-email"
              name="email"
              required
              onChange={handleChange}
            />
            <span></span>
            <label htmlFor="reg-email">Email</label>
          </div>

          <div className="txt_field">
            <input
              type="password"
              id="reg-password"
              name="password"
              required
              onChange={handleChange}
            />
            <span></span>
            <label htmlFor="reg-password">Password</label>
          </div>

          <div className="txt_field">
            <input
              type="password"
              id="reg-confirm-password"
              name="confirmPassword"
              required
              onChange={handleChange}
            />
            <span></span>
            <label htmlFor="reg-confirm-password">Confirm Password</label>
          </div>

          <input type="submit" value="Register" />

          <div className="signup_link">
            Already have an account?
            <Link to="/login"> Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
}