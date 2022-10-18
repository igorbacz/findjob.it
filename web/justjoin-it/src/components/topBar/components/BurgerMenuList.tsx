import SchoolIcon from "@mui/icons-material/School";
import BarChartIcon from "@mui/icons-material/BarChart";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import EventIcon from "@mui/icons-material/Event";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import FlagIcon from "@mui/icons-material/Flag";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import NetworkCheckIcon from "@mui/icons-material/NetworkCheck";
import HelpIcon from "@mui/icons-material/Help";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import { BurgerButton, SmallBox, SocialBox, StyledLink } from "../styled";
import { IconButton, Box, useMediaQuery } from "@mui/material";
import { theme } from "../../../theme";
import { Fragment } from "react";
import { SignInBurger } from "./SignInBurger";
import { useSelector } from "react-redux";
import { userDataSelector } from "../../../service/user/selectors";

export const BurgerMenuList = () => {
  const isMatchMedium = useMediaQuery(theme.breakpoints.down("md"));
  const userData: any = useSelector(userDataSelector);
  const isAuthenticated: boolean = userData.isAuthenticated;
  return (
    <Fragment>
      <Box>
        {isAuthenticated ? (
          <StyledLink to={"/admin"}>
            <BurgerButton variant="text" color="secondary" startIcon={<SchoolIcon />} fullWidth>
              Admin panel
            </BurgerButton>
          </StyledLink>
        ) : null}
        <BurgerButton variant="text" color="secondary" startIcon={<SchoolIcon />} fullWidth>
          For Juniors
        </BurgerButton>
        <BurgerButton variant="text" color="secondary" startIcon={<BarChartIcon />} fullWidth>
          IT Index
        </BurgerButton>
        <BurgerButton variant="text" color="secondary" startIcon={<EventIcon />} fullWidth>
          Event
        </BurgerButton>
        <BurgerButton variant="text" color="secondary" startIcon={<VideogameAssetIcon />} fullWidth>
          JustJoinIt Games
        </BurgerButton>
        <BurgerButton variant="text" color="secondary" startIcon={<FlagIcon />} fullWidth>
          Report
        </BurgerButton>
        <BurgerButton variant="text" color="secondary" startIcon={<RocketLaunchIcon />} fullWidth>
          Careers
        </BurgerButton>
      </Box>
      <SmallBox>
        <BurgerButton variant="text" color="secondary" startIcon={<NetworkCheckIcon />} fullWidth>
          RSS
        </BurgerButton>
        <BurgerButton variant="text" color="secondary" startIcon={<HelpIcon />} fullWidth>
          Help
        </BurgerButton>
        <BurgerButton variant="text" color="secondary" startIcon={<LibraryBooksIcon />} fullWidth>
          Terms
        </BurgerButton>
      </SmallBox>
      <SignInBurger />
      {!isMatchMedium ? (
        <SocialBox>
          <IconButton>
            <FacebookIcon />
          </IconButton>
          <IconButton>
            <LinkedInIcon />
          </IconButton>
          <IconButton>
            <YouTubeIcon />
          </IconButton>
          <IconButton>
            <InstagramIcon />
          </IconButton>
        </SocialBox>
      ) : null}
    </Fragment>
  );
};
