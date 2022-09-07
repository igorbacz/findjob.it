import { Button, FormControlLabel, FormLabel, Radio, RadioGroup, TextField, Typography } from "@mui/material";
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
  RemoteContainer,
  SalaryFromBox,
  SalaryToBox,
  StackSection,
  StreetBox,
  MapBox,
} from "./styled";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { ChangeEvent, useState } from "react";
import ToggleButtonsMultiple from "./ToggleButtons";
import styled from "@emotion/styled";
import { OpenStreetMiniMap } from "./OpenStreetMiniMap";
import { BigOfferDetails } from "../../types/types";

export const OfferForm = () => {
  const [choice, setChoice] = useState("");
  const handleChange = (e: ChangeEvent<{ value: string | any; name: string }>) => {
    setChoice(e.target.value);
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const [form, setForm] = useState(new BigOfferDetails());

  const handleChangeForm = (e: ChangeEvent<{ value: string | number; name: string }>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const postOffer = () => {
    console.log(form);
  };

  const handlePostOffer = (e: any): void => {
    e.preventDefault();
    postOffer();
  };

  //TODO _id, dateAdded

  return (
    <form onSubmit={handlePostOffer}>
      <FormContainer>
        <HeaderForm>
          <Typography variant="subtitle2">About company</Typography>
        </HeaderForm>
        <PhotoForm>
          <PhotoBox>
            <ButtonBox>
              <AddAPhotoIcon fontSize="large" />
              <TextField required label="Logo URL" variant="standard" name="logo" onChange={handleChangeForm} />
            </ButtonBox>
          </PhotoBox>
        </PhotoForm>
        <InpputsBox>
          <TextField required label="Short company name" variant="standard" name="companyName" onChange={handleChangeForm} />

          <TextField required label="Company size" type="number" variant="standard" name="companySize" onChange={handleChangeForm} />

          <TextField label="Company website" variant="standard" />
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
            <TextField required fullWidth label="Offer title" variant="standard" name="title" onChange={handleChangeForm} />
          </OfferTitleBox>
          <OfferExpBox>
            <TextField
              fullWidth
              id="standard-select-currency-native"
              select
              label="Experience"
              value={choice}
              onChange={handleChange}
              SelectProps={{
                native: true,
              }}
              name="exp"
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
              <TextField fullWidth label="Monthly salary from (gross)" variant="standard" type="number" name="amount" onChange={handleChangeForm} />
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
          <TextField id="outlined-multiline-static" fullWidth multiline rows={10} name="description" onChange={handleChangeForm} />
        </JobDescBox>
        <HeaderLocation>
          <Typography variant="subtitle2">Choose your location</Typography>
        </HeaderLocation>
        <CityBox>
          <TextField fullWidth required label="Office city" variant="standard" name="city" onChange={handleChangeForm} />
        </CityBox>
        <StreetBox>
          <TextField fullWidth required label="Office street" variant="standard" name="adress" onChange={handleChangeForm} />
        </StreetBox>
        <RemoteContainer>
          <FormLabel required>Fully remote ?</FormLabel>
          <RadioGroup row name="remote" onChange={handleChangeForm}>
            <FormControlLabel value={true} control={<Radio />} label="Yes" />
            <FormControlLabel value={false} control={<Radio />} label="No" />
          </RadioGroup>
        </RemoteContainer>
        <MapBox>
          <OpenStreetMiniMap />
        </MapBox>
        <ButtonContainer>
          <Button variant="contained" size="large" type="submit" onSubmit={handlePostOffer}>
            NEXT STEP
          </Button>
        </ButtonContainer>
      </FormContainer>
    </form>
  );
};
