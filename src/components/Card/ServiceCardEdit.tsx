import { ServiceCard_Interface } from "../../interfaces/app_interfaces";
import React from "react";
import ButtonComponentLink from "../Button/ButtonComponent";

export default function ServiceCardsEdit({
  id,
  title,
  price,
  rating = 0,
}: ServiceCard_Interface) {
  return (
    <div className="flex card service-card" key={id}>
      <h4>{title.toUpperCase()}</h4>
      <div className="service-card-star-rate-container">
        <ul className="service-card-start-rate">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <p>{rating}/5.0</p>
      </div>
      <div className="price-container">
        <p>Starting From</p>
        <p className="price">{price}$</p>
      </div>
      <div className="flex edit-section">
        <ButtonComponentLink className="tertiary" button_string="Edit" />
        <ButtonComponentLink className="red-bg" button_string="Delete" />
      </div>
    </div>
  );
}
