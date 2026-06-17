import { Link } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

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
        <Link to="/login">Login</Link>
      </nav>
    </header>
  );
}

export default Header;