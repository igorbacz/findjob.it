import React from "react";
import { Offer } from "./types";
import "./style.css";

export const MiniOffer = (props: Offer) => {
  return (
    <div className="miniOffer">
      <img className="miniOffer__img" alt="" title="Company logo" src={props.logo}></img>
      <div className="miniOffer__desc">
        <h4 className="miniOffer__title">{props.title}</h4>
        <div className="miniOffer__details">
          <p className="miniOffer__paragraph">{props.companyName}</p>
          <p className="miniOffer__paragraph">{props.city}</p>
        </div>
      </div>
      <div className="miniOffer__amount--wrapper">
        <h3 className="miniOffer__amount">{props.amount} PLN</h3>
      </div>
    </div>
  );
};
