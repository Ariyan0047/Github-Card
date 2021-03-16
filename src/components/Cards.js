import React from "react";
import Card from "./Card";

const Cards = ({ profiles }) => {
  return (
    <div className="container">
      <div className="card-items">
        {profiles.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
};

export default Cards;
