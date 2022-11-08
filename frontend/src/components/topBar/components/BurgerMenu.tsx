import { Fragment, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Backdrop, IconButton, Modal } from "@mui/material";
import { BurgerMenuList } from "./BurgerMenuList";
import { BurgerHeader } from "./BurgerHeader";
import { BigBurgerMenuBox } from "../styled";

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
