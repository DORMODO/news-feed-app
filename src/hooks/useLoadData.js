export const useLoadData = async (
  query = "",
  page = 1,
  country = "us",
  pageSize = 5
) => {
  const apiKey = import.meta.env.VITE_NEWS_API_KEY;
  const url = new URL("https://newsapi.org/v2/top-headlines");

  // Construct URL parameters
  url.searchParams.append("q", query);
  url.searchParams.append("country", country);
  url.searchParams.append("page", page);
  url.searchParams.append("pageSize", pageSize);
  url.searchParams.append("apiKey", apiKey);

  const response = await fetch(url.toString());

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const { articles } = await response.json();

  const formattedArticles = articles.map(
    ({ title, description, author, urlToImage, publishedAt }) => ({
      title: title || "No Title",
      description: description || "No Description",
      author: author || "Unknown",
      publishedAt,
      image: urlToImage || "https://placehold.co/400x200?text=No+Image",
    })
  );

  return formattedArticles;
};
