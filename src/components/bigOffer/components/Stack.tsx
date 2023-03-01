import { Typography } from "@mui/material";
import { StackDetail, StyledRating, StackName } from "../styled";
import CircleIcon from "@mui/icons-material/Circle";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import { StackProp } from "../../../types/types";

const Stack = ({ value, stackName }: StackProp) => {
  return (
    <StackDetail>
      <StyledRating icon={<CircleIcon fontSize="small" />} emptyIcon={<CircleOutlinedIcon fontSize="small" />} value={value} readOnly />
      <StackName>
        <Typography variant="subtitle4">{stackName}</Typography>
      </StackName>
    </StackDetail>
  );
};

export default Stack;
