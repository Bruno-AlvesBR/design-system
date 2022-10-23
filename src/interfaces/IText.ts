import { TypographyProps } from "@mui/material/Typography";
import { IColors } from "./ui/IColors";

export interface IText extends TypographyProps {
  sizeUI?: "xs" | "2xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  weightUI?: "sm" | "md" | "lg";
  colorUI?: IColors;
}
