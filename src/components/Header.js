import React from "react";
import {
  Typography,
  Breadcrumbs,
  Badge,
  Avatar,
  Divider,
  Grid,
} from "@mui/material";
import { NotificationsNoneOutlined, AddOutlined } from "@mui/icons-material";
import { SideBarWidth } from "../Config";

const balance = 125.5;

const Header = () => {
  return (
    <Grid
      display={"flex"}
      flexDirection={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      height={"60px"}
      width={`calc(100vw - ${SideBarWidth}px)`}
      paddingX={"30px"}
    >
      <Breadcrumbs aria-label="breadcrumb">
        <Typography color="inherit" fontSize={18}>
          Instances
        </Typography>
        <Typography color="text.primary" fontSize={18}>
          New Instance
        </Typography>
      </Breadcrumbs>

      <Grid
        container
        direction={"row"}
        display={"flex"}
        justifyContent={"space-around"}
        alignItems={"center"}
        maxWidth={"300px"}
      >
        <Badge
          color="error"
          variant="dot"
          sx={{ position: "relative", top: "5px" }}
        >
          <NotificationsNoneOutlined
            sx={{ position: "relative", top: "-5px", left: "5px" }}
          />
        </Badge>
        <Grid
          display={"flex"}
          justifyContent={"flex-start"}
          alignItems={"center"}
          sx={{
            border: "1px solid rgb(189,189,189)",
            borderRadius: "5px",
            minWidth: "133px",
            py: "5px",
          }}
        >
          <AddOutlined color="action" sx={{ px: "5px", cursor: "pointer" }} />
          <Typography color={"rgba(0,0,0,0.8)"}>
            $ {balance.toFixed(2)}
          </Typography>
        </Grid>
        <Divider orientation="vertical" variant="middle" flexItem />
        <Avatar />
      </Grid>
    </Grid>
  );
};

export default Header;
