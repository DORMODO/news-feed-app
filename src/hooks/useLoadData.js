export const useLoadData = async (
  query = "",
  page = 1,
  category = "general",
  country = "us",
  pageSize = 5
) => {
  const apiKey = import.meta.env.VITE_NEWS_API_KEY;
  const url = new URL("https://newsapi.org/v2/top-headlines");

  // Construct URL parameters
  url.searchParams.append("q", query);
  url.searchParams.append("category", category);
  url.searchParams.append("country", country);
  url.searchParams.append("page", page);
  url.searchParams.append("pageSize", pageSize.toString());
  url.searchParams.append("apiKey", apiKey);

  const response = await fetch(url.toString());
  const data = await response.json();

  if (data.status === "error") {
    throw new Error(data.message);
  }

  if (!data.articles || !Array.isArray(data.articles)) {
    throw new Error("Invalid response format from API");
  }

  const formattedArticles = data.articles.map((article) => ({
    title: article.title || "No Title",
    description: article.description || "No Description",
    author: article.author || "Unknown",
    publishedAt: article.publishedAt || new Date().toISOString(),
    url: article.url || "#",
    image: article.urlToImage || "https://placehold.co/400x200?text=No+Image",
    source: article.source.name || "Unknown Source",
  }));

  return formattedArticles;
};
