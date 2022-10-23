import { ThemeProvider } from "@mui/material";

import { IButton } from "@/interfaces/IButton";

import { ButtonUi } from "./styles";
import { theme } from "../../styles/theme";

const Button: React.FC<IButton> = (props) => (
  <ButtonUi {...props}>{props?.children}</ButtonUi>
);

export { Button };
