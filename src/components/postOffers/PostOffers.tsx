import { Typography } from "@mui/material";
import { Fragment } from "react";
import { HeaderPostOffers, HeaderText, OffersBox, ContentOffers, ImgBox } from "./styled";
import { BACKGROUND_URL } from "../../const/backgroundUrl";
import { OfferBasic } from "./components/OfferBasic";
import { OfferPremium } from "./components/OfferPremium";
import { OfferBusiness } from "./components/OfferBusiness";

export const PostOffers = () => {
  return (
    <Fragment>
      <HeaderPostOffers>
        <HeaderText>
          <Typography variant="H2Styled">The fast way [to warm mars] is to drop thermonuclear weapons over the poles. — Elon Musk</Typography>
        </HeaderText>
        <ImgBox sx={{ display: { xs: "none", md: "none", lg: "block", xl: "block" } }}>
          <img src={BACKGROUND_URL} alt="ikony"></img>
        </ImgBox>
      </HeaderPostOffers>
      <OffersBox>
        <Typography variant="H3Styled">Get to know job ads on findjob.it</Typography>
        <ContentOffers>
          <OfferBasic />
          <OfferPremium />
          <OfferBusiness />
        </ContentOffers>
      </OffersBox>
    </Fragment>
  );
};
