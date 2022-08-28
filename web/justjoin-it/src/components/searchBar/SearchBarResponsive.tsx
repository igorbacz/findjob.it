import { Box, IconButton } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";
import { LocationMenu } from "./components/LocationMenu";
import { MoreFilters } from "./components/MoreFilters";
import { TechMenu } from "./components/TechMenu";
import SearchIcon from "@mui/icons-material/Search";

export const SearchRespWrapper = styled(Box)`
  display: flex;
  align-items: center;
  min-width: 100%;
`;

export const SearchBarResponsive = () => {
  const isMatchSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const isMatchLarge = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <SearchRespWrapper>
      <IconButton>
        <SearchIcon />
      </IconButton>
      {!isMatchSmall ? (
        <>
          <LocationMenu />
          <MoreFilters />
        </>
      ) : null}
      <TechMenu />
    </SearchRespWrapper>
  );
};
