import React from "react";
import "./style.css";

export const TopBar = () => {
  return (
    <div className="topbar">
      <div className="topbar__left">
        <h1 className="topbar__logo">
          <a>justjoin.it</a>
        </h1>
        <p className="topbar__logo">#1 Job Board for tech industry in Europe</p>
        <label className="switch">
          <input type="checkbox" />
          <span className="slider"></span>
        </label>
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
        <button className="button--light" type="button">
          Post a Job
        </button>
        <button className="button--pink" type="button">
          Sign in
        </button>
        <div className="button__wrapper">
          <button className="button__currency" type="button">
            PLN
          </button>
        </div>
      </div>
    </div>
  );
};
