import { Button, TextField, Typography } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import EmailIcon from "@mui/icons-material/Email";
import { Wrapper, LabelContainer, ButtonContainer, LinkContainer, ResetLink, HeaderLoginBox, ErrorBox } from "./styled";
import { StyledLink } from "../../components/topBar/styled";
import { ChangeEvent, ErrorInfo, SyntheticEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "../../types/types";

export const SignInPage = (error: ErrorInfo) => {
  const [form, setForm] = useState(new User());
  const [errors, setErrors] = useState(new User());

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
    let result = await fetch("http://localhost:4000/api/login", {
      method: "post",
      body: JSON.stringify({ email: form.email, password: form.password }),
      headers: {
        "access-control-allow-origin": "*",
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    console.log(JSON.stringify({ email: form.email, password: form.password }));
    result = await result.json();

    if (result.ok) {
      localStorage.setItem("token", JSON.stringify(result.body));
      navigate("/");
      console.log(form);
    }
  };

  const handleLogin = (e: SyntheticEvent): void => {
    e.preventDefault();
    const newErrors = findErrors();
    if (Object.values(newErrors).some((el) => el)) return setErrors(newErrors);

    login();
  };

  return (
    <Wrapper>
      <HeaderLoginBox>
        <StyledLink to="/">
          <Typography variant="H1Styled">findjob.it</Typography>
        </StyledLink>
      </HeaderLoginBox>
      <form onSubmit={handleLogin}>
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
          <ResetLink href="/register">Don't have an account? Register</ResetLink>
        </LinkContainer>
        <ButtonContainer>
          <Button variant="contained" type="submit" onSubmit={handleLogin} fullWidth>
            SIGN IN
          </Button>
        </ButtonContainer>
      </form>
    </Wrapper>
  );
};
