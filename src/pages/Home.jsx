import Header from "../components/Header";
import Footer from "../components/Footer";

import homeImg from "../assets/images/home-img.svg";

function Home() {
  return (
    <div className="container">

      <Header />

      <section className="home">

        <div className="content">
          <h3>
            E-learning is a better way of learning
          </h3>

          <p>
            Learn from experts with modern online courses.
          </p>

          <button className="btn">
            Get Started
          </button>
        </div>

        <div className="image">
          <img src={homeImg} alt="" />
        </div>

      </section>

      <Footer />
    </div>
  );
}

export default Home;