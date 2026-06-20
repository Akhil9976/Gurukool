import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/login.css";

function Register() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (user.password !== user.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    localStorage.setItem(
      "registeredUser",
      JSON.stringify(user)
    );

    alert("Registration Successful");

    navigate("/login");
  };
  
  return (
    <div className="center">
      <h1>Register</h1>

      <form onSubmit={handleSubmit}>
        <div className="txt_field">
          <input
            type="text"
            name="username"
            required
            onChange={handleChange}
          />
          <span></span>
          <label>Username</label>
        </div>

        <div className="txt_field">
          <input
            type="email"
            name="email"
            required
            onChange={handleChange}
          />
          <span></span>
          <label>Email</label>
        </div>

        <div className="txt_field">
          <input
            type="password"
            name="password"
            required
            onChange={handleChange}
          />
          <span></span>
          <label>Password</label>
        </div>

        <div className="txt_field">
          <input
            type="password"
            name="confirmPassword"
            required
            onChange={handleChange}
          />
          <span></span>
          <label>Confirm Password</label>
        </div>

        <input type="submit" value="Register" />

        <div className="signup_link">
          Already have an account?
          <Link to="/login"> Login</Link>
        </div>
      </form>
    </div>
  );
}

export default Register;