import { Box, useMediaQuery } from "@mui/material";
import { BigOffer } from "../../components/bigOffer/BigOffer";
import { OpenStreetMap } from "../../components/OpenStreetMap/OpenStreetMap";
import { SearchBar } from "../../components/searchBar/SearchBar";
import { TopBar } from "../../components/topBar/TopBar";
import { LeftSideBox, PageContainer, RightSideBox } from "./styled";
import { data } from "../../data";
import { useParams } from "react-router-dom";
import { TopBarResponsive } from "../../components/topBar/TopBarResponsive";
import { theme } from "../../theme";

export const BigOfferPage = () => {
  const { offerId } = useParams();
  const offer = data.find((offer) => offer._id === offerId);
  const isMatchLarge = useMediaQuery(theme.breakpoints.down("lg"));

  return offer ? (
    <Box>
      {isMatchLarge ? (
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
        {!isMatchLarge ? (
          <RightSideBox>
            <OpenStreetMap />
          </RightSideBox>
        ) : null}
      </PageContainer>
    </Box>
  ) : (
    <Box>Offer not found</Box>
  );
};
