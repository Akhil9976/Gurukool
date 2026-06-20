import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../styles/login.css";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    const result = await login(username, password);

    if (result.success) {
      navigate("/");
    } else {
      alert(result.message);
    }
  };

  return (
    <div className="auth-page">
      <div className="center">
        <h1>Login</h1>

        <form onSubmit={submitHandler}>
          <div className="txt_field">
            <input
              type="text"
              id="username"
              required
              onChange={(e) => setUsername(e.target.value)}
            />
            <span></span>
            <label htmlFor="username">Username</label>
          </div>

          <div className="txt_field">
            <input
              type="password"
              id="password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <span></span>
            <label htmlFor="password">Password</label>
          </div>

          <div className="pass">Forgot Password?</div>

          <input type="submit" value="Login" />

          <div className="signup_link">
            Not a member?
            <Link to="/register"> Signup</Link>
          </div>
        </form>
      </div>
    </div>
  );
}