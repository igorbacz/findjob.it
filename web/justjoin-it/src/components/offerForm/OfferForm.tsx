import { Button, IconButton, TextField, Typography } from "@mui/material";
import { companyInustries, companyTypes, currency, employmentTypes, exp, stackIcons } from "../../data";
import { IconContainer } from "../searchBar/components/IconContainer";
import {
  ButtonBox,
  ButtonContainer,
  CityBox,
  CurrencyBox,
  EmpoloymentBox,
  EmpoloymentDesc,
  EmpoloymentHeader,
  EmpoloymentSalaryBox,
  EmpTypeBox,
  FormContainer,
  HeaderForm,
  HeaderJobDesc,
  HeaderLocation,
  HeaderStack,
  InfoBox,
  InpputsBox,
  InpputsSecondBox,
  JobDescBox,
  JobDescToggle,
  OfferExpBox,
  OfferTitleBox,
  PhotoBox,
  PhotoForm,
  SalaryFromBox,
  SalaryToBox,
  StackSection,
  StreetBox,
} from "./styled";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { useState } from "react";
import ToggleButtonsMultiple from "./ToggleButtons1";

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
      <HeaderJobDesc>
        <Typography variant="subtitle2">Job description</Typography>
      </HeaderJobDesc>
      <JobDescToggle>
        <ToggleButtonsMultiple />
      </JobDescToggle>
      <JobDescBox>
        <TextField id="outlined-multiline-static" fullWidth multiline rows={10} />
      </JobDescBox>
      <HeaderLocation>
        <Typography variant="subtitle2">Choose your location</Typography>
      </HeaderLocation>
      <CityBox>
        <TextField fullWidth required label="Office city" variant="standard" />
      </CityBox>
      <StreetBox>
        <TextField fullWidth required label="Office street" variant="standard" />
      </StreetBox>
      <ButtonContainer>
        <Button variant="contained" size="large">
          NEXT STEP
        </Button>
      </ButtonContainer>
    </FormContainer>
  );
};
