import { Container } from "@mui/material";
import { NewsFeed, NewsHeader } from "./components";
import { useEffect, useState } from "react";

function App() {
  const [articles, setArticles] = useState([]);

  const loadData = async (country = "us") => {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${
        import.meta.env.VITE_NEWS_API_KEY
      }`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    const articles = data.articles.map(
      ({ title, description, author, urlToImage, publishedAt }) => ({
        title: title || "No Title",
        description: description || "No Description",
        author: author || "Unknown",
        publishedAt,
        image: urlToImage || "https://via.placeholder.com/150",
      })
    );

    return articles;
  };

  useEffect(() => {
    loadData().then(setArticles);
  }, []);

  return (
    <Container>
      <NewsHeader />
      <NewsFeed articles={articles} />
    </Container>
  );
}

export default App;

