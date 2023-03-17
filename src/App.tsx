import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import { AppRoutes } from "./routes/AppRoutes";
import { UserAuthentication } from "./service/auth/authentication";

function App() {
  UserAuthentication();
  return (
    <ThemeProvider theme={theme}>
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
