import { Typography } from "@mui/material";
import { BigOfferDetails, Icon } from "../../../types/types";
import { IconText, IconWrapper, StyledIconButton } from "../styled";
import { data } from "../../../data";

export const IconContainer = ({ logo, stack, background, _id }: Icon) => {
  const stackSearch = () => {
    let searchedStack = stack;
    let filteredOffers: BigOfferDetails[] = [];

    data.forEach((item) => {
      item.techStack.forEach((nameStack) => {
        if (nameStack.stackName === searchedStack) {
          filteredOffers.push(item);
        }
      });
    });
    console.log(filteredOffers);
  };

  return (
    <IconWrapper>
      <StyledIconButton key={_id} size="small" sx={{ background: background }} onClick={stackSearch}>
        {logo}
      </StyledIconButton>
      <IconText>
        <Typography variant="PStyled">{stack}</Typography>
      </IconText>
    </IconWrapper>
  );
};
