import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const MiniOfferCon = styled(Box)`
  width: 100%;
  height: 120px;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr 2fr;
  grid-template-rows: 1fr 1fr;
  background: white;
  box-shadow: 24px 19px 32px -31px rgba(66, 68, 90, 0.57);
  margin-top: 10px;
`;

export const LogoContainer = styled(Box)`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 3;
  padding-left: 14px;
  display: flex;
  align-items: center;
  border-radius: 6px;
  justify-content: center;
`;

export const Title = styled(Box)`
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
  color: #6b6b6b;
  text-align: center;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const DetailsSection = styled(Box)`
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: rgb(153, 161, 171);
  margin-bottom: 10px;
`;

export const Paragraph = styled.p`
  padding: 10px 10px 10px 10px;
  font-size: 10px;
  color: #a9a6a6;
`;

export const AmountBox = styled(Box)`
  grid-column-start: 4;
  grid-column-end: 5;
  grid-row-start: 1;
  grid-row-end: 2;
  color: rgb(30, 198, 108);
  margin-right: 30px;
  display: flex;
  align-items: center;
  line-height: 23px;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const MiniLogoImg = styled.img`
  max-width: 85px;
`;
