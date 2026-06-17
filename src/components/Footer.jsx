function Footer() {
  return (
    <section className="footer">
      <div className="box-container">

        <div className="box">
          <h3>About Us</h3>
          <p>
            SmartStudy E-Learning Platform
          </p>
        </div>

        <div className="box">
          <h3>Quick Links</h3>

          <a href="/">Home</a>
          <a href="/course">Course</a>
          <a href="/teacher">Teacher</a>
          <a href="/price">Price</a>
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

export default Footer;