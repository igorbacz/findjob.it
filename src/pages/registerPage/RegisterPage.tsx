import { Box, Button, TextField, Typography } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import EmailIcon from "@mui/icons-material/Email";
import { Wrapper, LabelContainer, ButtonContainer, LinkContainer, ResetLink, HeaderLoginBox, ErrorBox } from "../signInPage/styled";
import { ChangeEvent, ErrorInfo, SyntheticEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "../../types/types";
import API_URL from "../../const/apiUrl";
import { ROUTES } from "../../routes/routesMap";
import apiClient from "../../service/api/apiClient";
import { response } from "express";

export const RegisterPage = (error: ErrorInfo) => {
  const [form, setForm] = useState(new User());
  const [errors, setErrors] = useState(new User());
  const navigate = useNavigate();
  const onClickToLoginPage = () => {
    navigate(ROUTES.login);
  };

  const handleChange = (e: ChangeEvent<{ value: string; name: string }>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const findErrors = () => {
    const { email, password }: User = form;
    const newErrors = new User();

    if (!email || email === "") {
      newErrors.email = "E-mail is required!";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "E-mail has incorrect format";
    }

    if (!password || password === "") {
      newErrors.password = "Password is required!";
    }
    return newErrors;
  };
  const registerUser = async (credentials: User) => {
    try {
      const response = await apiClient.postReq<any>("/authentication/register", credentials);
      navigate(ROUTES.home);
      return response.json();
    } catch (error) {
      if (response.status(409)) {
        let errorMessage = "User already exist. Please login.";
        return alert(errorMessage);
      }
      let errorMessage = "Authentication failed!";
      alert(errorMessage);
      console.log(error);
    }
  };

  const handleRegister = (e: SyntheticEvent): void => {
    e.preventDefault();
    const newErrors = findErrors();
    if (Object.values(newErrors).some((el) => el)) return setErrors(newErrors);
    registerUser(form);
    navigate(ROUTES.home);
  };

  return (
    <Wrapper>
      <HeaderLoginBox>
        <Box
          onClick={() => {
            navigate(ROUTES.home);
          }}
        >
          <Typography variant="H1Styled">findjob.it</Typography>
        </Box>
      </HeaderLoginBox>
      <form onSubmit={handleRegister}>
        <LabelContainer>
          <EmailIcon fontSize="large" />
          <TextField label="Email" name="email" onChange={handleChange} type="email" autoComplete="email" variant="standard" />
        </LabelContainer>
        {error && <ErrorBox>{errors.email}</ErrorBox>}
        <LabelContainer>
          <LockIcon fontSize="large" />
          <TextField label="Password" type="password" name="password" onChange={handleChange} autoComplete="current-password" variant="standard" />
        </LabelContainer>
        {error && <ErrorBox>{errors.password}</ErrorBox>}
        <LinkContainer>
          <ResetLink onClick={onClickToLoginPage}>Sign in</ResetLink>
        </LinkContainer>
        <ButtonContainer>
          <Button variant="contained" type="submit" onSubmit={handleRegister} fullWidth>
            REGISTER
          </Button>
        </ButtonContainer>
      </form>
    </Wrapper>
  );
};
