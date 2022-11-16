import { Box, MenuItem, Typography } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import { Icon } from "../../../types/types";
import { IconText, StyledIconButton } from "../styled";

export const IconMenuItem = ({ logo, stack, background, _id }: Icon) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const stackSearch = () => {
    setSearchParams({ techStack: stack });
  };

  return (
    <MenuItem>
      <Box onClick={stackSearch}>
        <StyledIconButton key={_id} size="small" sx={{ background: background }}>
          {logo}
        </StyledIconButton>
        <IconText>
          <Typography variant="PStyled">{stack}</Typography>
        </IconText>
      </Box>
    </MenuItem>
  );
};
