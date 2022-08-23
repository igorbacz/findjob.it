import { Box, useMediaQuery } from "@mui/material";
import { GoogleMap } from "../../components/googleMap/googleMap";
import { SearchBar } from "../../components/searchBar/SearchBar";
import Tabs from "../../components/Tabs/Tabs";
import { TopBar } from "../../components/topBar/TopBar";
import { TopBarResponsive } from "../../components/topBar/TopBarResponsive";
import { theme } from "../../theme";
import { LeftSideBox, PageContainer, RightSideBox } from "../bigOfferPage/styled";

export const OffersListPage = () => {
  const isMatch = useMediaQuery(theme.breakpoints.down("lg"));

  return (
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
          <Tabs />
        </LeftSideBox>
        {!isMatch ? (
          <RightSideBox>
            <GoogleMap />
          </RightSideBox>
        ) : null}
      </PageContainer>
    </Box>
  );
};
