import { Box } from "@mui/material";
import React from "react";
import { BigOffer } from "../../components/bigOffer/BigOffer";
import { GoogleMap } from "../../components/googleMap/googleMap";
import { OffersList } from "../../components/offersList/OffersList";
import { SearchBar } from "../../components/searchBar/SearchBar";
import { TopBar } from "../../components/topBar/TopBar";

export const HomePage = () => {
  return (
    <Box>
      <TopBar />
      <SearchBar />
      {/* <BigOffer /> */}
      <OffersList />
      <GoogleMap />
    </Box>
  );
};
