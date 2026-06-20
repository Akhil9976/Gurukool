import courses from "../data/courses";

export default function Course() {
  return (
    <>
      <h1 className="heading">Popular Courses</h1>

      <section className="course">
        {courses.map((course) => (
          <div className="box" key={course.id}>
            <img src={course.image} alt={course.title} />
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <button className="btn">Learn More</button>
          </div>
        ))}
      </section>
    </>
  );
}