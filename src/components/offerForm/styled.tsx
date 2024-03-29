import styled from "@emotion/styled";
import { Box, IconButton } from "@mui/material";

export const FormContainer = styled(Box)`
  background-color: #fff;
  position: relative;
  border-radius: 5px;
  box-shadow: 0 2px 18px 10px rgb(225 232 240 / 70%);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 80px 200px 200px 200px 100px 100px 100px 250px 100px 75px 250px 75px 75px 75px 200px 100px;
  padding: 25px;
`;

export const HeaderForm = styled(Box)`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  padding: 30px 0px 0px 30px;
  display: flex;
  align-items: flex-end;
`;

export const PhotoForm = styled(Box)`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PhotoBox = styled(Box)`
  // display: flex;
  // justify-content: center;
`;

export const HeaderStack = styled(Box)`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 6;
  grid-row-end: 7;
  padding: 30px 0px 0px 30px;
  display: flex;
  align-items: flex-end;
`;

export const StackSection = styled(Box)`
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 7;
  grid-row-end: 8;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0px 30px 0px 30px;
`;

export const ButtonBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledIconButton = styled(IconButton)`
  &:hover {
    background-color: white;
  }
`;

export const InpputsBox = styled(Box)`
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 25px;
`;

export const InpputsSecondBox = styled(Box)`
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 3;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 25px;
`;

export const InfoBox = styled(Box)`
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 3;
  grid-row-end: 4;
  padding: 30px 0px 0px 30px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 40px 80px;
`;
export const OfferTitleBox = styled(Box)`
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;
  padding: 20px;
`;
export const OfferExpBox = styled(Box)`
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 3;
  padding: 20px;
`;

export const HeaderInfoBox = styled(Box)`
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
  display: flex;
  align-items: flex-end;
`;

export const EmpoloymentBox = styled(Box)`
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 4;
  grid-row-end: 5;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 75px 45px 80px 80px;
  padding: 30px 0px 0px 30px;
`;
export const EmpoloymentHeader = styled(Box)`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  display: flex;
  align-items: flex-end;
`;

export const EmpoloymentDesc = styled(Box)`
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;
  padding-top: 7px;
`;

export const EmpTypeBox = styled(Box)`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 3;
  grid-row-end: 4;
  padding-left: 25px;
`;

export const EmpoloymentSalaryBox = styled(Box)`
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 4;
  grid-row-end: 5;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
`;
export const SalaryFromBox = styled(Box)`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  padding: 25px;
`;

export const SalaryToBox = styled(Box)`
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
  padding: 25px;
`;

export const CurrencyBox = styled(Box)`
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 2;
  padding: 25px;
`;

export const HeaderJobDesc = styled(Box)`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 9;
  grid-row-end: 10;
  padding: 30px 0px 0px 30px;
  display: flex;
  align-items: flex-end;
`;

export const JobDescBox = styled(Box)`
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 11;
  grid-row-end: 12;
  padding: 0px 30px 30px 30px;
`;
export const HeaderLocation = styled(Box)`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 12;
  grid-row-end: 13;
  padding: 30px 0px 10px 30px;
  display: flex;
  align-items: flex-end;
`;
export const CityBox = styled(Box)`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 13;
  grid-row-end: 14;
  padding-left: 55px;
`;
export const StreetBox = styled(Box)`
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 13;
  grid-row-end: 14;
  padding-left: 35px;
`;

export const ButtonContainer = styled(Box)`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 16;
  grid-row-end: 17;
  padding-left: 35px;
  display: flex;
  align-items: center;
`;

export const ButtonWrapper = styled(Box)`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  width: 28px;
  height: 28px;
`;

export const MapBox = styled(Box)`
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 15;
  grid-row-end: 16;
  display: flex;
  justify-content: center;
  padding: 20px;
`;

export const RemoteContainer = styled(Box)`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 14;
  grid-row-end: 15;
  padding-left: 55px;
`;

export const StackFormContainer = styled(Box)`
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 8;
  grid-row-end: 9;
  padding: 30px 0px 0px 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;