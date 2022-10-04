import { Box, useMediaQuery } from "@mui/material";
import { BigOffer } from "../../components/bigOffer/BigOffer";
import { OpenStreetMap } from "../../components/OpenStreetMap/OpenStreetMap";
import { SearchBar } from "../../components/searchBar/SearchBar";
import { TopBar } from "../../components/topBar/TopBar";
import { AllPageWrapper, LeftSideBox, PageContainer, RightSideBox } from "./styled";
import { useParams } from "react-router-dom";
import { TopBarResponsive } from "../../components/topBar/TopBarResponsive";
import { theme } from "../../theme";
import { useSelector } from "react-redux";
import { BigOfferDetails } from "../../types/types";
import { allOffersSelector } from "../../services/selectors";

export const BigOfferPage = () => {
  const offers: BigOfferDetails[] = useSelector(allOffersSelector);
  const { offerId } = useParams();
  const offer = offers.find((offer) => offer._id === offerId);
  const isMatchLarge = useMediaQuery(theme.breakpoints.down("lg"));

  return offer ? (
    <AllPageWrapper>
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
    </AllPageWrapper>
  ) : (
    <Box>Offer not found</Box>
  );
};
