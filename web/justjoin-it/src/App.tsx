import { ThemeProvider } from "@mui/material";
import React from "react";
import "./App.css";
import { SearchBar } from "./components/searchBar/SearchBar";
import { TopBar } from "./components/topBar/TopBar";
import { theme } from "./theme";
import { HomePage } from "./pages/homePage/HomePage";
import { PostOffersPage } from "./pages/postOffersPage/PostOffersPage";
import { SignInPage } from "./pages/signInPage/SignInPage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {/* <PostOffersPage /> */}
        <HomePage />
        {/* <SignInPage /> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
