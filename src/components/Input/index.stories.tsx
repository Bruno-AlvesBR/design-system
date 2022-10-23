import { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider } from "@mui/material";

import { IInput } from "@/interfaces/IInput";
import { Input } from "./index";

import { theme } from "../../styles/theme";

export default {
  title: "Components/Input",
  component: (args: IInput) => (
    <ThemeProvider theme={theme}>
      <Input {...args} />
    </ThemeProvider>
  ),
} as Meta<IInput>;

export const Email: StoryObj<IInput> = {
  args: {
    inputUI: {
      placeholder: "Insira seu email...",
      type: "email",
    },
    typeUI: "email",
  },
};

export const EmailError: StoryObj<IInput> = {
  args: {
    inputUI: {
      placeholder: "Insira seu nome...",
      type: "name",
    },
    typeUI: "name",
    hasError: true,
  },
};

export const Name: StoryObj<IInput> = {
  args: {
    inputUI: {
      placeholder: "Insira seu nome...",
      type: "name",
    },
    typeUI: "name",
  },
};

export const NameError: StoryObj<IInput> = {
  args: {
    inputUI: {
      placeholder: "Insira seu nome...",
      type: "name",
    },
    typeUI: "name",
    hasError: true,
  },
};

export const TextArea: StoryObj<IInput> = {
  args: {
    inputUI: {
      placeholder: "Insira sua mensagem aqui...",
      type: "text",
    },
    typeUI: "textArea",
  },
};

export const TextAreaError: StoryObj<IInput> = {
  args: {
    inputUI: {
      placeholder: "Insira sua mensagem aqui...",
      type: "text",
    },
    typeUI: "textArea",
    hasError: true,
  },
};