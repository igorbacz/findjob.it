import Button from "@mui/material/Button";
import "./styled.tsx";
import { Typography, useMediaQuery } from "@mui/material";
import { SignInMenu } from "./components/signInMenu/SignInMenu";
import { ButtonCurrency, ButtonSignIn, ButtonsWrapper, Container, Item, Items, LogoParagraph, LogoWrapper, StyledLink } from "./styled";
import { CurrencyMenu } from "./components/CurrencyMenu";
import { BurgerMenu } from "./components/BurgerMenu";
import { TopBarResponsive } from "./TopBarResponsive";
import { theme } from "../../theme";
import { ROUTES } from "../../routes/routesMap";

export const TopBar = () => {
  const isMatchMedium = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Container>
      <LogoWrapper>
        <StyledLink to={ROUTES.home}>
          <Typography variant="H1Styled">findjob.it</Typography>
        </StyledLink>
        <LogoParagraph> #1 Job Board for tech industry in Europe</LogoParagraph>
      </LogoWrapper>
      <Items>
        <StyledLink to={ROUTES.home}>
          <Item>
            <Typography variant="buttonFont">Offers</Typography>
          </Item>
        </StyledLink>
        <Item>
          <Typography variant="buttonFont">Brand Stories</Typography>
        </Item>
        <Item>
          <Typography variant="buttonFont">Geek</Typography>
        </Item>
        <Item>
          <Typography variant="buttonFont">Matchmaking</Typography>
        </Item>
      </Items>
      <ButtonsWrapper>
        <StyledLink to={ROUTES.offersEmployer}>
          <Button color="secondary" variant="outlined">
            <Typography variant="buttonFont"> Post a Job</Typography>
          </Button>
        </StyledLink>
        <ButtonSignIn>
          <SignInMenu />
        </ButtonSignIn>
        <ButtonCurrency>
          <CurrencyMenu />
        </ButtonCurrency>
        {isMatchMedium ? <TopBarResponsive /> : <BurgerMenu />}
      </ButtonsWrapper>
    </Container>
  );
};
