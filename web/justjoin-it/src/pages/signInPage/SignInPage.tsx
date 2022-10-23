import { Box, Button, TextField, Typography } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import EmailIcon from "@mui/icons-material/Email";
import { Wrapper, LabelContainer, ButtonContainer, LinkContainer, ResetLink, HeaderLoginBox, ErrorBox, TextBox } from "./styled";
import { StyledLink } from "../../components/topBar/styled";
import { ChangeEvent, ErrorInfo, SyntheticEvent, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "../../types/types";
import { useDispatch } from "react-redux";
import { login, logout } from "../../service/user/userSlice";
import { useSelector } from "react-redux";
import { userDataSelector } from "../../service/user/selectors";

export const SignInPage = (error: ErrorInfo) => {
  const [form, setForm] = useState(new User());
  const [errors, setErrors] = useState(new User());
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const userData: any = useSelector(userDataSelector);
  const isAuthenticated: any = userData.isAuthenticated;
  console.log(isAuthenticated);
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

  let navigate = useNavigate();

  const loginFunc = async () => {
    const response = await fetch("http://localhost:3001/api/login", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "access-control-allow-origin": "*",
        "Content-type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authentication failed!";
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        const userToken = data.token;
        localStorage.setItem("token", userToken);
        console.log(userToken);
        dispatch(login(form.email));
        navigate("/");
      })
      .catch((error: any) => {
        alert(error.message);
      });
  };

  const handleLogin = (e: SyntheticEvent): void => {
    e.preventDefault();
    const newErrors = findErrors();
    if (Object.values(newErrors).some((el) => el)) return setErrors(newErrors);

    loginFunc();
  };

  const handleLogout = (e: SyntheticEvent): void => {
    localStorage.clear();
    dispatch(logout());
    navigate("/");
  };

  return (
    <Wrapper>
      <HeaderLoginBox>
        <StyledLink to="/">
          <Typography variant="H1Styled">findjob.it</Typography>
        </StyledLink>
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
            <ResetLink href="/register">Don't have an account? Register</ResetLink>
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
};;
