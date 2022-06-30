import styled from "@emotion/styled";
import { Box, Rating, TextField } from "@mui/material";

export const BigOfferWrapper = styled(Box)`
  display: flex;
  flex: 1 1 50%;
  margin-right: 5px;
  background: rgb(243, 246, 248);
`;

export const BigOfferContainer = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const HeaderBox = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 200px 100px;

  border-radius: 0px 0px 4px 4px;
  padding: 40px 20px 0px;
  background: url(https://justjoin.it/static/media/header_background.0ef18c97.png) center center / cover no-repeat,
    linear-gradient(30deg, rgb(255, 199, 6), rgb(255, 175, 0));
`;
export const LogoBox = styled(Box)`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;

  background-color: white;
  border-radius: 50%;
  width: 150px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  background-clip: padding-box;
  border: 10px solid rgba(255, 255, 255, 0.15);
`;

export const LogoImg = styled.img``;

export const HeaderInfo = styled(Box)`
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
  width: 350px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: white;
`;

export const TitleHeader = styled.h3`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 4px;
`;

export const AdressHeader = styled.h5`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 4px;
`;

export const AmountHeader = styled.h4`
  font-size: 18px;
  font-weight: 600;
`;

export const HeaderDetails = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  transform: translateY(-50%);
  position: relative;
  padding-left: 10px;
  padding-right: 10px;
`;

export const HeaderDetail = styled(Box)`
  width: 172px;
  height: 76px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: rgb(0 0 0 / 8%) 0px 2px 2px 0px, rgb(0 0 0 / 6%) 0px 1px 5px 0px;
  border-radius: 4px;
  padding: 20px 5px;
`;

export const IconCon = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: white;
  color: rgb(255, 82, 82);
  box-shadow: rgb(0 0 0 / 8%) 0px 2px 2px 0px, rgb(0 0 0 / 6%) 0px 1px 5px 0px;
  transform: translateY(-90%);
  position: absolute;
`;

export const DataName = styled.h4`
  font-size: 0.875rem;
  font-weight: 400;
  margin-bottom: -16px;
`;

export const DataDesc = styled.h6`
  color: rgb(153, 161, 171);
  font-size: 11px;
  font-weight: 200;
`;

export const StyledRating = styled(Rating)`
  color: rgb(255, 64, 129);
`;

export const StackContainer = styled(Box)`
  background: white;
  border-radius: 5px;
  box-shadow: rgb(225 232 240 / 70%) 0px 2px 18px 10px;
  padding: 12px 20px;
`;

export const ContainerHeader = styled(Box)`
  color: rgb(55, 71, 79);
  border-bottom: 2px solid rgb(243, 246, 248);
  font-weight: 400;
  font-size: 18px;
  padding: 12px 20px;
  display: flex;
  margin-bottom: 10px;
`;

export const StackDetails = styled(Box)`
  display: flex;
  gap: 50px;
  padding: 12px;
`;

export const StackDetail = styled(Box)`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

export const StackName = styled(Box)`
  color: rgb(55, 71, 79);
  font-weight: 400;
  font-size: 16px;
  padding: 5px;
`;

export const StackLvl = styled(Box)`
  color: rgb(153, 161, 171);
  font-size: 0.875rem;
  font-weight: 200;
  padding: 5px;
`;

export const BigOfferSection = styled(Box)`
  margin-top: 20px;
  background-color: white;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  box-shadow: rgb(225 232 240 / 70%) 0px 2px 18px 10px;
  padding: 12px 20px;
`;

export const DescriptionMiniHeader = styled(Box)`
  font-weight: 700;
  text-align: left;
  margin-top: 15px;
`;
export const DescriptionHeader = styled(Box)``;

export const Content = styled(Box)`
  color: rgb(55, 71, 79);
  font-size: 14px;
  line-height: 1.5;
  text-align: left;
`;

export const StyledSmallField = styled(TextField)`
  .MuiOutlinedInput-root {
    border-radius: 5px;
    height: 45px;
    width: 400px;
    text-align: left;
  }
`;
export const InputsContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  gap: 10px;
  padding: 10px 20px;
`;

export const InputContainer = styled(Box)`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

export const StyledBigField = styled(TextField)`
  .MuiOutlinedInput-root {
    border-radius: 5px;
    height: 90px;
    text-align: left;
  }
`;

export const BigInputContainer = styled(Box)`
  padding: 0px 20px;
`;

export const FileContainer = styled(Box)`
  padding: 20px 20px;
`;
