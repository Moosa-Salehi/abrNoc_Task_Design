import React from "react";
import { Box } from "@mui/material";
import cloudzypic from "../../assets/images/Cloudzy.webp";

const CloudzyPicture = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "58.75px",
      }}
    >
      <img src={cloudzypic} alt="cloudzypic" width={"150px"} height={"40px"} />
    </Box>
  );
};

export default CloudzyPicture;
