import reviews from "../data/reviews";

export default function Review() {
  return (
    <>
      <h1 className="heading">Student Reviews</h1>

      <section className="review">
        {reviews.map((review) => (
          <div className="box" key={review.id}>
            <img src={review.image} alt={review.name} />
            <h3>{review.name}</h3>
            <p>{review.text}</p>
          </div>
        ))}
      </section>
    </>
  );
}