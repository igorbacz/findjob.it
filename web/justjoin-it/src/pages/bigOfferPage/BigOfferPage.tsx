import { Box, useMediaQuery } from "@mui/material";
import { BigOffer } from "../../components/bigOffer/BigOffer";
import { GoogleMap } from "../../components/googleMap/googleMap";
import { SearchBar } from "../../components/searchBar/SearchBar";
import { TopBar } from "../../components/topBar/TopBar";
import { LeftSideBox, PageContainer, RightSideBox } from "./styled";
import { data } from "../../data";
import styled from "@emotion/styled";
import { useParams } from "react-router-dom";
import { TopBarResponsive } from "../../components/topBar/TopBarResponsive";
import { theme } from "../../theme";

export const Boxe = styled(Box)`
  display: flex;
  flex: 0 0 60%;
  position: relative;
`;

export const BigOfferPage = () => {
  const { offerId } = useParams();
  const offer = data.find((offer) => offer._id === offerId);
  const isMatch = useMediaQuery(theme.breakpoints.down("lg"));

  return offer ? (
    <Box>
      {isMatch ? (
        <TopBarResponsive />
      ) : (
        <>
          <TopBar />
          <SearchBar />
        </>
      )}
      <PageContainer>
        <LeftSideBox>
          <BigOffer {...offer} />
        </LeftSideBox>
        {!isMatch ? (
          <RightSideBox>
            <GoogleMap />
          </RightSideBox>
        ) : null}
      </PageContainer>
    </Box>
  ) : (
    <Box>Offer not found</Box>
  );
};
