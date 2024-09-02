import React from "react";
import Counter from "./Counter";
import Star from "./Star";
const Avengers = ({ imageUrl, header, description }) => {
  return (
    <div className="allimage">
      <img className="image" src={imageUrl} alt={header} />
      <div className="desciption">
        <h2>{header}</h2>
        <p>{description}</p>
        <div>
          <Star />
        </div>
        <Counter />
      </div>
    </div>
  );
};

export default Avengers;
