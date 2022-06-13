import Button from "@mui/material/Button";
import React from "react";
import "./styled.tsx";
import { SwitchMode } from "./SwitchMode";
import { ThemeProvider } from "@mui/material";
import { theme } from "../theme";
import { SignInMenu } from "./SignInMenu";
import { CurrencyMenu } from "./CurrencyMenu";
import { ButtonCurrency, ButtonSignIn, ButtonsWrapper, Container, Item, Items, LogoHeader, LogoParagraph, LogoWrapper } from "./styled";

export const TopBar = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <LogoWrapper>
          <a>
            <LogoHeader>justjoin.it</LogoHeader>
          </a>
          <LogoParagraph> #1 Job Board for tech industry in Europe</LogoParagraph>
          <SwitchMode />
        </LogoWrapper>
        <Items>
          <a>
            <Item>Offers</Item>
          </a>
          <a>
            <Item>Brand Stories</Item>
          </a>
          <a>
            <Item>Geek</Item>
          </a>
          <a>
            <Item>Matchmaking</Item>
          </a>
        </Items>
        <ButtonsWrapper>
          <Button color="secondary" variant="outlined">
            Post a Job
          </Button>
          <ButtonSignIn>
            <SignInMenu />
          </ButtonSignIn>
          <ButtonCurrency>
            <CurrencyMenu />
          </ButtonCurrency>
        </ButtonsWrapper>
      </Container>
    </ThemeProvider>
  );
};
