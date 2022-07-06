import Button from "@mui/material/Button";
import React from "react";
import "./styled.tsx";
import { SwitchMode } from "./components/SwitchMode";
import { Typography } from "@mui/material";
import { SignInMenu } from "./components/SignInMenu";
import { ButtonCurrency, ButtonSignIn, ButtonsWrapper, Container, Item, Items, LogoParagraph, LogoWrapper } from "./styled";
import { CurrencyMenu } from "./components/CurrencyMenu";

import { BurgerMenu } from "./components/BurgerMenu";

export const TopBar = () => {
  return (
    <Container>
      <LogoWrapper>
        <a>
          <Typography variant="H1Styled">justjoin.it</Typography>
        </a>
        <LogoParagraph> #1 Job Board for tech industry in Europe</LogoParagraph>
        <SwitchMode />
      </LogoWrapper>
      <Items>
        <a>
          <Item>
            <Typography variant="buttonFont">Offers</Typography>
          </Item>
        </a>
        <a>
          <Item>
            <Typography variant="buttonFont">Brand Stories</Typography>
          </Item>
        </a>
        <a>
          <Item>
            <Typography variant="buttonFont">Geek</Typography>
          </Item>
        </a>
        <a>
          <Item>
            <Typography variant="buttonFont">Matchmaking</Typography>
          </Item>
        </a>
      </Items>
      <ButtonsWrapper>
        <Button color="secondary" variant="outlined">
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
