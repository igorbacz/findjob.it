import { createTheme } from "@mui/material/styles";
import { pink, grey } from "@mui/material/colors";
import { spacing } from "@mui/system";

export const theme = createTheme({
  palette: {
    primary: {
      light: pink[300],
      main: pink[500],
      dark: pink[700],
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
