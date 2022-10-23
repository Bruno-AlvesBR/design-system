import { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider } from "@mui/material";

import { ITopButton } from "@/interfaces/ITopButton";
import { TopButton } from "./index";

import { theme } from "../../styles/theme";

export default {
  title: "Components/Top Button",
  component: (args: ITopButton) => (
    <ThemeProvider theme={theme}>
      <TopButton {...args} />
    </ThemeProvider>
  ),
} as Meta<ITopButton>;

export const v1: StoryObj<ITopButton> = {};
