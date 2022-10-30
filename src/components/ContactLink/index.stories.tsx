import { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider } from "@mui/material";

import { IContactLink } from "@/interfaces/IContactLink";
import { ContactLink } from ".";
import { theme } from "../../styles/theme";

export default {
  title: "Components/Contact Link",
  component: (args: IContactLink) => (
    <ThemeProvider theme={theme}>
      <ContactLink {...args} />
    </ThemeProvider>
  ),
} as Meta<IContactLink>;

export const Email: StoryObj<IContactLink> = {
  args: {
    children: "enviar",
    typeUI: "email",
  },
};

export const Linkedin: StoryObj<IContactLink> = {
  args: {
    children: "enviar",
    typeUI: "linkedin",
  },
};

export const Phone: StoryObj<IContactLink> = {
  args: {
    children: "enviar",
    typeUI: "phone",
  },
};
