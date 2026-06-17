import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Price() {
  return (
    <div className="container">

      <Header />

      <h1 className="heading">
        Select Plan
      </h1>

      <section className="price">

        <div className="box">
          <h3>Basic</h3>
          <div className="amount">
            ₹1600/mo
          </div>
        </div>

        <div className="box">
          <h3>Standard</h3>
          <div className="amount">
            ₹4000/mo
          </div>
        </div>

        <div className="box">
          <h3>Premium</h3>
          <div className="amount">
            ₹7200/mo
          </div>
        </div>

      </section>

      <Footer />
    </div>
  );
}