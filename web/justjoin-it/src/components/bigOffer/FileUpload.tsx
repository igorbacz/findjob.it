import React from "react";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";

import { Box } from "@mui/material";
import styled from "@emotion/styled";

export const UploadBox = styled(Box)`
  width: 100%;
  height: 72px;
  border: 2px dashed rgb(228, 232, 240);
  border-radius: 5px;
`;

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
