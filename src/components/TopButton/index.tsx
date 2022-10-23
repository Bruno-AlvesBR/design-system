import ArrowTop from "@mui/icons-material/KeyboardArrowUp";

import { ITopButton } from "@/interfaces/ITopButton";
import { Button } from "./styles";

const TopButton: React.FC<ITopButton> = (props) => (
  <Button {...props}>
    <ArrowTop />
  </Button>
);

export { TopButton };
