import Header from "../components/Header";
import Footer from "../components/Footer";

import c1 from "../assets/images/course-1.svg";
import c2 from "../assets/images/course-2.svg";
import c3 from "../assets/images/course-3.svg";
import c4 from "../assets/images/course-4.svg";
import c5 from "../assets/images/course-5.svg";
import c6 from "../assets/images/course-6.svg";

const courses = [c1,c2,c3,c4,c5,c6];

function Course() {
  return (
    <div className="container">

      <Header />

      <h1 className="heading">
        Popular Courses
      </h1>

      <section className="course">

        {courses.map((course,index)=>(

          <div className="box" key={index}>
            <img src={course} alt="" />

            <h3>Frontend Development</h3>

            <p>
              Complete Professional Course
            </p>

            <button className="btn">
              Learn More
            </button>
          </div>

        ))}

      </section>

      <Footer />
    </div>
  );
}

export default Course;