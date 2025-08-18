import React from "react";

const newsCard = (prop) => {
  return (
    <div>
      {prop.news.map((item) => {
        return (
          <div key={item._id}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default newsCard;
