import { Drawer, IconButton, Typography } from "@mui/material";
import { Fragment, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { BurgerHeader } from "./components/BurgerHeader";
import { BurgerButton, ButtonCurrency, SmallBox, StyledLink, LogoResponsiveWrapper, BoxFlex, TopBarResponsiveHeader } from "./styled";
import { SignInMenu } from "./components/SignInMenu";
import { CurrencyMenu } from "./components/CurrencyMenu";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import CasesOutlinedIcon from "@mui/icons-material/CasesOutlined";
import HelpIcon from "@mui/icons-material/Help";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import { SignInBurger } from "./components/SignInBurger";
import { isAuthenticatedSelector } from "../../service/user/selectors";
import { useSelector } from "react-redux";
import SchoolIcon from "@mui/icons-material/School";

export const TopBarResponsive = () => {
  const isAuthenticated: boolean = useSelector(isAuthenticatedSelector);
  const [open, setOpen] = useState(false);
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
        {isAuthenticated ? (
          <StyledLink to={"/admin"}>
            <BurgerButton variant="text" color="secondary" startIcon={<SchoolIcon />} fullWidth>
              Admin panel
            </BurgerButton>
          </StyledLink>
        ) : null}
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
