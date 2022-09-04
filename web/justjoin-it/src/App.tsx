import { PostOffersPage } from "./pages/postOffersPage/PostOffersPage";
import { SignInPage } from "./pages/signInPage/SignInPage";
import { Route, Routes } from "react-router-dom";
import { BigOfferPage } from "./pages/bigOfferPage/BigOfferPage";
import { OffersListPage } from "./pages/OffersListPage/OffersListPage";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import { OfferFormPage } from "./pages/OfferFormPage/OfferFormPage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="*" element={<OffersListPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/post" element={<PostOffersPage />} />
        <Route path="/add-offer" element={<OfferFormPage />} />
        <Route path="/offer/:offerId" element={<BigOfferPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
