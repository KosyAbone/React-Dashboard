import React, { useEffect, useState } from "react";
import axios from "axios";
import './news-feed.css';

const NewsFeed = () => {
  // Hooks to track/manage news data, loading state, and errors
  const [newsData, setNewsData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [topic, setTopic] = useState('Canada Latest');

  //Display the news-feed on first launch
  useEffect( () => {
    const fetchNews = async () => {
      setLoading(true);
        
      const url = `https://newsapi.org/v2/everything?q=${topic}&apiKey=6c3e339d0b2b4276a1c1b0ed696e52ac`;
      console.log(url)
        
      try {
          const response = await axios.request(url);
          setNewsData(response.data);
          setLoading(false);
        } catch (error) {
          setError(error);
          setLoading(false);
        }
  };

  fetchNews()
  },[])
    
  /* fetch the news from the API */
  const fetchNews = async () => {
      setLoading(true);
        
      const url = `https://newsapi.org/v2/everything?q=${topic}&apiKey=6c3e339d0b2b4276a1c1b0ed696e52ac`;
      console.log(url)
        
      try {
          const response = await axios.request(url);
          setNewsData(response.data);
          setLoading(false);
        } catch (error) {
          /* if user searched with empty text show loading and no error else show error*/
          if(topic === ''){
              error.message = 'Please search for a news topic';
              setError(error);
            }
            else{
              setError(error);
            }
          setLoading(false);
        }
  };

  /* call the fetchNews function when the user provides an input */
  const searchNews = () => {
      fetchNews();
    }

  /* displaying the result of the news API call */
  return (
  <div className="newsfeed-container">
    <div>
      <h1>Latest News</h1>
      <input className="search-input" type="text" value={topic} onChange={(e) => setTopic(e.target.value)} placeholder="Search News" />
      <button className="search-button" type="Submit" onClick={searchNews}>Search</button>
    </div>
    {loading ? (
      <p>Loading...</p>
      ) : error ? (
      <p className="news-error">Error: {error.message}</p>
      ) : (
        <div>
            {newsData.articles.map((article, index) => (
              <div className="news-card" key={index}>
                <h3>{article.title}</h3>
                <p>{article.description}</p>
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                  Read More
                </a>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

export default NewsFeed;