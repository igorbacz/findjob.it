import { Typography } from "@mui/material";
import { Icon } from "../../../types/types";
import { IconText, IconWrapper, StyledIconButton } from "../styled";
import { useSearchParams } from "react-router-dom";

export const IconContainer = ({ logo, stack, background, _id }: Icon) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const stackSearch = () => {
    setSearchParams({ techStack: stack });
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
