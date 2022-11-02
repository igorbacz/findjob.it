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
import { ChangeEvent, FormEvent, MouseEvent, KeyboardEvent, useEffect, useRef, useState } from "react";
import ToggleButtonsMultiple from "./components/ToggleButtons";
import { BigOfferDetails, GeoProp, StackProp, UserState } from "../../types/types";
import useGeolocation from "react-hook-geolocation";
import { StackDetail, StackDetails, StackName, StyledRating } from "../bigOffer/styled";
import axios, { AxiosResponse } from "axios";
import { API_KEY } from "../../apiKey";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import { useNavigate, useSearchParams } from "react-router-dom";
import L from "leaflet";
import { userDataSelector } from "../../service/user/selectors";
import { useSelector, useDispatch } from "react-redux";
import { getOffersData } from "../../service/offers/actions";

export const OfferForm = () => {
  const [choice, setChoice] = useState("Junior");
  const [image, setImage] = useState("");
  const [form, setForm] = useState(new BigOfferDetails());
  const [techStack, setTechStack] = useState<StackProp>();
  const [techStackArray, setTechStackArray] = useState<any[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const [city, setCity] = useState("");
  const [apiGeolocation, setApiGeolocation] = useState();
  const [location, setLocation] = useState<GeoProp>({ longitude: "", latitude: "" });
  const geolocation = useGeolocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const currentStackParam = searchParams.get("techStack");
  const navigate = useNavigate();
  const userData: UserState = useSelector(userDataSelector);

  const userEmail: string = userData.user;

  const currentLongitude = geolocation.longitude;
  const currentLatitude = geolocation.latitude;

  const params = {
    access_key: API_KEY,
    query: city,
  };
  const positionFromInput = () => {
    console.log(city);
    axios
      .get("http://api.positionstack.com/v1/forward", { params })
      .then((response: AxiosResponse) => {
        setApiGeolocation(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    if (!apiGeolocation) {
      console.log("no data");
    } else {
      //@ts-ignore
      const latitudeFromApi = apiGeolocation?.data?.[0]?.latitude;
      //@ts-ignore
      const longitudeFromApi = apiGeolocation?.data[0]?.longitude;
      const locationApi = { latitude: latitudeFromApi, longitude: longitudeFromApi };
      setLocation({ longitude: longitudeFromApi, latitude: latitudeFromApi });
      Object.assign(location, locationApi);
    }
  }, [apiGeolocation]);

  //@ts-ignore
  const latitudeFromApi = apiGeolocation?.data?.[0]?.latitude;
  //@ts-ignore
  const longitudeFromApi = apiGeolocation?.data[0]?.longitude;

  const handleChangeCity = (event: MouseEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    setCity(target.value);
    console.log(city);
  };

  useEffect(() => {
    positionFromInput();
  }, [city]);

  const iconUrlFind = () => {
    if (!currentStackParam) {
      return;
    } else {
      const iconObject = stackIcons.find((stack) => stack.stack === currentStackParam);
      const iconUrl = iconObject.url;
      const LeafIcon = new L.Icon({
        iconSize: [25, 25],
        iconUrl: iconUrl,
      });
      return LeafIcon;
    }
  };

  const postOffer = async () => {
    const response = await fetch("http://localhost:3001/api/add-offer", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
  };

  const handlePostOffer = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    postOffer();
    navigate(`/`);
  };

  const onLoad = (fileString: string) => {
    console.log(fileString);
    setImage(fileString);
  };

  const getBase64 = (file: Blob) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      onLoad(reader.result as string);
    };
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    const file = files[0];
    getBase64(file);
  };

  const date = new Date();
  const currentDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;

  const handleChangeExp = (event: ChangeEvent<HTMLInputElement>): void => {
    setChoice(event.target.value);
  };

  const onStackNameChange = (e: KeyboardEvent<HTMLInputElement> & ChangeEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const stackNameValue = e.target.value;
      setTechStack({ stackName: stackNameValue });
      setTechStackArray([...techStackArray, { stackName: stackNameValue }]);
      inputRef.current.value = "";
    }
  };

  const onStackLevelChange = (e: React.MouseEvent<HTMLInputElement>) => {
    const stackLvlValue = (e.target as HTMLInputElement).value;
    const updatedStackArray = techStackArray.map((item) => {
      if (item.stackName === techStack.stackName) {
        return { ...item, value: Number(stackLvlValue) };
      }
      return item;
    });
    setTechStackArray(updatedStackArray);
  };

  const handleChangeForm = (e: ChangeEvent<{ value: string | number; name: string }>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
      logo: image,
      dateAdded: currentDate,
      exp: choice,
      geolocation: location,
      techStack: techStackArray,
      city: city,
      mainStack: currentStackParam,
      adminEmail: userEmail,
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
          <TextField required label="Short company name" variant="standard" name="companyName" onChange={handleChangeForm} />

          <TextField required label="Company size" type="number" variant="standard" name="companySize" onChange={handleChangeForm} />

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
            <TextField required fullWidth label="Offer title" variant="standard" name="title" onChange={handleChangeForm} />
          </OfferTitleBox>
          <OfferExpBox>
            <TextField
              required
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
                      key={item.stackName}
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
          <TextField required id="outlined-multiline-static" fullWidth multiline rows={10} name="description" onChange={handleChangeForm} />
        </JobDescBox>
        <HeaderLocation>
          <Typography variant="subtitle2">Choose your location</Typography>
        </HeaderLocation>
        <CityBox>
          <TextField required fullWidth label="Office city" variant="standard" name="city" onClick={handleChangeCity} />
        </CityBox>
        <StreetBox>
          <TextField required fullWidth label="Office street" variant="standard" name="adress" onChange={handleChangeForm} />
        </StreetBox>
        <RemoteContainer>
          <FormLabel>Fully remote ?</FormLabel>
          <RadioGroup row name="remote" onChange={handleChangeForm}>
            <FormControlLabel value={true} control={<Radio />} label="Yes" />
            <FormControlLabel value={false} control={<Radio />} label="No" />
          </RadioGroup>
        </RemoteContainer>
        <MapBox>
          <MapContainer center={[52.291335, 19.088525]} zoom={5} scrollWheelZoom={false} id="mini__map__container">
            <>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {currentStackParam ? (
                <Marker
                  position={!apiGeolocation ? [currentLatitude, currentLongitude] : [latitudeFromApi, longitudeFromApi]}
                  icon={iconUrlFind()}
                ></Marker>
              ) : null}
            </>
          </MapContainer>
        </MapBox>
        <ButtonContainer>
          <Button variant="contained" size="large" type="submit">
            NEXT STEP
          </Button>
        </ButtonContainer>
      </FormContainer>
    </form>
  );
};;;
