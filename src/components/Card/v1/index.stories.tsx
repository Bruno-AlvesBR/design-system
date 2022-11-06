import { Meta, StoryObj } from "@storybook/react";
import { Link, ThemeProvider } from "@mui/material";

import { ICard } from "@/interfaces/card/v1";
import { Card } from ".";
import { Button } from "../../Button";

import { theme } from "../../../styles/theme";

export default {
  title: "Components/Card",
  component: (args: ICard) => (
    <ThemeProvider theme={theme}>
      <Card {...args} />
    </ThemeProvider>
  ),
} as Meta<ICard>;

export const v1: StoryObj<ICard> = {
  args: {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    buttonContent: <Button>ver</Button>,
  },
};
