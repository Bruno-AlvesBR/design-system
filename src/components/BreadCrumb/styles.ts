import { styled } from "@mui/material";
import BreadcrumbMui from "@mui/material/Breadcrumbs";

export const BreadcrumbUI = styled(BreadcrumbMui)(
  ({ theme }) => ({
    color: theme?.palette?.gray100,

    "& li:last-child > a": {
      color: theme?.palette?.cyan700,
      textDecorationColor: theme?.palette?.cyan700,
    },
  })
);
