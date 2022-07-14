import styled from "@emotion/styled";
import { Box, ListItem } from "@mui/material";

export const HeaderPostOffers = styled(Box)`
  background: url(https://justjoin.it/next-assets/addOffer/header-background.jpg);
  background-size: cover;
  background-position: center center;
  color: white;
  display: flex;
`;

export const HeaderText = styled(Box)`
  padding: 50px 80px;
  text-align: left;
  width: 450px;
`;
export const OffersBox = styled(Box)`
  padding: 40px;
  width: 100%;
  background-color: #fafafa;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContentOffers = styled(Box)`
  padding: 30px 0px;
  display: flex;
  justify-content: space-around;
`;

export const OfferBox = styled(Box)`
  border: 1px solid #e7e9ed;
  border-radius: 10px;
  box-shadow: 0 15px 30px -1px rgb(214 231 249 / 55%);
  width: 80%;
  margin: 0 20px;
`;

export const OfferHeader = styled(Box)`
  border-bottom: solid 1px #cfd8dc;
  padding: 20px 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Price = styled.span``;

export const Currency = styled.span`
  color: #cfd8dc;
`;

export const ContentOffer = styled(Box)`
  padding: 20px 30px;
  display: flex;
  flex-direction: column;
`;

export const StyledListItem = styled(ListItem)`
  gap: 15px;
  padding: 15px;
`;

export const ImgBox = styled(Box)`
  max-width: 58.333333%;
  flex-basis: 58.333333%;
`;
