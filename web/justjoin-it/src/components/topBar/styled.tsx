import styled from "@emotion/styled";
import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  border-bottom: 1px solid #e4e8f0;
  height: 70px;
  padding-left: 20px;
  padding-right: 20px;
  background-color: white;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  gap: 35px;
`;

export const LogoParagraph = styled.p`
  padding-right: 20px;
`;

export const Items = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 16px;
`;

export const Item = styled.h4`
  margin: 16px;
  display: flex;
  color: #99a1ab;
  cursor: pointer;
  font-weight: 400;
  letter-spacing: 0;
  &:active {
    color: #ff4081;
  }
  &:hover {
    color: #e78eac;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ButtonSignIn = styled.div`
  margin-left: 10px;
  margin-right: 10px;
`;

export const ButtonCurrency = styled.div`
  border-left: 1px solid #e4e8f0;
  border-right: 1px solid #e4e8f0;
`;

export const SignInBox = styled.div`
  padding-left: 24px;
  padding-right: 20px;
  padding-bottom: 16px;
`;

export const SignInButton = styled.div`
  border: 1px solid black;
  margin: 6px 10px 6px 10px;
`;

export const SocialBox = styled.div`
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