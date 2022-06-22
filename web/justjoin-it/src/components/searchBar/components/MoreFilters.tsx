import * as React from "react";
import Button from "@mui/material/Button";
import { Backdrop, Box, IconButton, Modal, Slider } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import {
  HeaderContainer,
  StyledModalBox,
  ButtonsContainer,
  Header200,
  HeaderMedium,
  ContextNestedContainer,
  ButtonFocus,
  ContextContainer,
} from "../styled";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";

export const MoreFilters = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [value, setValue] = React.useState<number[]>([0, 100000]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  const [select, setSelected] = React.useState<string | undefined>(""); //NIE DZIAŁA

  return (
    <Box>
      <Button variant="outlined" color="secondary" startIcon={<ManageSearchIcon />} onClick={handleClick}>
        More filters
      </Button>
      <Modal open={open} onClose={handleClose} BackdropComponent={Backdrop}>
        <StyledModalBox>
          <HeaderContainer>
            <Header200>More Filters</Header200>
            <IconButton color="secondary">
              <CloseIcon onClick={handleClose} />
            </IconButton>
          </HeaderContainer>
          <ContextContainer>
            <HeaderMedium>Salary expectations?</HeaderMedium>
            <Slider getAriaLabel={() => "Temperature range"} value={value} onChange={handleChange} size="small" />
            <ButtonsContainer>
              <Button variant="outlined" color="secondary">
                Min. amount{" "}
              </Button>
              <Button variant="outlined" color="secondary">
                Max. amount
              </Button>
            </ButtonsContainer>
            <ContextNestedContainer>
              <HeaderMedium>Employment Type</HeaderMedium>
              <ButtonsContainer>
                <ButtonFocus autoFocus variant="outlined" color="secondary" value={select}>
                  All
                </ButtonFocus>
                <ButtonFocus variant="outlined" color="secondary">
                  B2B
                </ButtonFocus>
                <ButtonFocus variant="outlined" color="secondary">
                  Permanent
                </ButtonFocus>
                <ButtonFocus variant="outlined" color="secondary">
                  Mandate Contract
                </ButtonFocus>
              </ButtonsContainer>
            </ContextNestedContainer>
            <ContextNestedContainer>
              <HeaderMedium>Seniority</HeaderMedium>
              <ButtonsContainer>
                <ButtonFocus variant="outlined" color="secondary" value={select}>
                  All
                </ButtonFocus>
                <ButtonFocus variant="outlined" color="secondary">
                  Junior
                </ButtonFocus>
                <ButtonFocus variant="outlined" color="secondary">
                  Mid
                </ButtonFocus>
                <ButtonFocus variant="outlined" color="secondary">
                  Senior
                </ButtonFocus>
              </ButtonsContainer>
            </ContextNestedContainer>
          </ContextContainer>
          <ButtonsContainer>
            <Button variant="outlined" color="secondary">
              Clear filters
            </Button>
            <Button variant="contained" color="primary">
              Show offers
            </Button>
          </ButtonsContainer>
        </StyledModalBox>
      </Modal>
    </Box>
  );
};
