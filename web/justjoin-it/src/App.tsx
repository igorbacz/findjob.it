import React from "react";
import "./App.css";
import { SearchBar } from "./components/searchBar/SearchBar";

import { HomePage } from "./pages/homePage/HomePage";
import { PostOffersPage } from "./pages/postOffersPage/PostOffersPage";
import { SignInPage } from "./pages/signInPage/SignInPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BigOfferPage } from "./pages/bigOfferPage/BigOfferPage";
import { OffersListPage } from "./pages/OffersListPage/OffersListPage";
import { TopBar } from "./components/topBar/TopBar";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<OffersListPage />} />
          <Route path="offer" element={<BigOfferPage />} />
          <Route path="signIn" element={<SignInPage />} />
          <Route path="post" element={<PostOffersPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
