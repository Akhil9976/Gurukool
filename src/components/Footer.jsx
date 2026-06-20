import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <section className="footer">
      <div className="box-container">
        <div className="box">
          <h3>About Us</h3>
          <p>Gurukool E-Learning Platform</p>
        </div>

        <div className="box">
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/course">Course</Link>
          <Link to="/teacher">Teacher</Link>
          <Link to="/price">Price</Link>
        </div>

        <div className="box">
          <h3>Contact</h3>
          <p>+91 7376351111</p>
          <p>gurukool@gmail.com</p>
          <p>Ghaziabad, India</p>
        </div>
      </div>

      <div className="credit">
        Created By <span>Akhilesh Kumar</span>
      </div>
    </section>
  );
}