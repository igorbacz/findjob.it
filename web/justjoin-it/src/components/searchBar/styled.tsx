import styled from "@emotion/styled";
import { Box, Button, IconButton, TextField } from "@mui/material";

export const Container = styled(Box)`
  display: flex;
  background-color: white;
  width: 100%;
  flex-wrap: nowrap;
  justify-content: space-between;
`;

export const ContainerSection = styled(Box)`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const Input = styled.input`
  display: flex;
  align-items: center;
  border: 2px solid #f6f4f4;
  height: 30px;
  border-radius: 50px;
  background-color: #f6f4f4;
  text-align: center;
  &:hover {
    border-color: rgb(232, 232, 232);
    background-color: rgb(232, 232, 232);
  }
`;

export const IconWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  padding: 5px 0px 5px 0px;
`;

export const IconText = styled.span`
  color: #757575;
  text-align: center;
`;

export const HeaderContainer = styled(Box)`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
`;

export const Header = styled(Box)`
  padding: 15px 15px 0px 35px;
  color: rgb(119, 119, 119);
`;

export const ButtonsContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
`;

export const ContextContainer = styled(Box)`
  padding: 20px 0px;
  border-top: 1px solid rgba(0, 0, 0, 0.12);
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
`;

export const ContextNestedContainer = styled(Box)`
  border-top: 1px solid rgba(0, 0, 0, 0.12);
  padding-top: 15px;
`;

export const StyledField = styled(TextField)`
  .MuiOutlinedInput-root {
    border-radius: 30px;
    height: 32px;
    width: 160px;
    margin-left: 10px;
  }
`;

export const ContainerRightSection = styled(Box)`
  display: flex;
  align-items: center;
`;

export const ButtonFocus = styled(Button)`
  &:focus {
    color: #ff4081;
    border: 1px solid #ff4081;
    background: rgba(255, 64, 129, 0.08);
  }
`;

export const StyledModalBox = styled(Box)`
  position: absolute;
  padding: 20px 25px 20px 25px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  background-color: white;
  border-radius: 5px;
`;

export const StyledIconButton = styled(IconButton)`
  width: 35px;
  min-width: 35px;
  height: 35px;
  border-radius: 50%;
  padding: 0px;
  line-height: 35px;
  color: white;
  &:hover {
    box-shadow: rgb(228 232 240) 0px 0px 0px 5px;
    color: rgb(255, 255, 255);
    fill: rgb(255, 255, 255);
  }
`;

export const AllBox = styled(Box)`
  text-transform: none;
  width: 36px;
  min-width: 36px;
  height: 36px;
  border-radius: 50%;
  padding: 0px;
  line-height: 39px;
  color: rgb(255, 255, 255);
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    box-shadow: rgb(228 232 240) 0px 0px 0px 5px;
    color: rgb(255, 255, 255);
    fill: rgb(255, 255, 255);
  }
  margin: 10px 10px 10px 10px;
`;

export const SearchRespWrapper = styled(Box)`
  display: flex;
  align-items: center;
  min-width: 100%;
`;