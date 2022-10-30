import { styled, Theme } from "@mui/material";
import Typography from "@mui/material/Typography";

import { IText } from "@/interfaces/IText";

interface IContent extends IText {
  theme?: Theme;
}

export const TextUI = styled(Typography)<IContent>(
  ({
    sizeUI = "md",
    weightUI = "md",
    colorUI = "gray100",
    isSelected = false,
    theme,
  }) => ({
    fontSize: theme?.typography?.fontSize[sizeUI],
    color: theme?.palette[colorUI],
    fontWeight: theme?.typography?.fontWeight[weightUI],

    ...(isSelected && {
      color: theme?.palette?.cyan700,
    }),
  })
);
