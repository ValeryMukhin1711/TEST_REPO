import "./Card.css";

const Card = (props) => {
  return (
    <div className="card">
      <img className="card__img" src={props.img} alt="fertilizer" />
      <div className="card__body">
        <div className="card__title">{props.title}</div>
      </div>
    </div>
  );
};

export default Card;
