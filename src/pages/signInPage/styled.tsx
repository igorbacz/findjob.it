import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const Wrapper = styled(Box)`
  background-color: white;
  width: 350px;
  height: 450px;
  padding-bootom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transform: translate(-50%, -50%);
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 2px;
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%), 0 3px 1px -2px rgb(0 0 0 / 20%);
`;

export const TextBox = styled(Box)`
  text-align: center;
`;

export const Container = styled(Box)`
  padding: 25px 0px 25px 0px;
  width: 300px;
  background-color: white;
  display: flex;
  justify-content: center;
`;

export const LabelContainer = styled(Box)`
  display: flex;
  align-items: flex-end;
  position: relative;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const ButtonContainer = styled(Box)`
  width: 200px;
  margin-top: 30px;
`;

export const LinkContainer = styled(Box)`
  text-align: center;
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const ResetLink = styled.a`
  color: #039be5;
  text-decoration: none;
`;

export const HeaderLoginBox = styled(Box)`
  padding: 40px 20px;
`;

export const ErrorBox = styled(Box)`
  color: red;
  font-size: 0.7em;
`;