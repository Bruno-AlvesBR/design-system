import { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider } from "@mui/material";

import { IButton } from "@/interfaces/IButton";
import { Button } from ".";
import { theme } from "../../styles/theme";

export default {
  title: "Components/Button",
  component: (args: IButton) => (
    <ThemeProvider theme={theme}>
      <Button {...args} />
    </ThemeProvider>
  ),
} as Meta<IButton>;

export const v1: StoryObj<IButton> = {
  args: {
    children: "enviar",
  },
};
