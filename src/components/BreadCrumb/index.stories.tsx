import { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider } from "@mui/material";

import { IBreadcrumb } from "@/interfaces/IBreadcrumb";
import { BreadCrumb } from ".";
import { theme } from "../../styles/theme";
import { Anchor } from "../Anchor";

export default {
  title: "Components/BreadCrumb",
  component: (args: IBreadcrumb) => (
    <ThemeProvider theme={theme}>
      <BreadCrumb {...args}>
        <Anchor>test 1</Anchor>
        <Anchor>test 2</Anchor>
      </BreadCrumb>
    </ThemeProvider>
  ),
} as Meta<IBreadcrumb>;

export const v1: StoryObj<IBreadcrumb> = {
  args: {},
};
