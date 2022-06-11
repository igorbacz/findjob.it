import React from "react";
import { GoogleMap } from "../../components/googleMap/googleMap";
import { OffersList } from "../../components/offersList/OffersList";
import { SearchBar } from "../../components/searchBar/SearchBar";
import { TopBar } from "../../components/topBar/TopBar";

export const HomePage = () => {
  return (
    <div>
      <TopBar />
      <SearchBar />
      <OffersList />
      <GoogleMap />
    </div>
  );
};
