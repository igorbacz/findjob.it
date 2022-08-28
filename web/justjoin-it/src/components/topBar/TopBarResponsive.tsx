import { Box, Drawer, IconButton, List, Backdrop, Modal, ListItemButton, ListItemIcon, ListItemText, Typography, Collapse } from "@mui/material";
import React, { Fragment, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { BurgerHeader } from "./components/BurgerHeader";
import styled from "@emotion/styled";
import { BurgerButton, ButtonCurrency, SmallBox, StyledLink, LogoResponsiveWrapper } from "./styled";
import { SignInMenu } from "./components/SignInMenu";
import { CurrencyMenu } from "./components/CurrencyMenu";
import { BurgerMenuList } from "./components/BurgerMenuList";
import { BigBurgerMenuBox } from "./components/BurgerMenu";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import CasesOutlinedIcon from "@mui/icons-material/CasesOutlined";
import HelpIcon from "@mui/icons-material/Help";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import { SignInBurger } from "./components/SignInBurger";

export const TopBarResponsiveHeader = styled(Box)`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e4e8f0;
`;

export const BoxFlex = styled(Box)`
  display: flex;
`;

export const TopBarResponsive = () => {
  const [open, setOpen] = useState(false);
  const [nestOpen, setNestOpen] = useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Fragment>
      <TopBarResponsiveHeader>
        <BoxFlex>
          <SignInMenu />
          <ButtonCurrency>
            <CurrencyMenu />
          </ButtonCurrency>
          <IconButton onClick={() => setOpen(true)}>
            <MenuIcon />
          </IconButton>
        </BoxFlex>
        <LogoResponsiveWrapper>
          <StyledLink to="/">
            <Typography variant="H2StyledBold">findjob.it</Typography>
          </StyledLink>
        </LogoResponsiveWrapper>
      </TopBarResponsiveHeader>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <BurgerHeader />
        <BurgerButton variant="text" href="/" startIcon={<WorkOutlineOutlinedIcon />}>
          Offers
        </BurgerButton>
        <BurgerButton variant="text" color="secondary" startIcon={<BusinessOutlinedIcon />}>
          Brand Stories
        </BurgerButton>
        <BurgerButton variant="text" color="secondary" startIcon={<DescriptionOutlinedIcon />}>
          Geek
        </BurgerButton>
        <BurgerButton variant="text" color="secondary" startIcon={<CasesOutlinedIcon />}>
          Matchmaking
        </BurgerButton>
        <SmallBox>
          <BurgerButton variant="text" color="secondary" startIcon={<HelpIcon />} fullWidth>
            Help
          </BurgerButton>
          <BurgerButton variant="text" color="secondary" startIcon={<LibraryBooksIcon />} fullWidth>
            Terms
          </BurgerButton>
        </SmallBox>
        <SignInBurger />
      </Drawer>
    </Fragment>
  );
};
