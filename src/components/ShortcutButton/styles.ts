import { styled, Theme } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { IShortcut } from "@/interfaces/IShortcut";

interface IContent extends IShortcut {
  theme?: Theme;
}

export const Container = styled(Box)<IContent>(
  ({ theme, isInverted = false }) => ({
    cursor: "pointer",
    maxWidth: "13.625rem",
    width: theme?.width?.full,
    display: "flex",
    backgroundColor: theme?.palette?.black800,
    padding: "1rem",
    borderRadius: 3,
    textDecoration: "none",
    color: theme?.palette?.white1000,
    alignItems: "center",
    justifyContent: "space-between",

    "&:hover, &:focus": {
      backgroundColor: theme?.palette?.cyan400,
      color: theme?.palette?.black1000,
      outline: "none",

      "& > p": {
        color: theme?.palette?.black1000,
        borderBottom: `0.063rem solid ${theme?.palette?.black1000}`,
      },
    },

    "& > svg, svg *": {
      fontSize: "1.25rem",
    },
  })
);

export const Text = styled(Typography)<IContent>(
  ({ theme, isInverted = false }) => ({
    textDecoration: "none",
    fontSize: theme?.typography?.fontSize?.md,
    fontWeight: theme?.typography?.fontWeight?.md,
    lineHeight: "1.063rem",
    textTransform: "uppercase",
    borderBottom: `0.063rem solid ${theme?.palette?.gray100}`,
    order: isInverted ? 1 : -1,
  })
);
