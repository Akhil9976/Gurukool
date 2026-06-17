import Header from "../components/Header";
import Footer from "../components/Footer";

import t1 from "../assets/images/teacher-1.png";
import t2 from "../assets/images/teacher-2.png";
import t3 from "../assets/images/teacher-3.png";
import t4 from "../assets/images/teacher-4.png";

const teachers = [t1,t2,t3,t4];

export default function Teacher() {
  return (
    <div className="container">
      <Header />

      <h1 className="heading">
        Experienced Teachers
      </h1>

      <section className="teacher">

        {teachers.map((teacher,index)=>(
          <div className="box" key={index}>
            <img src={teacher} alt="" />
            <h3>John Deo</h3>
            <span>Teacher</span>
          </div>
        ))}

      </section>

      <Footer />
    </div>
  );
}