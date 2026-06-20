import contactImg from "../assets/images/contact-img.svg";

export default function Contact() {
  return (
    <>
      <h1 className="heading">Contact Us</h1>

      <section className="contact">
        <div className="image">
          <img src={contactImg} alt="Contact us illustration" />
        </div>

        <form>
          <input
            type="text"
            placeholder="Name"
            className="box"
          />

          <input
            type="email"
            placeholder="Email"
            className="box"
          />

          <textarea
            className="box"
            rows="6"
            placeholder="Message"
          />

          <button className="btn">Send</button>
        </form>
      </section>
    </>
  );
}