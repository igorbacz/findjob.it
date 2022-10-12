import { PostOffersPage } from "./pages/postOffersPage/PostOffersPage";
import { SignInPage } from "./pages/signInPage/SignInPage";
import { Route, Routes } from "react-router-dom";
import { BigOfferPage } from "./pages/bigOfferPage/BigOfferPage";
import { OffersListPage } from "./pages/OffersListPage/OffersListPage";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import { OfferFormPage } from "./pages/OfferFormPage/OfferFormPage";
import { RegisterPage } from "./pages/registerPage/RegisterPage";
import { AdminPanelPage } from "./pages/AdminPanelPage/AdminPanelPage";
import { UserContext } from "./context/AuthContext";
import { useState } from "react";
import { User } from "./types/types";

function App() {
  const [user, setUser] = useState<User>();
  return (
    <UserContext.Provider value={user}>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="*" element={<OffersListPage />} />
          <Route path="/login" element={<SignInPage componentStack={""} />} />
          <Route path="/register" element={<RegisterPage componentStack={""} />} />
          <Route path="/admin" element={<AdminPanelPage />} />
          <Route path="/post" element={<PostOffersPage />} />
          <Route path="/add-offer" element={<OfferFormPage />} />
          <Route path="/offer/:offerId" element={<BigOfferPage />} />
        </Routes>
      </ThemeProvider>
    </UserContext.Provider>
  );
}

export default App;
