import { styled } from "@mui/material";
import MuiButton from "@mui/material/Button";

export const Button = styled(MuiButton)(({ theme }) => ({
  border: `0.063rem solid ${theme?.palette?.gray400}`,
  background: "transparent",
  padding: "0.469rem",
  minWidth: 0,
  minHeight: 0,
  borderRadius: 5,
  maxWidth: "2.5rem",
  maxHeight: "2.5rem",

  "& > svg": {
    width: "1.563rem",
    height: "1.563rem",
    fill: theme?.palette?.gray400,
  },

  "&:hover, &:focus": {
    border: `0.063rem solid ${theme?.palette?.cyan400}`,
    background: "transparent",

    "& > svg": {
      fill: theme?.palette?.cyan400,
    },
  },
}));
