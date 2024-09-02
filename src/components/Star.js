import React, { useState } from "react";
import ".././App.css";
const Star = () => {
  const [clickedStar, setClickedStar] = useState();
  const stars = [1, 2, 3, 4, 5];
  return (
    <div className="star">
      {stars.map((star) => (
        <button
          onClick={() => {
            setClickedStar(star);
          }}
        >
          {star <= clickedStar ? "⭐" : "★"}
        </button>
      ))}
    </div>
  );
};

export default Star;
