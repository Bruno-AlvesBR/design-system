import { styled, Theme } from "@mui/material";
import Box from "@mui/material/Box";

import { IContactLink } from "@/interfaces/IContactLink";
import { IText } from "@/interfaces/IText";
import { Text as TextUI } from "../Text";

interface IContent extends IContactLink {
  theme?: Theme;
}

export const Container = styled(Box)<IContent>(
  ({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "left",
    width: theme?.width?.full,
    backgroundColor: theme?.palette?.black800,
    cursor: "pointer",
    transition: ".2s all ease",
    padding: "0.5rem",
    borderRadius: 3,
    textDecorationColor: theme?.palette?.gray100,

    "&:hover, &:focus": {
      backgroundColor: theme?.palette?.gray400,
      textDecorationColor: theme?.palette?.white1000,
    },

    "& > svg": {
      width: "1.5rem",
      height: "1.5rem",
      marginRight: "0.5rem",
      fill: theme?.palette?.cyan700,
    },
  })
);

export const Text = styled(TextUI)<IText>(({ theme }) => ({
  fontWeight: theme?.typography?.fontWeight?.sm,
  fontSize: theme?.typography?.fontSize?.md,
  color: theme?.palette?.white1000,
}));
