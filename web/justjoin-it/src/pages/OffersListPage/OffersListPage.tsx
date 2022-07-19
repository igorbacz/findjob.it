import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { GoogleMap } from "../../components/googleMap/googleMap";
import { SearchBar } from "../../components/searchBar/SearchBar";
import BasicTabs from "../../components/Tabs/Tabs";
import { TopBar } from "../../components/topBar/TopBar";
import { PageContainer } from "../bigOfferPage/styled";

export const PageSideContainer = styled(Box)`
  flex: 1 1 0%;
`;

export const OffersListPage = () => {
  return (
    <Box>
      <TopBar />
      <SearchBar />
      <PageContainer>
        <BasicTabs />
        <GoogleMap />
      </PageContainer>
    </Box>
  );
};
