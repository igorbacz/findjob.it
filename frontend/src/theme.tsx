import { grey } from "@mui/material/colors";
import createTheme from "@mui/material/styles/createTheme";

export const theme = createTheme({
  palette: {
    primary: {
      light: "#ff92b6",
      main: "#FF4081",
      dark: "#d60e61",
      contrastText: grey[50],
    },
    secondary: {
      light: grey[300],
      main: grey[500],
      dark: grey[700],
      contrastText: grey[900],
    },
    info: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
    success: {
      main: "rgb(255, 255, 255)",
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 28,
          cursor: "pointer",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          borderRadius: 28,
        },
      },
    },
    MuiSlider: {
      styleOverrides: {
        root: {
          color: "#ab47bc",
        },
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          margin: "10px 10px 10px 10px",
        },
      },
    },
    MuiStepIcon: {
      styleOverrides: {
        root: {
          minHeight: "50px",
        },
      },
    },
  },
  typography: {
    allVariants: {
      fontFamily: "Open Sans,sans-serif",
      color: "rgba(0, 0, 0, 0.87)",
      fontSize: "0.875rem",

      lineHeight: " 1.43",
      fontWeight: "200",
    },
    button: {
      textTransform: "none",
    },
    buttonFont: {
      lineHeight: "1.75",
      whiteSpace: "nowrap",
    },

    subtitleLight: {
      fontSize: "18px",
      fontWeight: "600",
      color: "rgb(255, 255, 255)",
    },
    subtitleStrong: {
      fontSize: "18px",
      fontWeight: "200",
    },
    subtitle2: {
      fontSize: "20px",
      fontWeight: "400",
    },
    subtitle3: {
      fontWeight: "200",
      fontSize: "16px",
    },
    subtitle5: {
      fontSize: "14px",
    },
    subtitle6: {
      fontWeight: "700",
      fontSize: "16px",
    },

    dataDesc: {
      fontSize: "11px",
      color: "rgb(153, 161, 171)",
    },

    H2Styled: {
      fontSize: "1.875rem",
    },
    H3Styled: {
      fontSize: "1.75rem",
      fontWeight: "400",
    },

    H1Styled: {
      fontSize: "35px",
      fontWeight: "bold",
      textDecorationLine: "none",
    },
    H6Light: {
      fontSize: "16px",
      fontWeight: " 500",
      letterSpacing: "0.38px",
    },
    PStyled: {
      fontSize: "11px",
      fontWeight: "200",
    },
    H5Styled: {
      fontWeight: "700",
      fontSize: "1.25rem",
    },
    RemoteTypography: {
      fontSize: "10px",
    },
    TabPink: {
      fontSize: "12px",
      fontWeight: "400",
      color: "rgb(255, 64, 129)",
    },
  },
});

theme.typography.subtitle4 = {
  fontWeight: "600",
  fontSize: "16px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "12px",
    fontWeight: "600",
  },
  [theme.breakpoints.down("xs")]: {
    fontSize: "8px",
    fontWeight: "600",
  },
};

theme.typography.H2StyledBold = {
  fontSize: "30px",
  fontWeight: "bold",
  textDecorationLine: "none",
  [theme.breakpoints.down("md")]: {
    fontSize: "25px",
  },
};

theme.typography.headerFont = {
  fontSize: "24px",
  fontWeight: "600",
  whiteSpace: "nowrap",
  [theme.breakpoints.down("md")]: {
    fontSize: "16px",
    fontWeight: "400",
  },
};

theme.typography.subtitle1 = {
  fontSize: "14px",
  fontWeight: "600",
  color: "rgb(255, 255, 255)",
  [theme.breakpoints.down("md")]: {
    fontSize: "12px",
    fontWeight: "400",
  },
};

theme.typography.subtitleLight = {
  fontSize: "18px",
  fontWeight: "600",
  color: "rgb(255, 255, 255)",
  [theme.breakpoints.down("md")]: {
    fontSize: "12px",
    fontWeight: "400",
  },
};