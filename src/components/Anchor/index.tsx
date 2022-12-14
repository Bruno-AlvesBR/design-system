import Link from "@mui/material/Link";

import { IAnchor } from "@/interfaces/IAnchor";
import { AnchorUI } from "./styles";

const Anchor: React.FC<IAnchor> = ({
  children,
  nextLink,
  ...props
}) => (
  <AnchorUI component={nextLink || Link} {...props}>
    {children}
  </AnchorUI>
);

export { Anchor };
