import React from "react";
import "./App.css";
import { PostOffersPage } from "./pages/postOffersPage/PostOffersPage";
import { SignInPage } from "./pages/signInPage/SignInPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BigOfferPage } from "./pages/bigOfferPage/BigOfferPage";
import { OffersListPage } from "./pages/OffersListPage/OffersListPage";
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
