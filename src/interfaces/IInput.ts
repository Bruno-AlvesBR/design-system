import { InputHTMLAttributes } from "react";

export interface IInput {
  typeUI: "email" | "name" | "textArea";
  hasError?: boolean;
  inputUI: InputHTMLAttributes<HTMLInputElement>;
}
