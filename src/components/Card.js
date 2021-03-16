import React from "react";

const Card = ({ name, avatar_url, company }) => {
  return (
    <div
      className="card text-white bg-dark mb-3 mt-3"
      style={{ width: "200px" }}
    >
      <div className="card-header">User Data</div>
      <img src={avatar_url} className="card-img-top" alt="..........." />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{company}</p>
      </div>
    </div>
  );
};

export default Card;
