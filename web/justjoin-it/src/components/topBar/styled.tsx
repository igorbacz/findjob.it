import styled from "@emotion/styled";
import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

export const Container = styled(Box)`
  display: flex;
  border-bottom: 1px solid #e4e8f0;
  height: 70px;
  padding-left: 20px;
  padding-right: 20px;
  background-color: white;
`;

export const LogoWrapper = styled(Box)`
  display: flex;
  align-items: center;
  flex: 1;
  gap: 35px;
`;

export const LogoParagraph = styled.p`
  padding-right: 20px;
`;

export const Items = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 16px;
`;

export const Item = styled(Box)`
  margin: 16px;
  display: flex;
  color: #99a1ab;
  cursor: pointer;
  letter-spacing: 0;
  &:active {
    color: #ff4081;
  }
  &:hover {
    color: #e78eac;
  }
`;

export const ButtonsWrapper = styled(Box)`
  display: flex;
  align-items: center;
`;

export const ButtonSignIn = styled(Box)`
  margin-left: 10px;
  margin-right: 10px;
`;

export const ButtonCurrency = styled(Box)`
  border-left: 1px solid #e4e8f0;
  border-right: 1px solid #e4e8f0;
`;

export const SignInBox = styled(Box)`
  padding-left: 24px;
  padding-right: 20px;
  padding-bottom: 16px;
`;

export const SignInButton = styled(Box)`
  border: 1px solid black;
  margin: 6px 10px 6px 10px;
`;

export const SocialBox = styled(Box)`
  display: flex;
  justify-content: space-around;
  padding: 10px 10px 10px 10px;
`;

export const BurgerButton = styled(Button)`
  border-radius: 0px;
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  padding: 3px 3px 3px 20px;
`;

export const SmallBox = styled(Box)`
  border-top: 4px solid #f3f6f8;
`;

export const BurgerBox = styled(Box)`
  position: absolute;
  display: flex;
  transform: translate(-50%, -50%);
  background-color: white;
  width: 300;
  height: 100%;
  background-color: white;
  border: 2px solid #000;
  boxshadow: 24;
`;

export const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: inherit;
`;