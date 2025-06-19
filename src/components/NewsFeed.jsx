import { Typography } from "@mui/material";
import { NewsArticle } from "./NewsArticle";
import { LoadingArticle } from "./LoadingArticle";

export const NewsFeed = ({ articles, loading }) => {
  if (!articles || articles.length === 0) {
    return (
      <Typography
        variant="h6"
        color="textSecondary"
        align="center"
        marginTop={4}
      >
        No articles available.
      </Typography>
    );
  }

  return (
    <>
      {loading &&
        [...Array(5)].map((_, index) => <LoadingArticle key={index} />)}
      {!loading &&
        articles.map((article) => (
          <NewsArticle key={JSON.stringify(article)} {...article} />
        ))}
    </>
  );
};
