import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Backdrop, Box, Button, IconButton, MenuItem, Modal } from "@mui/material";
import styled from "@emotion/styled";
import { HeaderBig, HeaderContainer } from "../../searchBar/styled";
import CloseIcon from "@mui/icons-material/Close";
import SchoolIcon from "@mui/icons-material/School";
import BarChartIcon from "@mui/icons-material/BarChart";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import WorkIcon from "@mui/icons-material/Work";
import { Wrapper } from "../../googleMap/styled";
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

export const BurgerBox = styled(Box)`position: 'absolute' as 'absolute',
 display:flex;
  transform: translate(-50%, -50%);
   background-color: white;
  width: 300;
  height:100%;
  background-color: white;
  border: 2px solid #000;
  boxShadow: 24;
  `;

const style = {
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

export const Header = styled.h3`
  color: #37474f;
  font-weight: 700;
  margin-left: 10px;
`;

export const BurgerButton = styled(Button)`
  border-radius: 0px;
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  padding: 3px 3px 3px 20px;
`;

export const SmallBox = styled(Box)`
  border-top: 4px solid #f3f6f8;
`;

const menuStyle = {
  border: "solid 1px black",
};

export const SignInBox = styled.div`
  padding-left: 24px;
  padding-right: 20px;
  padding-bottom: 16px;
`;

export const SignInButton = styled.div`
  border: 1px solid black;
  margin: 6px 10px 6px 10px;
`;

export const SocialBox = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px 10px 10px 10px;
`;

export const BurgerMenu = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <IconButton onClick={handleOpen}>
        <MenuIcon />
      </IconButton>
      <Modal open={open} onClose={handleClose} BackdropComponent={Backdrop}>
        <Box sx={style}>
          <HeaderContainer>
            <Header>MENU</Header>
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
    </div>
  );
};
