import { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider } from "@mui/material";

import { IAnchor } from "@/interfaces/IAnchor";
import { Anchor } from ".";
import { theme } from "../../styles/theme";

export default {
  title: "Components/Anchor",
  component: (args: IAnchor) => (
    <ThemeProvider theme={theme}>
      <Anchor {...args} />
    </ThemeProvider>
  ),
} as Meta<IAnchor>;

export const AnchorDefault: StoryObj<IAnchor> = {
  args: {
    children: "ver mais",
    sizeUI: "md",
    weightUI: "sm",
  },
};

export const AnchorSelected: StoryObj<IAnchor> = {
  args: {
    children: "ver mais",
    sizeUI: "md",
    weightUI: "sm",
    isSelected: true,
  },
};
