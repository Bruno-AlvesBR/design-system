import { LinkProps } from "@mui/material/Link";
import { ElementType } from "react";

export interface IContactLink extends LinkProps {
  typeUI: "linkedin" | "email" | "phone";
  nextLink?: ElementType<Element> | undefined;
}
