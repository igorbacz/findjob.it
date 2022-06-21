import * as React from "react";
import Button from "@mui/material/Button";
import { Backdrop, Box, IconButton, Modal, Popover, Slider, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Header, HeaderBig, HeaderContainer, ButtonsContainer, Header200, HeaderMedium, ContextNestedContainer } from "../styled";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import styled from "@emotion/styled";

export const ContextContainer = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.12);
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
`;
const style = {
  position: "absolute" as "absolute",
  padding: "20px 25px 20px 25px",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "5px",
};

export const DefaultButton = styled(Button)`
  &:focus {
    color: #ff4081;
    border: 1px solid #ff4081;
    background: rgba(255, 64, 129, 0.08);
  }
`;

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
    <div>
      <Button variant="outlined" color="secondary" startIcon={<ManageSearchIcon />} onClick={handleClick}>
        More filters
      </Button>
      <Modal open={open} onClose={handleClose} BackdropComponent={Backdrop}>
        <Box sx={style}>
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
                <DefaultButton autoFocus variant="outlined" color="secondary" value={select}>
                  All
                </DefaultButton>
                <DefaultButton variant="outlined" color="secondary">
                  B2B
                </DefaultButton>
                <DefaultButton variant="outlined" color="secondary">
                  Permanent
                </DefaultButton>
                <DefaultButton variant="outlined" color="secondary">
                  Mandate Contract
                </DefaultButton>
              </ButtonsContainer>
            </ContextNestedContainer>
            <ContextNestedContainer>
              <HeaderMedium>Seniority</HeaderMedium>
              <ButtonsContainer>
                <DefaultButton variant="outlined" color="secondary" value={select}>
                  All
                </DefaultButton>
                <DefaultButton variant="outlined" color="secondary">
                  Junior
                </DefaultButton>
                <DefaultButton variant="outlined" color="secondary">
                  Mid
                </DefaultButton>
                <DefaultButton variant="outlined" color="secondary">
                  Senior
                </DefaultButton>
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
        </Box>
      </Modal>
    </div>
  );
};
