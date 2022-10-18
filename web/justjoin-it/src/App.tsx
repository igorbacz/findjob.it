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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        {/* <Route path="/search" component={Search} onEnter={requireAuth} /> */}
        <Route path="*" element={<OffersListPage />} />
        <Route path="/login" element={<SignInPage componentStack={""} />} />
        <Route path="/register" element={<RegisterPage componentStack={""} />} />
        <Route path="/admin" element={<AdminPanelPage />} />
        <Route path="/post" element={<PostOffersPage />} />
        <Route path="/add-offer" element={<OfferFormPage />} />
        <Route path="/offer/:offerId" element={<BigOfferPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
