import React from "react";
import Card from "./Card";

const Cards = () => {
  const testData = [
    {
      id: Math.random(),
      name: "john doe",
      avatar_url: "https://picsum.photos/seed/picsum/200/200",
      company: "facebook",
    },
    {
      id: Math.random(),
      name: "frank hardy",
      avatar_url: "https://picsum.photos/seed/picsum/200/200",
      company: "facebook",
    },
    {
      id: Math.random(),
      name: "joe hardy",
      avatar_url: "https://picsum.photos/seed/picsum/200/200",
      company: "facebook",
    },
  ];

  return (
    <div className="container card-item">
      {testData.map((card) => (
        <Card key={card.id} {...card} />
      ))}
    </div>
  );
};

export default Cards;
