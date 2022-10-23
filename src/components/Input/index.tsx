import MailIcon from "@mui/icons-material/MailOutlineOutlined";
import TextIcon from "@mui/icons-material/Create";

import { IInput } from "@/interfaces/IInput";
import { Text } from "../Text";

import {
  Container,
  ContentError,
  ContentInput,
  InputUI,
} from "./styles";

const Input: React.FC<IInput> = ({
  typeUI,
  hasError = false,
  inputUI,
}) => {
  const Icon = () =>
    ({
      email: <MailIcon />,
      name: <TextIcon />,
      textArea: null,
    }[typeUI]);

  const ErrorMessage = () =>
    ({
      email: (
        <Text sizeUI="2xs" weightUI="lg">
          Email inválido!
        </Text>
      ),
      name: (
        <Text sizeUI="2xs" weightUI="lg">
          Nome inválido!
        </Text>
      ),
      textArea: (
        <Text sizeUI="2xs" weightUI="lg">
          Mensagem inválida!
        </Text>
      ),
    }[typeUI]);

  return (
    <Container hasError={hasError}>
      {hasError && (
        <ContentError>
          <ErrorMessage />
        </ContentError>
      )}

      <ContentInput hasError={hasError}>
        <Icon />
        <InputUI hasError={hasError} {...inputUI} />
      </ContentInput>
    </Container>
  );
};

export { Input };
