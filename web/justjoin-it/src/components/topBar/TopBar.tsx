import Button from "@mui/material/Button";
import React from "react";
import "./style.css";
import { SwitchMode } from "./SwitchMode";
import { ThemeProvider } from "@mui/material";
import { theme } from "../theme";
import { SignInMenu } from "./SignInMenu";
import { CurrencyMenu } from "./CurrencyMenu";

export const TopBar = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="topbar">
        <div className="topbar__left">
          <h1 className="topbar__logo">
            <a>justjoin.it</a>
          </h1>
          <p className="topbar__logo">#1 Job Board for tech industry in Europe</p>
          <SwitchMode />
        </div>
        <div className="topbar__items">
          <h4 className="topbar__item">
            <a>Offers</a>
          </h4>
          <h4 className="topbar__item">
            <a>Brand Stories</a>
          </h4>
          <h4 className="topbar__item">
            <a>Geek</a>
          </h4>
          <h4 className="topbar__item">
            <a>Matchmaking</a>
          </h4>
        </div>
        <div className="topbar__buttons">
          <Button color="secondary" variant="outlined">
            Post a Job
          </Button>
          <div className="button__signin">
            <SignInMenu />
          </div>
          <div className="button__wrapper">
            <CurrencyMenu />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};
