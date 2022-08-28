import { Button, Checkbox, FormControlLabel, TextField, Typography } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import EmailIcon from "@mui/icons-material/Email";
import { Wrapper, LabelContainer, ButtonContainer, LinkContainer, ResetLink, HeaderLoginBox } from "./styled";
import { StyledLink } from "../../components/topBar/styled";

export const SignInPage = () => {
  return (
    <Wrapper>
      <HeaderLoginBox>
        <StyledLink to="/">
          <Typography variant="H1Styled">findjob.it</Typography>
        </StyledLink>
      </HeaderLoginBox>
      <LabelContainer>
        <EmailIcon fontSize="large" />
        <TextField label="Email" type="email" autoComplete="email" variant="standard" />
      </LabelContainer>
      <LabelContainer>
        <LockIcon fontSize="large" />
        <TextField label="Password" type="password" autoComplete="current-password" variant="standard" />
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
  );
};
