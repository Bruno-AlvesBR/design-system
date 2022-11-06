import { ReactNode } from "react";
import { BoxProps } from "@mui/material/Box";

export interface ICard extends BoxProps {
  text: string;
  buttonContent: ReactNode;
  imageContent: ReactNode;
}
