import React from "react";
import { Box, Typography, Breadcrumbs, Badge, Avatar } from "@mui/material";
import { NotificationsNoneOutlined, AddOutlined } from "@mui/icons-material";
import { SideBarWidth } from "../Config";

const balance = 125.5;

const Header = () => {
  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      height={"60px"}
      width={`calc(100vw - ${SideBarWidth}px)`}
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

      <Badge color="error" variant="dot">
        <NotificationsNoneOutlined />
      </Badge>

      <Box sx={{ border: "1px solid gray", borderRadius: "5px" }}>
        <AddOutlined />${balance}
      </Box>

      <Avatar />
    </Box>
  );
};

export default Header;
