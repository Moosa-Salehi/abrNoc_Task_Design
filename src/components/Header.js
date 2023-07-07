import React from "react";
import { Box, Typography, Breadcrumbs, Link } from "@mui/material";

const Header = () => {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      height={"60px"}
      // paddingLeft={"10px"}
    >
      <Breadcrumbs aria-label="breadcrumb">
        <Typography color="inherit" fontSize={18}>
          Instances
        </Typography>
        <Typography color="text.primary" fontSize={18}>
          New Instance
        </Typography>
      </Breadcrumbs>
    </Box>
  );
};

export default Header;
