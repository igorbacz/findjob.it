import * as React from "react";
import Button from "@mui/material/Button";
import { Box, IconButton, Popover, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Header, HeaderBig, HeaderContainer, ButtonsContainer } from "../styled";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export const LocationMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <Button variant="outlined" color="secondary" onClick={handleClick} endIcon={<KeyboardArrowDownIcon />}>
        Location
      </Button>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Typography sx={{ p: 2 }}>
          <HeaderContainer>
            <HeaderBig>Location</HeaderBig>
            <IconButton color="secondary">
              <CloseIcon onClick={handleClose} />
            </IconButton>
          </HeaderContainer>
          <div>
            <Header>Top Poland</Header>
            <ButtonsContainer>
              <Button color="secondary" variant="outlined">
                Warszawa
              </Button>
              <Button color="secondary" variant="outlined">
                Kraków
              </Button>
              <Button color="secondary" variant="outlined">
                Wrocław
              </Button>
              <Button color="secondary" variant="outlined">
                Poznań
              </Button>
              <Button color="secondary" variant="outlined">
                Trójmiasto
              </Button>
              <Button color="secondary" variant="outlined">
                Śląsk
              </Button>
            </ButtonsContainer>
          </div>
          <div>
            <Header>Top World</Header>
            <ButtonsContainer>
              <Button color="secondary" variant="outlined">
                New York
              </Button>
              <Button color="secondary" variant="outlined">
                Sydney
              </Button>
              <Button color="secondary" variant="outlined">
                Berlin
              </Button>
              <Button color="secondary" variant="outlined">
                San Franciso
              </Button>
              <Button color="secondary" variant="outlined">
                London
              </Button>
            </ButtonsContainer>
          </div>
        </Typography>
      </Popover>
    </div>
  );
};
