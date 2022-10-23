import { IText } from "@/interfaces/IText";
import { styled, Theme } from "@mui/material";
import Typography from "@mui/material/Typography";

interface IContent extends IText {
  theme?: Theme;
}

export const TextUI = styled(Typography)<IContent>(
  ({
    sizeUI = "md",
    weightUI = "md",
    colorUI = "gray100",
    theme,
  }) => ({
    fontSize: theme?.typography?.fontSize[sizeUI],
    color: theme?.palette[colorUI],
    fontWeight: theme?.typography?.fontWeight[weightUI],
  })
);
