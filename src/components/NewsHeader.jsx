import {
  Typography,
  MenuItem,
  Select,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NewspaperIcon from "@mui/icons-material/Newspaper";

import {
  HeaderBar,
  FlexToolbar,
  LogoBox,
  ControlsBox,
  SearchBox,
  StyledInputBase,
} from "../styles/NewsHeader.styles";

export const NewsHeader = ({ onSearchChange, category, onCategoryChange }) => (
  <HeaderBar position="sticky" elevation={0}>
    <FlexToolbar>
      <LogoBox>
        <NewspaperIcon color="primary" sx={{ fontSize: 36 }} />
        <Typography
          variant="h5"
          fontWeight={800}
          letterSpacing={1.5}
          color="primary"
        >
          NewsFeed
        </Typography>
      </LogoBox>
      <ControlsBox>
        <Select
          value={category}
          onChange={onCategoryChange}
          size="small"
          sx={{
            minWidth: 140,
            background: "#f5f5f5",
            borderRadius: 2,
            fontWeight: 500,
            fontSize: 15,
          }}
        >
          <MenuItem value="general">General</MenuItem>
          <MenuItem value="business">Business</MenuItem>
          <MenuItem value="entertainment">Entertainment</MenuItem>
          <MenuItem value="health">Health</MenuItem>
          <MenuItem value="science">Science</MenuItem>
          <MenuItem value="sports">Sports</MenuItem>
          <MenuItem value="technology">Technology</MenuItem>
        </Select>
        <SearchBox>
          <SearchIcon color="action" sx={{ fontSize: 22 }} />
          <StyledInputBase
            placeholder="Search news…"
            inputProps={{ "aria-label": "search" }}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </SearchBox>
      </ControlsBox>
    </FlexToolbar>
  </HeaderBar>
);
