import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import { ModernCard, MetaBox } from "./NewsArticle.styles";

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
    <ModernCard>
      <CardActionArea
        component="a"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        sx={{ textDecoration: "none", color: "inherit" }}
      >
        {image && (
          <CardMedia
            component="img"
            height="220"
            image={image}
            alt={title}
            sx={{ objectFit: "cover" }}
          />
        )}
        <CardContent>
          <Typography gutterBottom variant="h6" fontWeight={700} component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
            {description}
          </Typography>
          <MetaBox>
            <Avatar sx={{ width: 24, height: 24, fontSize: 14 }}>
              {source?.[0] || "?"}
            </Avatar>
            <Typography variant="caption" color="text.secondary">
              {source}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {author}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {new Date(publishedAt).toLocaleDateString()}
            </Typography>
          </MetaBox>
        </CardContent>
      </CardActionArea>
    </ModernCard>
  );
};
