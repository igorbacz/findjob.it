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
  const { offerId } = useParams();
  const offer = data.find((offer) => offer._id === offerId);

  return offer ? (
    <Box>
      <TopBar />
      <SearchBar />
      <PageContainer>
        <Boxe>
          <BigOffer {...offer} />
        </Boxe>
        <GoogleMap />
      </PageContainer>
    </Box>
  ) : (
    <div>Offer not found</div>
  );
};
