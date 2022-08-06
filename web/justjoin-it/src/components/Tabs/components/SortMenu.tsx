import { useState } from "react";
import Button from "@mui/material/Button";
import { Box, Menu, MenuItem } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export const SortMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <Button variant="text" color="secondary" onClick={handleClick} endIcon={<KeyboardArrowDownIcon />}>
        latest
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>latest</MenuItem>
        <MenuItem onClick={handleClose}>highest salary</MenuItem>
        <MenuItem onClick={handleClose}>lowest salary</MenuItem>
      </Menu>
    </Box>
  );
};
