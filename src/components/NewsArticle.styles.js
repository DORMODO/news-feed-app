import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";

export const ModernCard = styled(Card)(({ theme }) => ({
  borderRadius: 18,
  boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
  marginBottom: theme.spacing(3),
  overflow: "hidden",
  transition: "box-shadow 0.2s",
  "&:hover": {
    boxShadow: "0 8px 32px rgba(0,0,0,0.13)",
  },
}));

export const MetaBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),
  marginTop: theme.spacing(1),
  flexWrap: "wrap",
}));