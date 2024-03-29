import styled from "@emotion/styled";
import { Box, Rating, TextField } from "@mui/material";

export const BigOfferContainer = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  height: 100%;
`;

export const HeaderBox = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 30px 200px 100px;
  border-radius: 0px 0px 4px 4px;
  padding: 40px 20px 0px;
  background: url(/static/media/header_background.0ef18c97.png) center center / cover no-repeat,
    linear-gradient(30deg, rgb(212, 104, 222), rgb(82, 77, 225));
`;
export const LogoBox = styled(Box)`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
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

export const LogoResponsiveBox = styled(Box)`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
  width: 95px;
  height: 95px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  background-color: white;
  border-radius: 50%;
`;

export const LogoImg = styled.img`
  max-width: 70px;
  max-height: 45px;
`;

export const HeaderInfo = styled(Box)`
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;
  width: 350px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: white;
  gap: 10px;
`;

export const AdressHeader = styled(Box)`
  font-weight: 600;
  padding: 4px 4px;
  display: flex;
  align-items: center;
  gap: 5px;
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
  width: 20%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-shadow: rgb(0 0 0 / 8%) 0px 2px 2px 0px, rgb(0 0 0 / 6%) 0px 1px 5px 0px;
  border-radius: 4px;
  padding: 20px 5px;
  gap: 12px;
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

export const DataName = styled(Box)`
  margin-bottom: -16px;
  margin-top: 15px;
`;

export const DataDesc = styled(Box)`
  color: rgb(153, 161, 171);
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
  border-bottom: 2px solid rgb(243, 246, 248);
  padding: 12px 20px;
  display: flex;
  margin-bottom: 10px;
`;

export const StackDetails = styled(Box)`
  display: flex;
  justify-content: space-evenly;
  gap: 30px;
  padding: 12px;
  flex-wrap: wrap;
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

export const Content = styled(Box)`
  padding: 15px;
  color: rgb(55, 71, 79);
  line-height: 1.5;
  text-align: left;
`;

export const StyledSmallField = styled(TextField)`
  .MuiOutlinedInput-root {
    border-radius: 5px;
    height: 45px;
    width: 120%;
    text-align: left;
  }
`;
export const InputsContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  gap: 70px;
  padding: 10px 30px;
  justify-content: space-flex-start;
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
  padding: 28px 23px;
`;

export const TitleBox = styled(Box)`
  margin-bottom: 4px;
  color: "rgb(255, 255, 255)";
`;

export const UploadBox = styled(Box)`
  width: 100%;
  height: 72px;
  border: 2px dashed rgb(228, 232, 240);
  border-radius: 5px;
  padding: 20px 0px;
  display: flex;
  justify-content: center;
  text-align: center;
`;

export const RemoteBigBox = styled(Box)`
  padding: 4px 8px;
  border-radius: 4px;
  text-align: center;
  white-space: nowrap;
  font-weight: 200;
  background-color: rgb(255, 245, 248);
  color: rgb(255, 64, 129);
`;
