import { Fragment, useState } from "react";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import { StyledCurrencyMenu } from "../../topBar/components/StyledCurrencyMenu";
import { IconMenuItem } from "./IconMenuItem";
import { stackIcons } from "../../../data";

export const TechMenu = () => {
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
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        disableElevation
        color="secondary"
        variant="outlined"
        onClick={handleClick}
      >
        <Typography variant="buttonFont">Tech</Typography>
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
        {stackIcons.map((icon) => (
          <IconMenuItem key={icon._id} logo={icon.logo} stack={icon.stack} background={icon.background} />
        ))}
      </StyledCurrencyMenu>
    </Fragment>
  );
};
