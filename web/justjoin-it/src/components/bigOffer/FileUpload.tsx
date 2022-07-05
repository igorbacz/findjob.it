import React from "react";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import { Box } from "@mui/material";
import { UploadBox } from "./styled";



export const FileUpload: React.FC = () => {
  return (
    <UploadBox>
      <label htmlFor="file-upload">
        <Box>
          <CloudUploadOutlinedIcon fontSize="large" />
          <p>Drag and drop</p>
        </Box>
      </label>
    </UploadBox>
  );
};
