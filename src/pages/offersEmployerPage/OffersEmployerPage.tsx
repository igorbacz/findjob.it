import { useMediaQuery } from "@mui/material";
import { Fragment } from "react";
import { OffersEmployer } from "../../components/offerEmployer/OffersEmployer";
import { TopBar } from "../../components/topBar/TopBar";
import { TopBarResponsive } from "../../components/topBar/TopBarResponsive";
import { theme } from "../../theme";

export const OffersEmployerPage = () => {
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
      <OffersEmployer />
    </Fragment>
  );
};
