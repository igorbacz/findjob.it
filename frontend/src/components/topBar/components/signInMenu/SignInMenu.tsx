import { Fragment, useState } from "react";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import WorkIcon from "@mui/icons-material/Work";
import { IconButton, Typography, useMediaQuery } from "@mui/material";
import { StyledSignInMenu } from "../StyledSignInMenu";
// import { theme } from "../../../../theme";
import { useNavigate } from "react-router-dom";

export const SignInMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const navigate = useNavigate();
  const handleClose = () => {
    navigate("/login");
    setAnchorEl(null);
  };
  // const isMatchMedium = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Fragment>
      <Button
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
        // size={isMatchMedium ? "small" : "medium"}
      >
        <Typography variant="buttonFont">Sign In</Typography>
      </Button>
      <StyledSignInMenu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={handleClose} disableRipple>
          <IconButton>
            <SupportAgentIcon />
          </IconButton>
          <Typography variant="buttonFont">Sign in as a developer</Typography>
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <IconButton>
            <WorkIcon />
          </IconButton>
          <Typography variant="buttonFont">Sign in to Employer Panel</Typography>
        </MenuItem>
      </StyledSignInMenu>
    </Fragment>
  );
};
