import { Button, Typography } from "@mui/material";
import { BigOfferDetails, SmallOffer } from "../../types/types";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import { useSelector } from "react-redux";
import { allOffersSelector } from "../../services/selectors";
import { AmountResponsive, ButtonBox, LocationRemote, LogoContainer, MiniLogoImg, MiniOfferCon, Paragraph, Title } from "../miniOffer/styled";

const MiniOffer = ({ logo, title, amount, companyName, city, _id, remote }: SmallOffer) => {
  const offers: BigOfferDetails[] = useSelector(allOffersSelector);
  const offer = offers.find((offer) => offer._id === _id);
  const dateFrom = new Date(offer?.dateAdded);
  const dateToday = new Date();

  const handleDelete = () => {
    console.log(`delete ${_id}`);
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
        <Button variant="outlined">EDIT</Button>
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
