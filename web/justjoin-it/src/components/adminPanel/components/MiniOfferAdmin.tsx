import { Button, Typography } from "@mui/material";
import { BigOfferDetails, SmallOffer } from "../../../types/types";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import { useSelector } from "react-redux";
import { allOffersSelector } from "../../../services/selectors";
import { MiniOfferCon, LogoContainer, MiniLogoImg, AmountResponsive, Title, LocationRemote, Paragraph, ButtonBox } from "../../miniOffer/styled";

const MiniOffer = ({ logo, title, amount, companyName, city, _id, remote }: SmallOffer) => {
  const offers: BigOfferDetails[] = useSelector(allOffersSelector);
  const offer = offers.find((offer) => offer._id === _id);

  const handleDelete = (e: any) => {
    console.log(`delete ${_id}`);
    console.log(e);
    fetch(`http://localhost:3001/api/delete-offer${_id}`, {
      headers: {
        // "Access-Control-Allow-Credentials":,
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      method: "DELETE",
      body: e,
    });
  };

  return (
    <MiniOfferCon key={_id}>
      <LogoContainer>
        <MiniLogoImg alt="logo" src={logo}></MiniLogoImg>
      </LogoContainer>
      <Title>
        <Typography variant="subtitle4">{title}</Typography>
      </Title>
      <AmountResponsive>
        {!amount && <Typography variant="subtitle3">{amount} Undisclosed Salary</Typography>}
        {amount && <Typography variant="subtitle3">{amount} PLN</Typography>}
      </AmountResponsive>
      <ButtonBox>
        <Button variant="outlined" onClick={handleDelete}>
          DELETE
        </Button>
        <Button variant="outlined" href="">
          EDIT
        </Button>
        <Button variant="outlined" href={`/offer/${_id}`}>
          VIEW
        </Button>
      </ButtonBox>
      <LocationRemote>
        {remote ? <Paragraph>{city}, Fully Remote</Paragraph> : <Paragraph>{city}</Paragraph>}
        <FmdGoodOutlinedIcon fontSize="small" color="secondary" />
      </LocationRemote>
    </MiniOfferCon>
  );
};

export default MiniOffer;
