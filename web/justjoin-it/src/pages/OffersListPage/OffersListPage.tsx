import { Box } from "@mui/material";
import { GoogleMap } from "../../components/googleMap/googleMap";
import { SearchBar } from "../../components/searchBar/SearchBar";
import Tabs from "../../components/Tabs/Tabs";
import { TopBar } from "../../components/topBar/TopBar";
import { LeftSideBox, PageContainer, RightSideBox } from "../bigOfferPage/styled";

export const OffersListPage = () => {
  return (
    <Box>
      <TopBar />
      <SearchBar />
      <PageContainer>
        <LeftSideBox>
          <Tabs />
        </LeftSideBox>
        <RightSideBox>
          <GoogleMap />
        </RightSideBox>
      </PageContainer>
    </Box>
  );
};
