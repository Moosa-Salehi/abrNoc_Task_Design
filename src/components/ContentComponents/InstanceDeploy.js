import { Button, Grid } from "@mui/material";
import React from "react";
import { useSelector, useDispatch } from "react-redux";

const InstanceDeploy = () => {
  const plans = useSelector((state) => state.plans);
  const selectedPlan = useSelector((state) => state.selectedPlan);
  const regions = useSelector((state) => state.regions);
  const selectedRegion = useSelector((state) => state.selectedRegion);
  const operatingSystems = useSelector((state) => state.operatingSystems);
  const selectedOperatingSystem = useSelector(
    (state) => state.selectedOperatingSystem
  );
  const selectedOperatingSystemVersion = useSelector(
    (state) => state.selectedOperatingSystemVersion
  );

  const handleDeploy = () => {
    console.log(
      "region : ",
      regions[selectedRegion].name,
      "\n",
      "number of cpu : ",
      plans[selectedPlan].cpu_cores,
      "\n",
      "operating system : ",
      operatingSystems[selectedOperatingSystem].family,
      " version : ",
      selectedOperatingSystemVersion
    );
  };

  return (
    <Grid>
      <Button variant="contained" onClick={handleDeploy}>
        Deploy
      </Button>
    </Grid>
  );
};

export default InstanceDeploy;
