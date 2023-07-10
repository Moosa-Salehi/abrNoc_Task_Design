import { Button, Grid } from "@mui/material";
import React from "react";
import { useSelector, useDispatch } from "react-redux";

const InstanceDeploy = () => {
  const plans = useSelector((state) => state.plans);
  const selectedPlan = useSelector((state) => state.selectedPlan);
  const regions = useSelector((state) => state.regions);
  const selectedRegion = useSelector((state) => state.selectedRegion);

  const handleDeploy = () => {
    console.log(regions[selectedRegion].name, plans[selectedPlan].cpu_cores);
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
