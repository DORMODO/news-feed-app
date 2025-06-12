import { AppBar, Toolbar, Typography } from "@mui/material";

export const NewsHeader = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">NewsFeed App</Typography>
      </Toolbar>
    </AppBar>
  );
};
