import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import { Box, Typography } from "@mui/material";
import { UploadBox } from "../styled";

export const FileUpload: React.FC = () => {
  return (
    <UploadBox>
      <label htmlFor="file-upload">
        <Box>
          <CloudUploadOutlinedIcon fontSize="large" />
          <Typography>Drag and drop</Typography>
        </Box>
      </label>
    </UploadBox>
  );
};
