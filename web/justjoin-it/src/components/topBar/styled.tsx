import styled from "@emotion/styled";

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
`;

export const LogoHeader = styled.h1`
  padding-right: 20px;
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
