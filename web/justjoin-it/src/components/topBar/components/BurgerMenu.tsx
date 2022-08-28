import { Fragment, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Backdrop, Box, IconButton, Modal } from "@mui/material";
import styled from "@emotion/styled";
import { BurgerMenuList } from "./BurgerMenuList";
import { BurgerHeader } from "./BurgerHeader";

export const BigBurgerMenuBox = styled(Box)`
  position: absolute;
  top: 0%;
  right: 0%;
  height: 100%;
  background-color: white;
  border-radius: 5px;
  transform: none;
`;
export const BurgerMenu = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Fragment>
      <IconButton onClick={handleOpen}>
        <MenuIcon />
      </IconButton>
      <Modal open={open} onClose={handleClose} BackdropComponent={Backdrop}>
        <BigBurgerMenuBox>
          <BurgerHeader />
          <BurgerMenuList />
        </BigBurgerMenuBox>
      </Modal>
    </Fragment>
  );
};
