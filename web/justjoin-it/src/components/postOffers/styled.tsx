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
`;
export const OffersBox = styled(Box)`
  padding: 40px;
  width: 100%;
  background-color: #fafafa;
`;

export const ContentOffers = styled(Box)`
  display: flex;
  justify-content: space-around;
`;

export const OfferBox = styled(Box)`
  border: 1px solid #e7e9ed;
  border-radius: 10px;
  box-shadow: 0 15px 30px -1px rgb(214 231 249 / 55%);
  width: 100%;
  margin: 0 20px;
`;

export const OfferHeader = styled(Box)`
  border-bottom: solid 1px #cfd8dc;
  padding: 20px 30px;
`;

export const Option = styled.h3`
  font-size: 24px;
  font-weight: 600;
`;

export const Price = styled.span`
  font-size: 50px;
  font-weight: bold;
`;

export const Currency = styled.span`
  color: #cfd8dc;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0.38px;
`;

export const ContentOffer = styled(Box)`
  padding: 20px 30px;
`;

export const StyledListItem = styled(ListItem)`
  gap: 15px;
  padding: 15px;
`;
