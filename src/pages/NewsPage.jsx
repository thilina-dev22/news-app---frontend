import React, { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router";
import NewsCard from "../components/NewsCard";
import Spinner from "../components/Spinner";
import ErrorPage from "./ErrorPage";

const NewsPage = () => {
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [searchParams] = useSearchParams();
  const id = searchParams.get("id") || "";

  const fetchNews = async (id) => {
    try {
        setLoading(true);
        const response = await fetch(`http://localhost:5000/api/news/${id}`);
        if(!response.ok){
            throw new Error('failed to fetch data!');
        }
        const data = await response.json();
        setNews([data]);
    } catch (error) {
        setError(error.message)
    }finally{
        setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews(id);
  }, [id]);

//   const location = useLocation();
//   const newsItem = location.state?.item || null;

  return (
    <div> 
        {loading ? (<Spinner/>) :  error ? (<ErrorPage error={error}/>) : <NewsCard news={news}/> }
    </div>
  );
};

export default NewsPage;
