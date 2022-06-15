import styled from "@emotion/styled";
import { Button, Checkbox, Container, FormControlLabel, TextField, ThemeProvider } from "@mui/material";
import React from "react";
import LockIcon from "@mui/icons-material/Lock";
import EmailIcon from "@mui/icons-material/Email";
import { theme } from "../../components/theme";
import { Wrapper, LabelContainer, ButtonContainer, LinkContainer, ResetLink } from "./styled";


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
