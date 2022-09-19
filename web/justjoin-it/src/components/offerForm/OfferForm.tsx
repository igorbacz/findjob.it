import { Button, FormControlLabel, FormLabel, IconButton, Radio, RadioGroup, TextField, Typography } from "@mui/material";
import { companyInustries, companyTypes, currency, employmentTypes, exp, stackIcons } from "../../data";
import { IconContainer } from "../searchBar/components/IconContainer";
import CircleIcon from "@mui/icons-material/Circle";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
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
  StackFormContainer,
} from "./styled";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import ToggleButtonsMultiple from "./components/ToggleButtons";
import { BigOfferDetails, StackProp } from "../../types/types";
import { OpenStreetMiniMap } from "./components/OpenStreetMiniMap";
import useGeolocation from "react-hook-geolocation";
import { StackDetail, StackDetails, StackName, StyledRating } from "../bigOffer/styled";

export const OfferForm = () => {
  const [choice, setChoice] = useState("");
  const [image, setImage] = useState("");
  const [form, setForm] = useState(new BigOfferDetails());
  const [techStack, setTechStack] = useState<StackProp>();
  const [techStackArray, setTechStackArray] = useState<StackProp[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const postOffer = () => {
    console.log(form);
  };

  const handlePostOffer = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    postOffer();
  };

  const onLoad = (fileString: any) => {
    setImage(fileString);
  };

  const getBase64 = (file: any) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      onLoad(reader.result);
    };
  };

  const onChange = (e: any) => {
    const files = e.target.files;
    const file = files[0];
    getBase64(file);
  };

  const geolocation = useGeolocation();
  const longitude = geolocation.longitude;
  const latitude = geolocation.latitude;

  const date = new Date();
  const currentDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;

  const handleChangeExp = (event: any) => {
    setChoice(event.target.value);
  };

  const onStackNameChange = (e: any) => {
    if (e.key === "Enter") {
      let stackNameValue = e.target.value;
      setTechStack({ stackName: stackNameValue });
      setTechStackArray([...techStackArray, { ...techStack }]);
      inputRef.current.value = "";
    }
  };

  const onStackLevelChange = (e: any) => {
    const stackLvlValue = e.target.value;
    setTechStack({ ...techStack, stackLvl: stackLvlValue });
  };

  useEffect(() => {
    console.log(techStack);
    console.log(techStackArray);
  }, [techStackArray, techStack]);

  const handleChangeForm = (e: ChangeEvent<{ value: string | number; name: string }>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
      logo: image,
      dateAdded: currentDate,
      exp: choice,
      geolocation: { latitude: latitude, longitude: longitude },
      techStack: techStackArray,
    });
  };
  return (
    <form onSubmit={handlePostOffer}>
      <FormContainer>
        <HeaderForm>
          <Typography variant="subtitle2">About company</Typography>
        </HeaderForm>
        <PhotoForm>
          <PhotoBox>
            <ButtonBox>
              <IconButton color="secondary" aria-label="upload picture" component="label">
                <input hidden accept=".jpeg, .png, .jpg" type="file" name="logo" onChange={(e) => onChange(e)} />
                <AddAPhotoIcon fontSize="large" />
              </IconButton>
              <Typography variant="subtitle5">Upload Logo*</Typography>
            </ButtonBox>
          </PhotoBox>
        </PhotoForm>
        <InpputsBox>
          <TextField label="Short company name" variant="standard" name="companyName" onChange={handleChangeForm} />

          <TextField label="Company size" type="number" variant="standard" name="companySize" onChange={handleChangeForm} />

          <TextField disabled label="Company website" variant="standard" />
        </InpputsBox>
        <InpputsSecondBox>
          <TextField
            disabled
            id="standard-select-currency-native"
            select
            label="Company type"
            value={choice}
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
            disabled
            id="standard-select-currency-native"
            select
            label="Company industry"
            value={choice}
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
            <TextField fullWidth label="Offer title" variant="standard" name="title" onChange={handleChangeForm} />
          </OfferTitleBox>
          <OfferExpBox>
            <TextField
              fullWidth
              id="standard-select-currency-native"
              select
              label="Experience"
              value={choice}
              onChange={handleChangeExp}
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
              disabled
              id="standard-select-currency-native"
              select
              label="Employment type"
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
              <TextField disabled fullWidth label="Monthly salary to (gross)" variant="standard" />
            </SalaryToBox>
            <CurrencyBox>
              <TextField
                disabled
                fullWidth
                id="standard-select-currency-native"
                select
                label="Currency"
                value={choice}
                SelectProps={{
                  native: true,
                }}
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
        <StackFormContainer>
          <Typography variant="subtitle2">Tech Stack</Typography>
          <TextField
            inputRef={inputRef}
            id="standard-select-currency-native"
            label="Tech Stack"
            variant="standard"
            onKeyDown={onStackNameChange}
          ></TextField>
          {techStack ? (
            <StackDetails>
              {techStackArray?.map((item: StackProp) => {
                return (
                  <StackDetail>
                    <StyledRating
                      onClick={onStackLevelChange}
                      icon={<CircleIcon fontSize="small" />}
                      emptyIcon={<CircleOutlinedIcon fontSize="small" />}
                      name="simple-controlled"
                    />
                    <StackName>
                      <Typography variant="subtitle4">{item.stackName}</Typography>
                    </StackName>
                  </StackDetail>
                );
              })}
            </StackDetails>
          ) : null}
        </StackFormContainer>
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
          <TextField fullWidth label="Office city" variant="standard" name="city" onChange={handleChangeForm} />
        </CityBox>
        <StreetBox>
          <TextField fullWidth label="Office street" variant="standard" name="adress" onChange={handleChangeForm} />
        </StreetBox>
        <RemoteContainer>
          <FormLabel>Fully remote ?</FormLabel>
          <RadioGroup row name="remote" onChange={handleChangeForm}>
            <FormControlLabel value={true} control={<Radio />} label="Yes" />
            <FormControlLabel value={false} control={<Radio />} label="No" />
          </RadioGroup>
        </RemoteContainer>
        <MapBox>
          <OpenStreetMiniMap />
        </MapBox>
        <ButtonContainer>
          <Button variant="contained" size="large" type="submit">
            NEXT STEP
          </Button>
        </ButtonContainer>
      </FormContainer>
    </form>
  );
};
