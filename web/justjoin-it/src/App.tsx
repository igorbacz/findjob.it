import { ThemeProvider } from "@mui/material";
import React from "react";
import "./App.css";
import { SearchBar } from "./components/searchBar/SearchBar";
import { theme } from "./components/theme";
import { TopBar } from "./components/topBar/TopBar";
import { HomePage } from "./pages/homePage/HomePage";
import { SignInPage } from "./pages/signInPage/SignInPage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <HomePage />
        {/* <SignInPage /> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
