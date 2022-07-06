import { Box } from "@mui/material";
import React from "react";
import { SearchBar } from "../../components/searchBar/SearchBar";
import { TopBar } from "../../components/topBar/TopBar";
import { BigOfferPage } from "../bigOfferPage/BigOfferPage";
import { OffersListPage } from "../OffersListPage/OffersListPage";
import { PostOffersPage } from "../postOffersPage/PostOffersPage";
import { SignInPage } from "../signInPage/SignInPage";

export const HomePage = () => {
  return (
    <Box>
      {/* <SignInPage /> */}
      {/* <BigOfferPage /> */}
      <PostOffersPage />
      {/* <OffersListPage /> */}
    </Box>
  );
};
