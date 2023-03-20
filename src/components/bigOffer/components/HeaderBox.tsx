import { IconButton, Typography, useMediaQuery } from "@mui/material";
import { title } from "process";
import React from "react";
import { useNavigate } from "react-router-dom";
import { theme } from "../../../theme";
import { ButtonWrapper } from "../../offerForm/styled";
import * as styled from "../styled";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";

export const HeaderBox = ({ logo, title, adress, amount, remote }: any) => {
  const isMatchMedium = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();
  return (
    <styled.HeaderBox>
      <ButtonWrapper>
        <IconButton onClick={() => navigate(-1)} color="success">
          <ArrowBackIcon />
        </IconButton>
      </ButtonWrapper>
      {!isMatchMedium ? (
        <styled.LogoBox>
          <styled.LogoImg alt="logo" src={logo}></styled.LogoImg>
        </styled.LogoBox>
      ) : (
        <styled.LogoResponsiveBox>
          <styled.LogoImg alt="logo" src={logo}></styled.LogoImg>
        </styled.LogoResponsiveBox>
      )}
      <styled.HeaderInfo>
        <styled.TitleBox>
          <Typography variant="headerFont">{title}</Typography>
        </styled.TitleBox>
        <styled.AdressHeader>
          <PlaceOutlinedIcon />
          <Typography variant="subtitle1">{adress}</Typography>
          {!isMatchMedium ? remote && <styled.RemoteBigBox>Fully Remote</styled.RemoteBigBox> : null}
        </styled.AdressHeader>
        {!amount && <Typography variant="subtitleLight">Undisclosed Salary</Typography>}
        {amount && <Typography variant="subtitleLight">{amount} PLN</Typography>}
        {isMatchMedium ? remote && <styled.RemoteBigBox>Fully Remote</styled.RemoteBigBox> : null}
      </styled.HeaderInfo>
    </styled.HeaderBox>
  );
};
