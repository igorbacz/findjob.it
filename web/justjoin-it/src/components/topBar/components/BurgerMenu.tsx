import { Fragment, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Backdrop, Box, IconButton, MenuItem, Modal, Typography } from "@mui/material";
import { Header, HeaderContainer } from "../../searchBar/styled";
import CloseIcon from "@mui/icons-material/Close";
import SchoolIcon from "@mui/icons-material/School";
import BarChartIcon from "@mui/icons-material/BarChart";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import WorkIcon from "@mui/icons-material/Work";
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
import { BurgerButton, SignInBox, SignInButton, SmallBox, SocialBox } from "../styled";

export const style = {
  position: "absolute" as "absolute",
  top: "0%",
  right: "0%",
  width: 400,
  height: "100%",
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "5px",
  transform: " none",
};

export const BurgerMenu = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Fragment>
      <IconButton onClick={handleOpen}>
        <MenuIcon />
      </IconButton>
      <Modal open={open} onClose={handleClose} BackdropComponent={Backdrop}>
        <Box sx={style}>
          <HeaderContainer>
            <Header>
              <Typography variant="subtitle4">MENU</Typography>
            </Header>
            <IconButton color="secondary">
              <CloseIcon onClick={handleClose} />
            </IconButton>
          </HeaderContainer>
          <Box>
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
          <SignInBox>
            <SignInButton>
              <MenuItem>
                <IconButton color="primary">
                  <SupportAgentIcon />
                </IconButton>
                Sign in as a developer
              </MenuItem>
            </SignInButton>
            <SignInButton>
              <MenuItem>
                <IconButton color="primary">
                  <WorkIcon />
                </IconButton>
                Sign in to Employer Panel
              </MenuItem>
            </SignInButton>
          </SignInBox>
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
        </Box>
      </Modal>
    </Fragment>
  );
};
