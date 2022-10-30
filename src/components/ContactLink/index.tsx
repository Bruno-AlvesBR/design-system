import { useMemo } from "react";
import MailIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/LocalPhoneRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "@mui/material/Link";

import { IContactLink } from "@/interfaces/IContactLink";

import { Container, Text } from "./styles";

const ContactLink: React.FC<IContactLink> = ({
  ...props
}) => {
  const { typeUI, nextLink } = props;

  const icon = useMemo(
    (): JSX.Element =>
      ({
        linkedin: <LinkedInIcon />,
        email: <MailIcon />,
        phone: <PhoneIcon />,
      }[typeUI]),
    []
  );

  const message = useMemo(
    (): string =>
      ({
        linkedin: "bruno-alvesbr",
        email: "brunoph.faces12@gmail.com",
        phone: "(43) 9 98866 - 8668",
      }[typeUI]),
    []
  );

  const link = useMemo(
    () =>
      ({
        linkedin:
          "https://www.linkedin.com/in/bruno-alvesbr/",
        email: "mailto:brunoph.faces12@gmail.com",
        phone: "tel:43-9-98866-8668",
      }[typeUI]),
    []
  );

  return (
    <Container
      component={nextLink || Link}
      href={link}
      {...props}
    >
      {icon}
      <Text textTransform="lowercase">{message}</Text>
    </Container>
  );
};

export { ContactLink };
