import { Typography } from "@mui/material";
import { TagBox, DaysBox } from "../styled";

export const MiniDaysTag = ({ days }: any) => {
  return (
    <TagBox>
      <DaysBox>
        <Typography variant="RemoteTypography">{days}d ago</Typography>
      </DaysBox>
    </TagBox>
  );
};
