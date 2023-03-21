import { Typography } from "@mui/material";
import { Fragment } from "react";
import { HeaderPostOffers, HeaderText, OffersBox, ContentOffers, ImgBox } from "./styled";
import { BACKGROUND_URL } from "../../const/backgroundUrl";
import { variantsOfOffers } from "./variantsOfOffers";
import { OfferEmployer } from "./components/OfferEmployer";

export const OffersEmployer = () => {
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
          {variantsOfOffers.map((item) => (
            <OfferEmployer name={item.name} price={item.price} content={item.content} />
          ))}
        </ContentOffers>
      </OffersBox>
    </Fragment>
  );
};
