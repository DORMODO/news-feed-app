import { styled } from "@mui/material/styles";
import { AppBar, Toolbar, Box, Paper, InputBase } from "@mui/material";

export const HeaderBar = styled(AppBar)(({ theme }) => ({
  background: "#fff",
  color: theme.palette.text.primary,
  boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
  borderBottom: `1px solid ${theme.palette.divider}`,
  zIndex: theme.zIndex.drawer + 1,
}));

export const FlexToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  minHeight: 72,
  padding: "0 24px",
  gap: 24,
});

export const LogoBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: 12,
});

export const ControlsBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: 20,
});

export const SearchBox = styled(Paper)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  borderRadius: 24,
  backgroundColor: theme.palette.grey[100],
  boxShadow: "none",
  padding: "2px 12px",
  width: 260,
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  marginLeft: theme.spacing(1),
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 0),
    width: "100%",
    fontSize: 16,
  },
}));