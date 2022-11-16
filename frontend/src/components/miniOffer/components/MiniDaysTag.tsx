import { Typography } from "@mui/material";
import { TagBox, DaysBox } from "../styled";
import { MiniTagType } from "../../../types/types";

export const MiniDaysTag = ({ days }: MiniTagType) => {
  return (
    <TagBox>
      <DaysBox>
        <Typography variant="RemoteTypography">{days}d ago</Typography>
      </DaysBox>
    </TagBox>
  );
};
