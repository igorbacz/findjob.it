import { Box, Button, TextField, Typography } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import EmailIcon from "@mui/icons-material/Email";
import { Wrapper, LabelContainer, ButtonContainer, LinkContainer, ResetLink, HeaderLoginBox, ErrorBox } from "./styled";
import { StyledLink } from "../../components/topBar/styled";
import { ChangeEvent, ErrorInfo, SyntheticEvent, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "../../types/types";

export const SignInPage = (error: ErrorInfo) => {
  const [form, setForm] = useState(new User());
  const [errors, setErrors] = useState(new User());
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const userToken = localStorage.getItem("token");

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

  const login = async () => {
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
          navigate("/");
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
        console.log(data);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const handleLogin = (e: SyntheticEvent): void => {
    e.preventDefault();
    const newErrors = findErrors();
    if (Object.values(newErrors).some((el) => el)) return setErrors(newErrors);

    login();
  };

  const handleLogout = (e: SyntheticEvent): void => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <Wrapper>
      <HeaderLoginBox>
        <StyledLink to="/">
          <Typography variant="H1Styled">findjob.it</Typography>
        </StyledLink>
      </HeaderLoginBox>
      {userToken ? (
        <Box>
          <Typography>You are already logged</Typography>
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
};
