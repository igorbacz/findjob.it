import { Box, Button, TextField, Typography } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import EmailIcon from "@mui/icons-material/Email";
import { Wrapper, LabelContainer, ButtonContainer, LinkContainer, ResetLink, HeaderLoginBox, ErrorBox, TextBox } from "./styled";
import { ChangeEvent, ErrorInfo, SyntheticEvent, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "../../types/types";
import { useDispatch } from "react-redux";
import { login, logout } from "../../service/user/userSlice";
import { useSelector } from "react-redux";
import { isAuthenticatedSelector } from "../../service/user/selectors";
import apiClient from "../../service/api/apiClient";
import { ROUTES } from "../../routes/routesMap";

export const SignInPage = (error: ErrorInfo) => {
  const [form, setForm] = useState(new User());
  const [errors, setErrors] = useState(new User());
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onClickToRegisterPage = () => {
    navigate(ROUTES.register);
  };

  const isAuthenticated = useSelector(isAuthenticatedSelector);
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

  const loginUser = async (credentials: User) => {
    try {
      const response = await apiClient.postReq<any>("/authentication/login", credentials);
      const cookie = response.headers.get("Set-Cookie");
      document.cookie = cookie;
      dispatch(login(credentials));
      navigate(ROUTES.home);
      return response.json();
    } catch (error) {
      const errorMessage = "Authentication failed!";
      alert(errorMessage);
      console.log(error);
    }
  };

  const handleLogin = async (e: SyntheticEvent) => {
    e.preventDefault();
    const newErrors = findErrors();
    if (Object.values(newErrors).some((el) => el)) return setErrors(newErrors);
    loginUser(form);
  };

  const handleLogout = async (e: SyntheticEvent): Promise<any> => {
    dispatch(logout());
    navigate(ROUTES.home);
    //TODO logout post request and get  empty cookie
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
      {isAuthenticated ? (
        <Box>
          <TextBox>
            <Typography>You are already logged</Typography>
          </TextBox>
          <ButtonContainer>
            <Button variant="contained" onClick={handleLogout} fullWidth>
              LOGOUT
            </Button>
          </ButtonContainer>
        </Box>
      ) : (
        <form onSubmit={handleLogin}>
          <LabelContainer>
            <EmailIcon fontSize="large" />
            <TextField label="Email" name="email" onChange={handleChange} type="email" autoComplete="email" variant="standard" ref={emailInputRef} />
          </LabelContainer>
          {error && <ErrorBox>{errors.email}</ErrorBox>}
          <LabelContainer>
            <LockIcon fontSize="large" />
            <TextField
              label="Password"
              type="password"
              name="password"
              onChange={handleChange}
              autoComplete="current-password"
              variant="standard"
              ref={passwordInputRef}
            />
          </LabelContainer>
          {error && <ErrorBox>{errors.password}</ErrorBox>}
          <LinkContainer>
            <ResetLink onClick={onClickToRegisterPage}>Don't have an account? Register</ResetLink>
          </LinkContainer>
          <ButtonContainer>
            <Button variant="contained" type="submit" onSubmit={handleLogin} fullWidth>
              SIGN IN
            </Button>
          </ButtonContainer>
        </form>
      )}
    </Wrapper>
  );
};;;
