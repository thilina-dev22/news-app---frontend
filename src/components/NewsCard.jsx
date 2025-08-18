import React from "react";
import { useNavigate } from "react-router";

const NewsCard = (prop) => {
  const navigate = useNavigate();

  const handleReadMore = (item) => {
    console.log("clicked");
    navigate(`/news?id=${item._id}`, { state: { item } });
  };

  return (
    <div>
      {prop.news.map((item) => {
        return (
          <div key={item._id}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <button
              onClick={() => {
                handleReadMore(item);
              }}
            >
              Read more...
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default NewsCard;
