import { memo } from "react";
import Link from "@mui/material/Link";
import ArrowRight from "@mui/icons-material/ArrowForwardIos";
import ArrowLeft from "@mui/icons-material/ArrowBackIosNew";

import { IShortcut } from "@/interfaces/IShortcut";

import { Container, Text } from "./styles";

const Shortcut: React.FC<IShortcut> = ({
  children,
  nextLink,
  isInverted,
  ...props
}) => (
  <Container
    {...props}
    component={nextLink || Link}
    isInverted={isInverted}
  >
    <Text isInverted={isInverted}>{children}</Text>
    {!isInverted ? <ArrowRight /> : <ArrowLeft />}
  </Container>
);

const ShortcutButton = memo(Shortcut);
export { ShortcutButton };
