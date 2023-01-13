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
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "./service/user/userSlice";
import { ProtectedRoute } from "./ProtectedRoute";
import Cookies from "js-cookie";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const userAuthenticaded = async () => {
      const response = await fetch("http://localhost:3000/authentication/", {
        method: "GET",
        credentials: "include",
        // headers: {
        //   "Access-Control-Allow-Credentials": "true",
        //   httpOnly: "true",
        // },
      });
      console.log(Cookies.get("token"));
      const data = await response.json();
      if (response.ok) {
        dispatch(login(data));
      } else {
        dispatch(logout());
      }
    };
    userAuthenticaded();
  }, []);
  console.log(Cookies.get("token"));
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<OffersListPage />} />
        <Route path="/login" element={<SignInPage componentStack={""} />} />
        <Route path="/register" element={<RegisterPage componentStack={""} />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminPanelPage />
            </ProtectedRoute>
          }
        />
        <Route path="/post" element={<PostOffersPage />} />
        <Route
          path="/add-offer"
          element={
            <ProtectedRoute>
              <OfferFormPage />
            </ProtectedRoute>
          }
        />
        <Route path="/offer/:offerId" element={<BigOfferPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
