import * as React from "react";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import WorkIcon from "@mui/icons-material/Work";
import { IconButton } from "@mui/material";
import { StyledSignInMenu } from "./StyledSignInMenu";

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
    <div>
      <Button
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        Sign In
      </Button>
      <StyledSignInMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} disableRipple>
          <IconButton>
            <SupportAgentIcon />
          </IconButton>
          Sign in as a developer
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <IconButton>
            <WorkIcon />
          </IconButton>
          Sign in to Employer Panel
        </MenuItem>
      </StyledSignInMenu>
    </div>
  );
};
