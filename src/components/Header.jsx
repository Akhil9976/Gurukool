import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const user = localStorage.getItem("loggedInUser");
  
  const logout = () => {
  localStorage.removeItem("loggedInUser");
  window.location.href = "/";
};

  return (
    <header>
      <Link to="/" className="logo">
        Guru<span>K00l</span>
      </Link>

      <div
        id="menu"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      <nav className={`navbar ${menuOpen ? "active" : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/course">Course</Link>
        <Link to="/teacher">Teacher</Link>
        <Link to="/price">Price</Link>
        <Link to="/review">Review</Link>
        <Link to="/contact">Contact</Link>
        {
          user ? (
           <button
             className="btn"
             onClick={logout}
           >
             Logout
           </button>
        ) : (
          <Link to="/login">
            Login
          </Link>
        )
       }
        {/* <button
          className="btn"
          onClick={logout}
        >
          Logout
        </button> */}
      </nav>
    </header>
  );
}

export default Header;