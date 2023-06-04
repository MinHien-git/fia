import React from "react";

export default function ServiceCards() {
  return (
    <div className="flex card service-card">
      <h3>E-commerce</h3>
      <div className="service-card-star-rate-container">
        <ul className="service-card-start-rate">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <p>0.0/5.0</p>
      </div>
      <div className="price-container">
        <p>Starting From</p>
        <p className="price">3.99$</p>
      </div>
    </div>
  );
}
