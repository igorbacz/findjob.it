import { Typography } from "@mui/material";
import { TagBox } from "../styled";

export const MiniDaysTag = ({ days }: any) => {
  return (
    <TagBox>
      <Typography variant="RemoteTypography">{days}d ago</Typography>
    </TagBox>
  );
};
