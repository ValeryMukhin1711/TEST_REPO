import React from "react";
import "./Items.css";

const Items = (props) => {
  const { img, title, newPrice, oldPrice } = props;
  const discount = Math.round(((oldPrice - newPrice) / oldPrice) * 100);
  return (
    <div className="item">
      <div className="discount">-{discount}%</div>
      <img className="item__img" src={img} alt="Bridge" />
      <div className="item__body">
        <div className="item__title">{title}</div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div className="new__price">${newPrice}</div>
          <div className="old__price">${oldPrice}</div>
        </div>
      </div>
    </div>
  );
};

export default Items;
