import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/login.css";

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const savedUser = JSON.parse(
      localStorage.getItem("registeredUser")
    );

    if (
      savedUser &&
      savedUser.username === username &&
      savedUser.password === password
    ) {
        console.log("Login Success")
        
        localStorage.setItem(
        "loggedInUser",
        savedUser.username
      );

      navigate("/");
    } else {
      alert("Invalid Username or Password");
    }
  };

  return (
    <div className="center">
      <h1>Login</h1>

      <form onSubmit={submitHandler}>

        <div className="txt_field">
          <input type="text" id="username" required 
           onChange={(e) => setUsername(e.target.value)}/>
          <span></span>
          <label htmlFor="username">Username</label>
        </div>

        <div className="txt_field">
          <input type="password" id="password" required 
           onChange={(e) => setPassword(e.target.value)}/>
          <span></span>
          <label htmlFor="password">Password</label>
        </div>

        <div className="pass">
          Forgot Password?
        </div>

        <input
          type="submit"
          value="Login"
        />

        <div className="signup_link">
          Not a member?
          <Link to="/register"> Signup</Link>
        </div>

      </form>
    </div>
  );
}

export default Login;