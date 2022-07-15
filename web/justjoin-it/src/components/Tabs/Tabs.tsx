import * as React from "react";
import TabsUnstyled from "@mui/base/TabsUnstyled";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";
import TabUnstyled from "@mui/base/TabUnstyled";
import { OffersList } from "../offersList/OffersList";
import styled from "@emotion/styled";
import { data } from "../../data";
import MiniOffer from "../miniOffer/MiniOffer";

export default function BasicTabs() {
  return (
    <TabsUnstyled defaultValue={0}>
      <TabsListUnstyled>
        <TabUnstyled>Offers with salary</TabUnstyled>
        <TabUnstyled>All offers</TabUnstyled>
      </TabsListUnstyled>
      <TabPanelUnstyled value={0}>
        {data
          .filter((amount) => amount.amount)
          .map((offer) => (
            <MiniOffer key={offer._id} {...offer} />
          ))}
      </TabPanelUnstyled>
      <TabPanelUnstyled value={1}>
        <OffersList />
      </TabPanelUnstyled>
    </TabsUnstyled>
  );
}
