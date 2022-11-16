import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const MiniOfferCon = styled(Box)`
  width: 97%;
  height: 77px;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr 2fr;
  grid-template-rows: 1fr 1fr;
  background: white;
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 5%), 0 1px 5px 0 rgb(0 0 0 / 4%);
  padding: 5px;
  border-radius: 6px;
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
  align-items: center;
  justify-content: flex-start;
  padding-left: 53px;
  wrap: nowrap;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const DetailsSection = styled(Box)`
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 3;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  color: rgb(153, 161, 171);
  margin-bottom: 10px;
  padding-left: 53px;
`;

export const Paragraph = styled.p`
  padding: 10px 10px 10px 10px;
  font-size: 10px;
  color: #a9a6a6;
`;

export const AmountAndTag = styled(Box)`
  grid-column-start: 4;
  grid-column-end: 5;
  grid-row-start: 1;
  grid-row-end: 2;
  color: rgb(30, 198, 108);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  line-height: 23px;
  white-space: nowrap;
  text-overflow: ellipsis;
  gap: 7px;
  padding-right: 15px;
`;

export const MiniLogoImg = styled.img`
  max-width: 85px;
  max-height: 70px;
`;

export const RemoteBox = styled(Box)`
  color: rgb(255, 64, 129);
  height: 21px;
  padding: 0 12px;
  line-height: 21px;
  margin-left: 12px;
  white-space: nowrap;
  border-radius: 11px;
  background-color: rgb(255, 245, 248);
`;

export const TagsBox = styled(Box)`
  grid-column-start: 4;
  grid-column-end: 5;
  grid-row-start: 2;
  grid-row-end: 3;
  display: flex;
  align-items: center;
  gap: 7px;
  justify-content: flex-end;
  padding-right: 15px;
`;

export const TagBox = styled(Box)`
  color: rgb(153, 161, 171);
  height: 22px;
  display: inline-block;
  padding: 0 7px;
  overflow: hidden;
  font-size: 11px;
  min-width: 1ch;
  line-height: 20px;
  white-space: nowrap;
  border-color: rgb(224, 224, 224);
  border-style: solid;
  border-width: 1px;
  border-radius: 11px;
  text-overflow: ellipsis;
  text-transform: lowercase;
  background-color: rgb(255, 255, 255);
`;
export const TagNewBox = styled(Box)`
  color: rgb(153, 161, 171);
  height: 16px;
  padding: 0px 5px;
  font-size: 8px;
  line-height: 13px;
  margin-left: 10px;
  white-space: nowrap;
  border-color: rgb(228, 232, 240);
  border-style: solid;
  border-width: 1px;
  border-radius: 11px;
  background-color: rgb(228, 232, 240);
  display: flex;
  align-items: center;
`;

export const DaysBox = styled(Box)`
  color: rgb(55, 71, 79);
`;

export const AmountResponsive = styled(Box)`
  color: rgb(30, 198, 108);
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 3;
  padding-left: 53px;
  display: flex;
  align-items: center;
`;

export const LocationRemote = styled(Box)`
  grid-column-start: 4;
  grid-column-end: 5;
  grid-row-start: 2;
  grid-row-end: 3;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const ButtonBox = styled(Box)`
  grid-column-start: 3;
  grid-column-end: 5;
  grid-row-start: 1;
  grid-row-end: 2;
`;