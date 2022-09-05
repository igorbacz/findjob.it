import { Box, useMediaQuery } from "@mui/material";
import { OpenStreetMap } from "../../components/OpenStreetMap/OpenStreetMap";
import { SearchBar } from "../../components/searchBar/SearchBar";
import { SearchBarResponsive } from "../../components/searchBar/SearchBarResponsive";
import { Tabs } from "../../components/Tabs/Tabs";
import { TopBar } from "../../components/topBar/TopBar";
import { TopBarResponsive } from "../../components/topBar/TopBarResponsive";
import { theme } from "../../theme";
import { LeftSideBox, PageContainer, RightSideBox } from "../bigOfferPage/styled";

export const OffersListPage = () => {
  const isMatchLarge = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <Box>
      {isMatchLarge ? (
        <Box>
          <TopBarResponsive />
          <SearchBarResponsive />
        </Box>
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
        {!isMatchLarge ? (
          <RightSideBox>
           
              <OpenStreetMap />
           
          </RightSideBox>
        ) : null}
      </PageContainer>
    </Box>
  );
};
