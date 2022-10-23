import { styled } from "@mui/material";
import Button from "@mui/material/Button";

export const ButtonUi = styled(Button)(({ theme }) => ({
  textTransform: "uppercase",
  background: theme?.palette?.cyan700,
  color: theme?.palette?.black1000,
  fontSize: theme?.typography?.fontSize?.sm,
  width: theme?.width?.full,
  fontWeight: theme?.typography?.fontWeight?.lg,
  padding: "0.75rem 0",

  "&:hover, &:focus": {
    backgroundColor: theme?.palette?.cyan400,
  },
}));
