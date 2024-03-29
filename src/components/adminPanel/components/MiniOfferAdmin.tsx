import { Button, Typography } from "@mui/material";
import { SmallOffer } from "../../../types/types";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import { MiniOfferCon, LogoContainer, MiniLogoImg, AmountResponsive, Title, LocationRemote, Paragraph, ButtonBox } from "../../miniOffer/styled";
import { store } from "../../../service/store";
import { deleteOffer } from "../../../service/offers/offersSlice";
import { useDispatch } from "react-redux";
import { StyledLink } from "../../topBar/styled";
import apiClient from "../../../service/api/apiClient";

const MiniOffer = ({ logo, title, amount, city, _id, remote }: SmallOffer) => {
  type AppDispatch = typeof store.dispatch;
  const useAppDispatch: () => AppDispatch = useDispatch;
  const dispatch = useAppDispatch();

  const deleteOfferInDatabase = async (_id: string) => {
    const response = await apiClient.deleteReq("/offers/", _id);
    response.ok && dispatch(deleteOffer({ _id }));
  };

  const handleDelete = async () => {
    await deleteOfferInDatabase(_id);
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
        <StyledLink to={`/offer/${_id}`}>
          <Button variant="outlined">VIEW</Button>
        </StyledLink>
      </ButtonBox>
      <LocationRemote>
        {remote ? <Paragraph>{city}, Fully Remote</Paragraph> : <Paragraph>{city}</Paragraph>}
        <FmdGoodOutlinedIcon fontSize="small" color="secondary" />
      </LocationRemote>
    </MiniOfferCon>
  );
};

export default MiniOffer;
