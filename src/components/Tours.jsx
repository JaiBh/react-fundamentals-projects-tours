import Tour from "./Tour";

const Tours = ({ tours, func }) => {
  return (
    <ul>
      {tours.map((tour) => (
        <Tour
          tour={tour}
          key={tour.id}
          func={() => {
            func(tour);
          }}
        ></Tour>
      ))}
    </ul>
  );
};

export default Tours;
