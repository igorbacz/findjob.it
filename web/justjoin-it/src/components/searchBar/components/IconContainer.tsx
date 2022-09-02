import { Typography } from "@mui/material";
import { Icon } from "../../../types/types";
import { IconText, IconWrapper } from "../styled";
import { useSearchParams } from "react-router-dom";
import { StackButton } from "../../../shared/StackButton";

export const IconContainer = ({ logo, stack, background, _id }: Icon) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const stackSearch = () => {
    setSearchParams({ techStack: stack });
  };

  const param = searchParams.get("techStack");

  return (
    <IconWrapper onClick={stackSearch}>
      <StackButton
        logo={logo}
        _id={_id}
        background={param === stack || !param ? background : "linear-gradient(-90deg, rgb(145, 147, 170), rgb(125, 130, 168))"}
      />
      <IconText>
        <Typography variant="PStyled">{stack}</Typography>
      </IconText>
    </IconWrapper>
  );
};
