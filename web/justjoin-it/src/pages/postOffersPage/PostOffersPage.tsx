import { useMediaQuery } from "@mui/material";
import { Fragment } from "react";
import { PostOffers } from "../../components/postOffers/PostOffers";
import { TopBar } from "../../components/topBar/TopBar";
import { TopBarResponsive } from "../../components/topBar/TopBarResponsive";
import { theme } from "../../theme";

export const PostOffersPage = () => {
  const isMatchLarge = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <Fragment>
      {isMatchLarge ? (
        <TopBarResponsive />
      ) : (
        <>
          <TopBar />
        </>
      )}
      <PostOffers />
    </Fragment>
  );
};
