import React, { Fragment } from "react";
import Button from "@mui/material/Button";
import { Box, IconButton, Popover, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Header, HeaderContainer, ButtonsContainer } from "../styled";
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

  return (
    <Box>
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
        <Box sx={{ p: 2 }}>
          <HeaderContainer>
            <Typography variant="H5Styled">Location</Typography>
            <IconButton color="secondary">
              <CloseIcon onClick={handleClose} />
            </IconButton>
          </HeaderContainer>
          <Box>
            <Header>
              <Typography variant="subtitle4">Top Poland</Typography>
            </Header>
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
          </Box>
          <Box>
            <Header>
              <Typography variant="subtitle4">Top World</Typography>
            </Header>
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
          </Box>
        </Box>
      </Popover>
    </Box>
  );
};
