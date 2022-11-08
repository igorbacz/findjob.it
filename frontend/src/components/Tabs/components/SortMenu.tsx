import * as React from "react";
import List from "@mui/material/List";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { Box } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useSearchParams } from "react-router-dom";
import { StyledButton } from "../styled";


const options = ["lowest salary", "latest", "highest salary"];

export default function SortMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const open = Boolean(anchorEl);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event: React.MouseEvent<HTMLElement>, index: number) => {
    setSelectedIndex(index);
    setAnchorEl(null);
    searchParams.set("sort", options[index]);
    setSearchParams(searchParams);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box>
      <List component="nav" aria-label="Device settings" sx={{ bgcolor: "background.paper" }}>
        <StyledButton
          variant="text"
          color="secondary"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClickListItem}
          endIcon={<KeyboardArrowDownIcon />}
        >
          sort by
        </StyledButton>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "lock-button",
          role: "listbox",
        }}
      >
        {options.map((option, index) => (
          <MenuItem key={option} selected={index === selectedIndex} onClick={(event) => handleMenuItemClick(event, index)}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}
