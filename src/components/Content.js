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
    <Grid
      display={"flex"}
      flexDirection={"row"}
      padding={"32px"}
      width={"100%"}
      sx={{ backgroundColor: "rgb(241,249,254)" }}
    >
      <Grid
        display={"flex"}
        flexDirection={"column"}
        width={"72%"}
        wrap="wrap"
        sx={{
          backgroundColor: "white",
          marginRight: "16px",
          borderRadius: "5px",
        }}
      >
        <Region />
        <Plan />
        <OperatingSystem />
        <SSHkey />
        <HostName />
      </Grid>
      <Grid
        display={"flex"}
        width={"28%"}
        wrap="wrap"
        sx={{ backgroundColor: "white", borderRadius: "5px" }}
      >
        <InstanceDeploy />
      </Grid>
    </Grid>
  );
};

export default Content;
