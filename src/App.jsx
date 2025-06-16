import { useEffect, useState } from "react";
import { Button, Container, styled, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import debounce from "lodash/debounce";

import { NewsFeed, NewsHeader } from "./components";
import { useLoadData } from "./hooks/useLoadData";

const PAGE_SIZE = 4

const Footer = styled("div")(({ theme }) => ({
  margin: theme.spacing(2, 0),
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));

function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");

  const loadArticles = async (newQuery, newPage) => {
    setLoading(true);
    const data = await useLoadData(newQuery, newPage);
    setArticles(data);
    setLoading(false);
  };

  const handleSearchChange = debounce((newQuery) => {
    setQuery(newQuery);
    setPage(1);
    loadArticles(newQuery, 1);
  }, 500);

  useEffect(() => {
    loadArticles();
  }, []);

  const handlePageChange = (direction) => {
    const newPageNumber =
      direction === "next" ? page + 1 : Math.max(1, page - 1);
    setPage(newPageNumber);
    loadArticles(query, newPageNumber);
  };

  return (
    <Container>
      <NewsHeader onSearchChange={handleSearchChange} />
      <NewsFeed articles={articles} loading={loading} />
      {!loading && (
        <Footer>
          <Button
            disabled={page === 1}
            onClick={() => handlePageChange("prev")}
            variant="outlined"
            startIcon={<NavigateBeforeIcon />}
          >
            Previous
          </Button>
          <Typography>Page {page}</Typography>
          <Button
            disabled={articles.length < PAGE_SIZE}
            onClick={() => handlePageChange("next")}
            variant="outlined"
            endIcon={<NavigateNextIcon />}
          >
            Next
          </Button>
        </Footer>
      )}
    </Container>
  );
}

export default App;

