import { LinkProps } from "@mui/material/Link";
import { ElementType } from "react";

export interface IShortcut extends LinkProps {
  nextLink?: ElementType<Element> | undefined;
  isInverted?: boolean;
}
