import { IButton } from "@/interfaces/IButton";

import { ButtonUi } from "./styles";

const Button: React.FC<IButton> = (props) => (
  <ButtonUi {...props}>{props?.children}</ButtonUi>
);

export { Button };
