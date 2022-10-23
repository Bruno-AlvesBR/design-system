import { IText } from "@/interfaces/IText";
import { TextUI } from "./styles";

const Text: React.FC<IText> = ({ children, ...props }) => (
  <TextUI {...props}>{children}</TextUI>
);

export { Text };
