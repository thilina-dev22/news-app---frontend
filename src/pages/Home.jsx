import React, { useEffect, useState } from "react";
import NewsCard from "../components/NewsCard";
import Spinner from "../components/Spinner";
import ErrorPage from "./ErrorPage";

const Home = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getAllNews = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:5000/api/news");
      if (!response.ok) {
        throw new Error("Failed to fetch data..!");
      }
      const data = await response.json();
      setNews(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllNews();
  }, []);

  return (
  <div>
    {loading ? (<Spinner /> ) : error? (<ErrorPage error={error}/>) : <NewsCard news={news} />}
  </div>
  );
};

export default Home;
