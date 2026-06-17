import Header from "../components/Header";
import Footer from "../components/Footer";

import s1 from "../assets/images/student-1.png";
import s2 from "../assets/images/student-2.png";
import s3 from "../assets/images/student-3.png";
import s4 from "../assets/images/student-4.png";
import s5 from "../assets/images/student-5.png";
import s6 from "../assets/images/student-6.png";

const students=[s1,s2,s3,s4,s5,s6];

export default function Review() {

 return (
  <div className="container">

   <Header />

   <h1 className="heading">
    Student Reviews
   </h1>

   <section className="review">

    {students.map((student,index)=>(
     <div className="box" key={index}>
      <img src={student} alt="" />
      <h3>Student</h3>
      <p>Excellent Course</p>
     </div>
    ))}

   </section>

   <Footer />

  </div>
 );
}