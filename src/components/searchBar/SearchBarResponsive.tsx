import { IconButton } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import { theme } from "../../theme";
import { LocationMenu } from "./components/LocationMenu";
import { MoreFilters } from "./components/moreFilters/MoreFilters";
import { TechMenu } from "./components/TechMenu";
import SearchIcon from "@mui/icons-material/Search";
import { SearchRespWrapper } from "./styled";

export const SearchBarResponsive = () => {
  const isMatchSmall = useMediaQuery(theme.breakpoints.down("sm"));
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
