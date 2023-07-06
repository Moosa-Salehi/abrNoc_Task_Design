import React from "react";
import Region from "./ContentComponents/Region";
import Plan from "./ContentComponents/Plan";
import OperatingSystem from "./ContentComponents/OperatingSystem";
import SSHkey from "./ContentComponents/SSHkey";
import HostName from "./ContentComponents/HostName";
import InstanceDeploy from "./ContentComponents/InstanceDeploy";

const Content = () => {
  return (
    <>
      <Region/>
      <Plan/>
      <OperatingSystem/>
      <SSHkey/>
      <HostName/>
      <InstanceDeploy/>
    </>
  );
}

export default Content;
