import { ElementType, ReactNode } from "react";
import { LinkProps } from "@mui/material/Link";
import { IColors } from "./ui/IColors";

export interface IAnchor extends LinkProps {
  sizeUI?: "xs" | "2xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  weightUI?: "sm" | "md" | "lg";
  nextLink?: ElementType<Element> | undefined;
  colorUI?: IColors;
}
