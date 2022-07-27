import Button from "@mui/material/Button";
import "./styled.tsx";
import { SwitchMode } from "./components/SwitchMode";
import { Typography } from "@mui/material";
import { SignInMenu } from "./components/SignInMenu";
import { ButtonCurrency, ButtonSignIn, ButtonsWrapper, Container, Item, Items, LogoParagraph, LogoWrapper, StyledLink } from "./styled";
import { CurrencyMenu } from "./components/CurrencyMenu";

import { BurgerMenu } from "./components/BurgerMenu";

export const TopBar = () => {
  return (
    <Container>
      <LogoWrapper>
        <StyledLink to="/">
          <Typography variant="H1Styled">justjoin.it</Typography>
        </StyledLink>
        <LogoParagraph> #1 Job Board for tech industry in Europe</LogoParagraph>
        <SwitchMode />
      </LogoWrapper>
      <Items>
        <StyledLink to="/">
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
        <Button color="secondary" variant="outlined" href="/post">
          <Typography variant="buttonFont"> Post a Job</Typography>
        </Button>
        <ButtonSignIn>
          <SignInMenu />
        </ButtonSignIn>
        <ButtonCurrency>
          <CurrencyMenu />
        </ButtonCurrency>
        <BurgerMenu />
      </ButtonsWrapper>
    </Container>
  );
};
