import { Box, Button, TextField, Typography } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import EmailIcon from "@mui/icons-material/Email";
import { Wrapper, LabelContainer, ButtonContainer, LinkContainer, ResetLink, HeaderLoginBox, ErrorBox } from "../signInPage/styled";
import { ChangeEvent, ErrorInfo, SyntheticEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "../../types/types";

export const RegisterPage = (error: ErrorInfo) => {
  const [form, setForm] = useState(new User());
  const [errors, setErrors] = useState(new User());
  const navigate = useNavigate();
  const onClickToLoginPage = () => {
    navigate("/login");
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

  const Register = async () => {
    const response = await fetch("http://localhost:3000/authentication/register", {
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
        }
        if (res.status === 409) {
          alert("User Already Exist. Please Login.");
          navigate("/login");
        } else {
          return res.json().then(() => {
            alert("Authentication failed!");
            let errorMessage = "Authentication failed!";
            throw new Error(errorMessage);
          });
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  const handleRegister = (e: SyntheticEvent): void => {
    e.preventDefault();
    const newErrors = findErrors();
    if (Object.values(newErrors).some((el) => el)) return setErrors(newErrors);
    Register();
    navigate("/");
  };

  return (
    <Wrapper>
      <HeaderLoginBox>
        <Box
          onClick={() => {
            navigate("/");
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
