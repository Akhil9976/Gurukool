import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="container" style={{ textAlign: "center", padding: "5rem 2rem" }}>
      <h1 className="heading">404</h1>
      <p style={{ fontSize: "2rem", color: "#666", padding: "1rem 0" }}>
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link to="/" className="btn">
        Go Home
      </Link>
    </div>
  );
}
