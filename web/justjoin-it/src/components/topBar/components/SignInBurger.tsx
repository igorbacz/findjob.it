import { MenuItem, IconButton, useMediaQuery } from "@mui/material";
import { SignInBox, SignInButton } from "../styled";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import WorkIcon from "@mui/icons-material/Work";
import { theme } from "../../../theme";

export const SignInBurger = () => {
  const isMatchMedium = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <SignInBox>
      <SignInButton>
        <MenuItem>
          <IconButton color="primary">
            <SupportAgentIcon />
          </IconButton>
          Sign in as a developer
        </MenuItem>
      </SignInButton>
      {!isMatchMedium ? (
        <SignInButton>
          <MenuItem>
            <IconButton color="primary" href="/signin">
              <WorkIcon />
            </IconButton>
            Sign in to Employer Panel
          </MenuItem>
        </SignInButton>
      ) : null}
    </SignInBox>
  );
};
