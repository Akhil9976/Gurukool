import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
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
        {user ? (
          <button className="btn" onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </nav>
    </header>
  );
}