import { MenuItem, IconButton, useMediaQuery } from "@mui/material";
import React from "react";
import { theme } from "../../../theme";
import { SignInBox, SignInButton } from "../styled";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import WorkIcon from "@mui/icons-material/Work";

export const SignInBurger = () => {
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

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
      {!isMatch ? (
        <SignInButton>
          <MenuItem>
            <IconButton color="primary">
              <WorkIcon />
            </IconButton>
            Sign in to Employer Panel
          </MenuItem>
        </SignInButton>
      ) : null}
    </SignInBox>
  );
};
