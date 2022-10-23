import { styled, Theme } from "@mui/material";
import Box from "@mui/material/Box";

interface IContent {
  hasError: boolean;
  theme?: Theme;
}

export const Container = styled(Box)<IContent>(
  ({ hasError, theme }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "left",
    position: "relative",
    padding: "0.719rem 0.625rem",
    backgroundColor: theme?.palette?.black800,
    borderRadius: 5,

    "&:has(input:focus)": {
      border: `0.063rem solid ${
        theme?.palette[!hasError ? "cyan400" : "red800"]
      }`,
    },
  })
);

export const ContentError = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "left",
  marginBottom: "0.5rem",

  "& > p": {
    color: theme?.palette?.red800,
  },
}));

export const ContentInput = styled(Box)<IContent>(
  ({ hasError, theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "left",
    position: "relative",
    width: theme?.width?.full,

    "& > svg": {
      width: "1.125rem",
      height: "1.125rem",
      fill: theme?.palette[
        !hasError ? "gray200" : "red800"
      ],
      marginRight: "0.5rem",
    },
  })
);

export const InputUI = styled("input")<IContent>(
  ({ hasError, theme }) => ({
    width: theme?.width?.full,
    backgroundColor: "transparent",
    border: "none",
    outline: "none",
    fontSize: theme?.typography?.fontSize?.md,
    fontWeight: theme?.typography?.fontWeight?.sm,
    color: theme?.palette[!hasError ? "gray100" : "red800"],

    "&::placeholder": {
      color:
        theme?.palette[!hasError ? "gray200" : "red800"],
    },
  })
);
