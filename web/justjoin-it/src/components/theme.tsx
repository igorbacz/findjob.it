import { createTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

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
  },
  shape: {
    borderRadius: 30,
  },
  typography: {
    button: {
      textTransform: "none",
    },
  },
});
