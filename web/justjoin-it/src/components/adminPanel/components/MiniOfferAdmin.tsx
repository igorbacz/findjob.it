import { Button, Typography } from "@mui/material";
import { SmallOffer } from "../../../types/types";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import { MiniOfferCon, LogoContainer, MiniLogoImg, AmountResponsive, Title, LocationRemote, Paragraph, ButtonBox } from "../../miniOffer/styled";

const MiniOffer = ({ logo, title, amount, companyName, city, _id, remote }: SmallOffer) => {
  // export const deleteMeal = (id) => async (dispatch) => {
  //   await fetch(`http://localhost:5000/api/meals/${id}/`, {
  //     method: "DELETE",
  //   });
  //   dispatch({
  //     type: DELETE_MEAL,
  //     payload: id,
  //   });
  // };
  //TODO
  const deleteOffer = async (_id: string) => {
    const response = await fetch(`http://localhost:3001/api/delete-offer/${_id}`, {
      method: "DELETE",
      body: JSON.stringify(_id),
    });
    const data = await response.json();
    if (data) {
      alert("Offer deleted");
    }
    //TODO
    // dispatch({
    //   type: DELETE_OFFER,
    //   payload: _id,
    // });
    // } catch (error) {
    //   console.error(error);
    // }
  };

  const handleDelete = async (e: any) => {
    console.log(`delete ${_id}`);
    await deleteOffer(_id);
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
