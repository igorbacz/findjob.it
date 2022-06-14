import styled from "@emotion/styled";
import { AccountCircle } from "@mui/icons-material";
import { Box, Button, Checkbox, FormControlLabel, TextField, ThemeProvider } from "@mui/material";
import React from "react";
import LockIcon from "@mui/icons-material/Lock";
import EmailIcon from "@mui/icons-material/Email";
import { theme } from "../../components/theme";

export const Wrapper = styled.div`
  background-color: white;

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

export const Container = styled.div`
  width: 300px;
  background-color: white;
  display: flex;
  justify-content: center;
`;

export const LabelContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const ButtonContainer = styled.div`
  width: 200px;
  margin-top: 30px;
`;

export const LinkContainer = styled.div`
  text-align: right;
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const ResetLink = styled.a`
  color: #039be5;
  text-decoration: none;
`;

export const SignInPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Container>
          <h1>justjoin.it</h1>
        </Container>
        <LabelContainer>
          <EmailIcon />
          <TextField id="standard-password-input" label="Email" type="email" autoComplete="email" variant="standard" />
        </LabelContainer>
        <LabelContainer>
          <LockIcon />
          <TextField id="standard-password-input" label="Password" type="password" autoComplete="current-password" variant="standard" />
        </LabelContainer>
        <FormControlLabel control={<Checkbox color="primary" />} label="Remember me" />
        <ButtonContainer>
          <Button variant="contained" fullWidth>
            SIGN IN
          </Button>
        </ButtonContainer>
        <LinkContainer>
          <ResetLink href="">Forgot Password?</ResetLink>
        </LinkContainer>
      </Wrapper>
    </ThemeProvider>
  );
};
