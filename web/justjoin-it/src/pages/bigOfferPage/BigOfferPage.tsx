import { useMediaQuery } from "@mui/material";
import { theme } from "../../theme";
import { LargeView } from "./components/LargeView";
import { DefaultView } from "./components/DeafultView";

export const BigOfferPage = () => {
  const isMatchLarge = useMediaQuery(theme.breakpoints.down("lg"));
  return <>{isMatchLarge ? <LargeView /> : <DefaultView />}</>;
};
