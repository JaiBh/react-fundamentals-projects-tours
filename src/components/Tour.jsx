const Tour = ({ tour, func }) => {
  const { name, info, image, price } = tour;
  return (
    <li>
      <img src={image} alt={name} className="img" />
      <span>{price}</span>
      <h4>{name}</h4>
      <p>{info}</p>
      <button className="btn" onClick={func}>
        not interested
      </button>
    </li>
  );
};

export default Tour;
