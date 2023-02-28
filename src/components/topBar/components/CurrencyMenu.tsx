import { Fragment, useState } from "react";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { StyledCurrencyMenu } from "./StyledCurrencyMenu";
import { Typography } from "@mui/material";

export const CurrencyMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Fragment>
      <Button
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        disableElevation
        color="secondary"
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        <Typography variant="buttonFont">PLN</Typography>
      </Button>
      <StyledCurrencyMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} disableRipple>
          PLN
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          EUR
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          USD
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          GBP
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          CHF
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          Default
        </MenuItem>
      </StyledCurrencyMenu>
    </Fragment>
  );
};
