import {
  createStyled,
  MUIStyledCommonProps,
  createBreakpoints,
} from "@mui/system";
import { createTheme, responsiveFontSizes } from "@mui/material";

export enum FontFamily {
  Primary = "'Ysabeau SC', sans-serif",
  Secondary = "'Belanosima', sans-serif",
}

const basicHeadingStyles = {
  fontFamily: FontFamily.Secondary,
  fontWeight: 500,
};

const breakpoints = createBreakpoints({
  values: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 1024,
    xl: 1280,
  },
});

const scrollbarStyles = {
  "*::-webkit-scrollbar": {
    display: "none",
  },
};

let defaultTheme = createTheme({
  breakpoints,
  palette: {
    primary: {
      main: "#1E1E1E",
      light: "#0070F3",
      dark: "#004DA7",
      logo: "#FF5733",
      bg: "#EAEAEA",
    },
    secondary: {
      main: "#FAFAFA",
      light: "#A9F1E3",
      dark: "#8BC6BB",
      bg: "#999999",
    },
    error: {
      main: "#B51010",
    },
    info: {
      main: "rgba(0,0,0,0.1)",
    },
    success: {
      main: "#148314",
    },
    warning: {
      main: "#FFD700",
    },
    text: {
      primary: "rgba(0,0,0,0.87)",
    },
    background: {
      default: "#FAFAFA",
    },
    divider: "#A0A9AA",
  },
  typography: {
    fontFamily: FontFamily.Primary,
    h1: basicHeadingStyles,
    h2: { fontWeight: 600 },
    h3: basicHeadingStyles,
    h4: basicHeadingStyles,
    h5: basicHeadingStyles,
    h6: basicHeadingStyles,
    subtitle1: {
      fontWeight: 600,
    },
    subtitle2: {
      fontWeight: 100,
      fontSize: "1rem",
      fontFamily: FontFamily.Secondary,
    },
    button: {
      fontFamily: FontFamily.Secondary,
      fontWeight: 600,
    },
    overline: {
      fontFamily: FontFamily.Secondary,
      fontWeight: 600,
    },
    caption: {
      fontFamily: FontFamily.Secondary,
      textTransform: "uppercase",
      fontSize: "0.5rem",
      fontWeight: 200,
      letterSpacing: "0.5rem",
      textAlign: "center",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: scrollbarStyles,
    },
  },
});

defaultTheme = responsiveFontSizes(defaultTheme);

const _styled = createStyled({ defaultTheme });

const styled = ((component: any, config: any) => {
  config = {
    shouldForwardProp: (prop: string) => !prop.startsWith("$"),
    ...config,
  };
  return _styled(component, config);
}) as typeof _styled;

export type ThemeType = typeof defaultTheme;

export interface IStyledCommonProps extends MUIStyledCommonProps<ThemeType> {
  theme: ThemeType;
}

export { defaultTheme };

export default styled;
