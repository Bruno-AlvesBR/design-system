import { createTheme } from "@mui/material/styles";
import "@mui/material/styles/createTypography";

declare module "@mui/material/styles" {
  interface PaletteOptions {
    gray100: string;
    gray200: string;
    gray400: string;

    cyan400: string;
    cyan700: string;

    black800: string;
    black900: string;
    black1000: string;

    white1000: string;

    red800: string;
  }

  interface Theme {
    palette: {
      gray100: string;
      gray200: string;
      gray400: string;

      cyan400: string;
      cyan700: string;

      black800: string;
      black900: string;
      black1000: string;

      white1000: string;

      red800: string;
    };
    typography: {
      fontSize: {
        xs: string;
        "2xs": string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        "2xl": string;
      };
      fontWeight: {
        sm: number;
        md: number;
        lg: number;
      };
      fontFamily: string;
    };
    width: {
      max: string;
      full: string;
    };
    height: {
      max: string;
      full: string;
    };
  }

  interface ThemeOptions {
    width: {
      max: string;
      full: string;
    };
    height: {
      max: string;
      full: string;
    };
  }
}

declare module "@mui/material/styles/createTypography" {
  interface TypographyOptions {
    fontSize: {
      xs: string;
      "2xs": string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      "2xl": string;
    };
    fontWeight: {
      sm: number;
      md: number;
      lg: number;
    };
  }
}

const theme = createTheme({
  palette: {
    gray100: "#e1e1e6",
    gray200: "#8F8F8F",
    gray400: "#494949",

    cyan400: "#68E7EF",
    cyan700: "#00F0FF",

    black800: "#202024",
    black900: "#121214",
    black1000: "#000000",

    white1000: "#FFFFFF",

    red800: "#D60000",
  },
  typography: {
    fontSize: {
      xs: "0.5rem",
      "2xs": "0.625rem",
      sm: "0.75rem",
      md: "0.875rem",
      lg: "1rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
    },
    fontWeight: {
      sm: 400,
      md: 600,
      lg: 700,
    },
    fontFamily: "Barlow, sans-serif",
  },
  width: {
    max: "80rem",
    full: "100%",
  },
  height: {
    max: "80rem",
    full: "100%",
  },
});

export { theme };
