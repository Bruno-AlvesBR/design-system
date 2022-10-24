import { IAnchor } from "@/interfaces/IAnchor";
import { IColors } from "@/interfaces/ui/IColors";
import { styled, Theme } from "@mui/material";
import Box from "@mui/material/Box";

interface IContent extends IAnchor {
  theme?: Theme;
}

export const AnchorUI = styled(Box)<IContent>(
  ({
    colorUI = "gray100",
    sizeUI = "md",
    weightUI = "sm",
    isSelected = false,
    theme,
  }) => ({
    cursor: "pointer",
    color: theme?.palette[colorUI],
    textDecorationColor: theme?.palette[colorUI],
    fontSize: theme?.typography?.fontSize[sizeUI],
    fontWeight: theme?.typography?.fontWeight[weightUI],
    textTransform: "uppercase",
    fontFamily: theme?.typography?.fontFamily,

    ...(isSelected && {
      color: theme?.palette?.cyan700,
      textDecorationColor: theme?.palette?.cyan700,
    }),

    "&:hover": {
      color: theme?.palette?.cyan400,
      textDecorationColor: theme?.palette?.cyan400,
    },
  })
);
