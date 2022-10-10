import { useMediaQuery } from "@mui/material";
import { Fragment } from "react";
import { AdminPanel } from "../../components/adminPanel/AdminPanel";
import { TopBar } from "../../components/topBar/TopBar";
import { TopBarResponsive } from "../../components/topBar/TopBarResponsive";
import { theme } from "../../theme";

export const AdminPanelPage = () => {
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
      <AdminPanel />
    </Fragment>
  );
};
