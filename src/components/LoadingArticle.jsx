import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { StyledCard } from "./StyledCard";
import { Skeleton } from "@mui/material";

export const LoadingArticle = () => {
  return (
    <StyledCard>
      <CardActionArea>
        <Skeleton variant="rectangular" height={200} />
        <CardContent>
          <Skeleton variant="text" sx={{ fontSize: "5rem" }} />
          <Skeleton variant="text" sx={{ fontSize: "1.5rem" }} />
        </CardContent>
      </CardActionArea>
      <Box p={2}>
        <Skeleton variant="text" width={200} sx={{ fontSize: "1.5rem" }} />
        <Skeleton variant="text" width={200} sx={{ fontSize: "1.5rem" }} />
      </Box>
    </StyledCard>
  );
};
