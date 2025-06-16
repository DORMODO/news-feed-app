import { Box, CircularProgress, Typography } from "@mui/material";
import { NewsArticle } from "./NewsArticle";

export const NewsFeed = ({ articles, loading }) => {
    if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="50vh"
      >
        <CircularProgress />
      </Box>
    );
  }

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
      {articles.map((article) => (
        <NewsArticle key={JSON.stringify(article)} {...article} />
      ))}
      
    </>
  );
};
