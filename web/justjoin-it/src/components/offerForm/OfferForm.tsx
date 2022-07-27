import styled from "@emotion/styled";
import { Box, IconButton, TextField, Typography } from "@mui/material";
import { stackIcons } from "../../data";
import { IconContainer } from "../searchBar/components/IconContainer";
import { FormContainer } from "./styled";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { useState } from "react";

export const HeaderForm = styled(Box)`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  padding: 30px 0px 0px 30px;
`;

export const PhotoForm = styled(Box)`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PhotoBox = styled(Box)`
  // display: flex;
  // justify-content: center;
`;

export const HeaderStack = styled(Box)`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 4;
  grid-row-end: 5;
  padding: 30px 0px 0px 30px;
`;

export const StackSection = styled(Box)`
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 5;
  grid-row-end: 6;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const ButtonBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledIconButton = styled(IconButton)`
  &.MuiButtonBase-root {
    &:hover {
      background-color: white;

      //NIE DZIAŁA
    }
  }
`;

export const InpputsBox = styled(Box)`
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 25px;
`;

export const InpputsSecondBox = styled(Box)`
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 3;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 25px;
`;

const currencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
  },
];

export const OfferForm = () => {
  const [currency, setCurrency] = useState("EUR");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrency(event.target.value);
  };
  return (
    <FormContainer>
      <HeaderForm>
        <Typography variant="subtitle2">About company</Typography>
      </HeaderForm>
      <PhotoForm>
        <PhotoBox>
          <IconButton>
            <ButtonBox>
              <AddAPhotoIcon fontSize="large" />
              <Typography variant="subtitle5">Upload Logo*</Typography>
            </ButtonBox>
          </IconButton>
        </PhotoBox>
      </PhotoForm>
      <InpputsBox>
        <TextField label="Short company name*" variant="standard" />

        <TextField label="StandCompany size*" variant="standard" />

        <TextField label="Company website" variant="standard" />
      </InpputsBox>
      <InpputsSecondBox>
        <TextField
          id="outlined-select-currency-native"
          select
          label="Native select"
          value={currency}
          onChange={handleChange}
          SelectProps={{
            native: true,
          }}
          helperText="Please select your currency"
        ></TextField>
        <TextField
          id="outlined-select-currency-native"
          select
          label="Native select"
          value={currency}
          onChange={handleChange}
          SelectProps={{
            native: true,
          }}
          helperText="Please select your currency"
        ></TextField>
      </InpputsSecondBox>
      <HeaderStack>
        <Typography variant="subtitle2">Main technology</Typography>
      </HeaderStack>
      <StackSection>
        {stackIcons.map((icon) => (
          <IconContainer key={icon._id} logo={icon.logo} stack={icon.stack} background={icon.background} />
        ))}
      </StackSection>
    </FormContainer>
  );
};
