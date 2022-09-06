import { MenuItem, IconButton, useMediaQuery } from "@mui/material";
import { SignInBox, SignInButton } from "../styled";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import WorkIcon from "@mui/icons-material/Work";
import { theme } from "../../../theme";
import { useNavigate } from "react-router-dom";

export const SignInBurger = () => {
  const isMatchMedium = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/signin");
  };
  return (
    <SignInBox>
      {!isMatchMedium ? (
        <SignInButton>
          <MenuItem onClick={handleSubmit}>
            <IconButton color="primary">
              <SupportAgentIcon />
            </IconButton>
            Sign in as a developer
          </MenuItem>
        </SignInButton>
      ) : null}
      <SignInButton>
        <MenuItem onClick={handleSubmit}>
          <IconButton color="primary">
            <WorkIcon />
          </IconButton>
          Sign in to Employer Panel
        </MenuItem>
      </SignInButton>
    </SignInBox>
  );
};
