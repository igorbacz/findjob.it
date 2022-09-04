import { Fragment, useState } from "react";
import Button from "@mui/material/Button";
import { Backdrop, IconButton, Modal, Slider, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { HeaderContainer, StyledModalBox, ButtonsContainer, ContextNestedContainer, ButtonFocus, ContextContainer } from "../styled";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";

export const MoreFilters = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [value, setValue] = useState<number[]>([0, 100000]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  const [select, setSelected] = useState<string | undefined>("");

  return (
    <Fragment>
      <Button variant="outlined" color="secondary" startIcon={<ManageSearchIcon />} onClick={handleClick}>
        <Typography variant="buttonFont"> More filters</Typography>
      </Button>
      <Modal open={open} onClose={handleClose} BackdropComponent={Backdrop}>
        <StyledModalBox>
          <HeaderContainer>
            <Typography variant="subtitleStrong">More Filters</Typography>
            <IconButton color="secondary" onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </HeaderContainer>
          <ContextContainer>
            <Typography variant="subtitle6">Salary expectations?</Typography>
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
              <Typography variant="subtitle6">Employment Type</Typography>
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
              <Typography variant="subtitle6">Seniority</Typography>
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
    </Fragment>
  );
};
