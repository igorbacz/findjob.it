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
  grid-row-start: 6;
  grid-row-end: 7;
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

export const InfoBox = styled(Box)`
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 3;
  grid-row-end: 4;
  padding: 30px 0px 0px 30px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 40px 80px;
`;
export const OfferTitleBox = styled(Box)`
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;
  padding: 20px;
`;
export const OfferExpBox = styled(Box)`
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 3;
  padding: 20px;
`;

export const HeaderInfoBox = styled(Box)`
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
`;

export const EmpoloymentBox = styled(Box)`
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 4;
  grid-row-end: 5;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  padding: 30px 0px 0px 30px;
`;
export const EmpoloymentHeader = styled(Box)`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
`;
export const EmpoloymentDesc = styled(Box)`
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;
`;

export const EmpTypeBox = styled(Box)`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 3;
  grid-row-end: 4;
`;

export const EmpoloymentSalaryBox = styled(Box)`
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 4;
  grid-row-end: 5;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
`;
export const SalaryFromBox = styled(Box)`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  padding: 25px;
`;

export const SalaryToBox = styled(Box)`
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
  padding: 25px;
`;

export const CurrencyBox = styled(Box)`
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 2;
  padding: 25px;
`;

const companyTypes = [
  {
    value: "Startup",
    label: "Startup",
  },
  {
    value: "Software House",
    label: "Software House",
  },
  {
    value: "E-commerce",
    label: "E-commerce",
  },
  {
    value: "Corporation",
    label: "Corporation",
  },
  {
    value: "Other",
    label: "Other",
  },
];

const companyInustries = [
  {
    value: "Fintech",
    label: "Fintech",
  },
  {
    value: "Blockchain",
    label: "Blockchain",
  },
  {
    value: "Medicine",
    label: "Medicine",
  },
  {
    value: "Military",
    label: "Military",
  },
  {
    value: "Martech",
    label: "Martech",
  },
  {
    value: "IoT",
    label: "IoT",
  },
  {
    value: "Logistic",
    label: "Logistic",
  },
  {
    value: "Beauty",
    label: "Beauty",
  },
  {
    value: "Travel",
    label: "Travel",
  },
  {
    value: "Other",
    label: "Other",
  },
];

const exp = [
  {
    value: "Junior",
    label: "Junior",
  },
  {
    value: "Mid",
    label: "Mid",
  },
  {
    value: "Mandate Contract",
    label: "Senior",
  },
];

const employmentTypes = [
  {
    value: "B2B",
    label: "B2B",
  },
  {
    value: "Permanent",
    label: "Permanent",
  },
  {
    value: "Mandate Contract",
    label: "Mandate Contract",
  },
];

const currency = [
  {
    value: "PLN",
    label: "PLN",
  },
  {
    value: "EUR",
    label: "EUR",
  },
  {
    value: "USD",
    label: "USD",
  },
  {
    value: "GBP",
    label: "GBP",
  },
  {
    value: "CHF",
    label: "CHF",
  },
];

export const OfferForm = () => {
  const [choice, setChoice] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChoice(event.target.value);
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
        <TextField required label="Short company name" variant="standard" />

        <TextField required label="StandCompany size" variant="standard" />

        <TextField required label="Company website" variant="standard" />
      </InpputsBox>
      <InpputsSecondBox>
        <TextField
          id="standard-select-currency-native"
          select
          label="Company type"
          value={choice}
          onChange={handleChange}
          SelectProps={{
            native: true,
          }}
          // helperText="Select company type"
          variant="standard"
        >
          {companyTypes.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
        <TextField
          id="standard-select-currency-native"
          select
          label="Company industry"
          value={choice}
          onChange={handleChange}
          SelectProps={{
            native: true,
          }}
          // helperText="Select company industry"
          variant="standard"
        >
          {companyInustries.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
      </InpputsSecondBox>
      <InfoBox>
        <Typography variant="subtitle2">Position info</Typography>
        <OfferTitleBox>
          <TextField required fullWidth label="Offer title" variant="standard" />
        </OfferTitleBox>
        <OfferExpBox>
          <TextField
            fullWidth
            id="standard-select-currency-native"
            select
            label="Company type"
            value={choice}
            onChange={handleChange}
            SelectProps={{
              native: true,
            }}
            // helperText="Select company type"
            variant="standard"
          >
            {exp.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
        </OfferExpBox>
      </InfoBox>
      <EmpoloymentBox>
        <EmpoloymentHeader>
          <Typography variant="subtitle2">Employment type</Typography>
        </EmpoloymentHeader>
        <EmpoloymentDesc>
          <Typography>How much the candidate will earn monthly? You can add two employment types.</Typography>{" "}
        </EmpoloymentDesc>
        <EmpTypeBox>
          <TextField
            id="standard-select-currency-native"
            select
            label="Employment type"
            value={choice}
            onChange={handleChange}
            SelectProps={{
              native: true,
            }}
            // helperText="Select company type"
            variant="standard"
          >
            {employmentTypes.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
        </EmpTypeBox>
        <EmpoloymentSalaryBox>
          <SalaryFromBox>
            <TextField fullWidth label="Monthly salary from (gross)" variant="standard" />
          </SalaryFromBox>
          <SalaryToBox>
            <TextField fullWidth label="Monthly salary to (gross)" variant="standard" />
          </SalaryToBox>
          <CurrencyBox>
            <TextField
              fullWidth
              id="standard-select-currency-native"
              select
              label="Currency"
              value={choice}
              onChange={handleChange}
              SelectProps={{
                native: true,
              }}
              // helperText="Select company type"
              variant="standard"
            >
              {currency.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>
          </CurrencyBox>
        </EmpoloymentSalaryBox>
      </EmpoloymentBox>
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
