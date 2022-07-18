import { Typography } from "@mui/material";
import { Icon } from "../../../types/types";
import { IconText, IconWrapper, StyledIconButton } from "../styled";
import { data, stackIcons } from "../../../data";

export const IconContainer = ({ ikona, stack, background, _id }: Icon) => {
  const stackSearch = () => {
    stackIcons.filter((stack) => stack.stack);
    console.log(stack);
  };

  return (
    <IconWrapper>
      <StyledIconButton key={_id} size="small" sx={{ background: background }} onClick={stackSearch}>
        {ikona}
      </StyledIconButton>
      <IconText>
        <Typography variant="PStyled">{stack}</Typography>
      </IconText>
    </IconWrapper>
  );
};
