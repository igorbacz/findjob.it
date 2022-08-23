import { Typography, IconButton } from "@mui/material";
import React, { useState } from "react";
import { HeaderContainer, Header } from "../../searchBar/styled";
import CloseIcon from "@mui/icons-material/Close";

export const BurgerHeader = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  return (
    <HeaderContainer>
      <Header>
        <Typography variant="subtitle4">MENU</Typography>
      </Header>
      <IconButton color="secondary">
        <CloseIcon onClick={() => setOpen(false)} />
      </IconButton>
    </HeaderContainer>
  );
};
