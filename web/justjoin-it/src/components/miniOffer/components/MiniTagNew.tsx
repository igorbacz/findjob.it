import { Typography } from "@mui/material";
import { TagNewBox } from "../styled";

export const MiniTagNew = ({ days }: any) => {
  return (
    <TagNewBox>
      <Typography variant="RemoteTypography">New</Typography>
    </TagNewBox>
  );
};
