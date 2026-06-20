import { useAuth } from "../context/AuthContext";
import homeImg from "../assets/images/home-img.svg";

export default function Home() {
  const { user } = useAuth();

  return (
    <section className="home">
      <div className="content">
        <h2>Welcome {user ? (user.name || user.username) : "Guest"}</h2>

        <h3>E-learning is a better way of learning</h3>

        <p>Learn from experts with modern online courses.</p>

        <button className="btn">Get Started</button>
      </div>

      <div className="image">
        <img src={homeImg} alt="Students learning online" />
      </div>
    </section>
  );
}