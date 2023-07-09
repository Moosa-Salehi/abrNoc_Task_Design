import React from "react";
import { Grid } from "@mui/material";
import Region from "./ContentComponents/Region";
import Plan from "./ContentComponents/Plan";
import OperatingSystem from "./ContentComponents/OperatingSystem";
import SSHkey from "./ContentComponents/SSHkey";
import HostName from "./ContentComponents/HostName";
import InstanceDeploy from "./ContentComponents/InstanceDeploy";

const Content = () => {
  return (
    <Grid display={"flex"}>
      <Region />
      <Plan />
      <OperatingSystem />
      <SSHkey />
      <HostName />
      <InstanceDeploy />
    </Grid>
  );
};

export default Content;
