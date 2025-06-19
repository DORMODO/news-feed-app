import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { StyledCard } from "./StyledCard";

export const NewsArticle = ({
  image,
  title,
  description,
  author,
  publishedAt,
  url,
  source,
}) => {
  return (
    <StyledCard>
      <CardActionArea
        component="a"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        {image && (
          <CardMedia
            component="img"
            height="200"
            image={image}
            alt="Sample article"
          />
        )}
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Box p={2}>
        <Typography variant="caption" color="textSecondary" display="block">
          {source}
        </Typography>
        <Typography variant="caption" color="textSecondary" display="block">
          {author}
        </Typography>
        <Typography variant="caption" color="textSecondary">
          {new Date(publishedAt).toLocaleDateString()}
        </Typography>
      </Box>
    </StyledCard>
  );
};
