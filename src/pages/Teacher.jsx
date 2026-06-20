import teachers from "../data/teachers";

export default function Teacher() {
  return (
    <>
      <h1 className="heading">Experienced Teachers</h1>

      <section className="teacher">
        {teachers.map((teacher) => (
          <div className="box" key={teacher.id}>
            <img src={teacher.image} alt={teacher.name} />
            <h3>{teacher.name}</h3>
            <span>{teacher.subject}</span>
          </div>
        ))}
      </section>
    </>
  );
}