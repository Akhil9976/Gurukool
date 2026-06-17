// import Header from "../components/Header";
// import Footer from "../components/Footer";
import "../styles/login.css";

import { useState } from "react";

export default function Login() {

 const [username,setUsername] = useState("");
 const [password,setPassword] = useState("");

 const submitHandler=(e)=>{
  e.preventDefault();

  alert("Login Successful");
 };

 return (

  <div className="center">

   <h1>Login</h1>

   <form onSubmit={submitHandler}>

    <div className="txt_field">
      <input
       type="text"
       required
       onChange={(e)=>setUsername(e.target.value)}
      />
      <label>Username</label>
    </div>

    <div className="txt_field">
      <input
       type="password"
       required
       onChange={(e)=>setPassword(e.target.value)}
      />
      <label>Password</label>
    </div>

    <input
      type="submit"
      value="Login"
    />

   </form>

  </div>
 );
}