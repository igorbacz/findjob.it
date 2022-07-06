import * as React from "react";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import WorkIcon from "@mui/icons-material/Work";
import { Box, IconButton, Typography } from "@mui/material";
import { StyledSignInMenu } from "./StyledSignInMenu";
import { StyledLink } from "../styled";

export const SignInMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <Button id="demo-customized-button" variant="contained" disableElevation onClick={handleClick} endIcon={<KeyboardArrowDownIcon />}>
        <Typography variant="buttonFont"> Sign In</Typography>
      </Button>
      <StyledSignInMenu id="demo-customized-menu" anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={handleClose} disableRipple>
          <IconButton>
            <SupportAgentIcon />
          </IconButton>
          Sign in as a developer
        </MenuItem>
        <StyledLink to="signIn">
          <MenuItem onClick={handleClose} disableRipple>
            <IconButton>
              <WorkIcon />
            </IconButton>
            Sign in to Employer Panel
          </MenuItem>
        </StyledLink>
      </StyledSignInMenu>
    </Box>
  );
};
