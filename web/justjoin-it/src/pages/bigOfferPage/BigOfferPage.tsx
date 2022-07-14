import React from "react";
import { Box } from "@mui/material";
import { BigOffer } from "../../components/bigOffer/BigOffer";
import { GoogleMap } from "../../components/googleMap/googleMap";
import { SearchBar } from "../../components/searchBar/SearchBar";
import { TopBar } from "../../components/topBar/TopBar";
import { PageContainer } from "./styled";
import { data } from "../../data";
import styled from "@emotion/styled";
import { useParams } from "react-router-dom";

export const Boxe = styled(Box)`
  display: flex;
  flex: 0 0 60%;
  position: relative;
`;
export const BigOfferPage = () => {
  return (
    <Box>
      <TopBar />
      <SearchBar />
      <PageContainer>
        {/* {data.map((offer) => {
          return <BigOffer {...offer} key={offer._id} />;
        })} */}
        <Boxe>
          <BigOffer {...data[0]} key={data[0]._id} />
        </Boxe>
        <GoogleMap />
      </PageContainer>
    </Box>
  );
};
