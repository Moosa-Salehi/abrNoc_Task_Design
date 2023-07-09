import React from "react";
import { Grid } from "@mui/material";
import Region from "./ContentComponents/Region";
import Plan from "./ContentComponents/Plan";
import OperatingSystem from "./ContentComponents/OperatingSystem";
import SSHkey from "./ContentComponents/SSHkey";
import HostName from "./ContentComponents/HostName";
import InstanceDeploy from "./ContentComponents/InstanceDeploy";
import { SideBarWidth } from "../Config";

const Content = () => {
  return (
    <Grid
      display={"flex"}
      padding={"32px"}
      width={`calc(100vw - ${SideBarWidth}px)`}
      sx={{ backgroundColor: "rgb(241,249,254)" }}
    >
      <Grid display={"flex"} width={"68.2%"}>
        <Region />
        <Plan />
        <OperatingSystem />
        <SSHkey />
        <HostName />
      </Grid>
      <Grid display={"flex"} width={"24.7%"}>
        <InstanceDeploy />
      </Grid>
    </Grid>
  );
};

export default Content;
