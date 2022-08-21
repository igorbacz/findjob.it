import { Box, Typography } from "@mui/material";
import { Icon } from "../../../types/types";
import { IconText, IconWrapper, StyledIconButton } from "../styled";
import { useSearchParams } from "react-router-dom";
import styled from "@emotion/styled";

export const IconGrey = styled(Box)`
  background: linear-gradient(-90deg, rgb(145, 147, 170), rgb(125, 130, 168));
  box-shadow: none;
  text-transform: none;
  width: 35px;
  height: 35px;
  line-height: 35px;
  border-radius: 30px;
  position: relative;
  transition: all 300ms ease 0s;
`;

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
