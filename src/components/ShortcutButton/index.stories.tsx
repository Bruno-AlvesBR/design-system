import { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider } from "@mui/material";

import { IShortcut } from "@/interfaces/IShortcut";
import { ShortcutButton } from ".";
import { theme } from "../../styles/theme";

export default {
  title: "Components/Shortcut",
  component: (args: IShortcut) => (
    <ThemeProvider theme={theme}>
      <ShortcutButton {...args} />
    </ThemeProvider>
  ),
} as Meta<IShortcut>;

export const v1: StoryObj<IShortcut> = {
  args: {
    children: "enviar",
    href: "/test",
  },
};

export const v2: StoryObj<IShortcut> = {
  args: {
    children: "enviar",
    href: "/test",
    isInverted: true,
  },
};
