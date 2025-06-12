import { NewsArticle } from "./NewsArticle";

export const NewsFeed = ({ articles }) => {

  return (
    <>
      {articles.map((article) => (
        <NewsArticle key={JSON.stringify(article)} {...article} />
      ))}
    </>
  );
};
