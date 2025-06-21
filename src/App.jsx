import { useEffect, useState } from "react";
import { Alert, Button, Container, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import debounce from "lodash/debounce";

import { NewsFeed, NewsHeader } from "./components";
import { useLoadData } from "./hooks/useLoadData";
import { Footer} from "./styles/App.styles";

function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("general");

  const loadArticles = async (newQuery, newPage, category) => {
    setLoading(true);
    setError("");
    useLoadData(newQuery, newPage, category)
      .then((data) => {
        setArticles(data);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
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

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
    setPage(1);
    loadArticles("", 1, event.target.value);
  };

  return (
    <Container>
      <NewsHeader
        onSearchChange={handleSearchChange}
        category={category}
        onCategoryChange={handleCategoryChange}
      />

      {error.length === 0 ? (
        <NewsFeed articles={articles} loading={loading} />
      ) : (
        <Alert severity="error">{error}</Alert>
      )}
      {!loading && (
        <Footer>
          <Button
            disabled={loading || page === 1}
            onClick={() => handlePageChange("prev")}
            variant="outlined"
            startIcon={<NavigateBeforeIcon />}
          >
            Previous
          </Button>
          <Typography>Page {page}</Typography>
          <Button
            disabled={articles.length <= 0}
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
