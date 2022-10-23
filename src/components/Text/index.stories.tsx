import { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider } from "@mui/material";

import { IText } from "@/interfaces/IText";
import { Text } from "./index";

import { theme } from "../../styles/theme";

export default {
  title: "Components/Text",
  component: (args: IText) => (
    <ThemeProvider theme={theme}>
      <Text {...args} />
    </ThemeProvider>
  ),
} as Meta<IText>;

export const v1: StoryObj<IText> = {
  args: {
    children: "text",
    sizeUI: "md",
    colorUI: "gray100",
    weightUI: "md",
  },
};
