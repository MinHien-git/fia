import React from "react";

export default function PorfolioCard() {
  return (
    <div className="flex card porfolio-card">
      <div className="porfolio-image"></div>
      <div className="porfolio-content flex">
        <h3>E-commerce</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, velit
          quibusdam dolore aperiam tenetur modi!
        </p>

        <div className="price-container">
          <button>Project Link</button>
        </div>
      </div>
    </div>
  );
}
