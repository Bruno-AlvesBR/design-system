import { memo } from "react";

import { ICard } from "@/interfaces/card/v1";

import {
  Container,
  ContentImage,
  ContentInfos,
  Text,
} from "./styles";

const CardV1: React.FC<ICard> = ({
  text,
  buttonContent,
  imageContent,
  ...props
}) => (
  <Container {...props}>
    <ContentImage>{imageContent}</ContentImage>

    <ContentInfos>
      <Text>{text}</Text>
      {buttonContent}
    </ContentInfos>
  </Container>
);

const Card = memo(CardV1);
export { Card };
