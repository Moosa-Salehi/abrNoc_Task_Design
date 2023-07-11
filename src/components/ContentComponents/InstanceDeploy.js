import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { AddOutlined, Remove } from "@mui/icons-material";
import {
  Button,
  Grid,
  Divider,
  Typography,
  IconButton,
  Box,
} from "@mui/material";

const InstanceDeploy = () => {
  const plans = useSelector((state) => state.plans);
  const selectedPlan = useSelector((state) => state.selectedPlan);
  const regions = useSelector((state) => state.regions);
  const selectedRegion = useSelector((state) => state.selectedRegion);
  const operatingSystems = useSelector((state) => state.operatingSystems);
  const selectedOperatingSystem = useSelector(
    (state) => state.selectedOperatingSystem
  );
  const SSHKeys = useSelector((state) => state.SSHKeys);
  const selectedSSHkey = useSelector((state) => state.selectedSSHkey);
  const instanceQuantity = useSelector((state) => state.instanceQuantity);
  const hostNames = useSelector((state) => state.hostNames);
  const ipv4Enabled = useSelector((state) => state.ipv4Enabled);

  const dispatch = useDispatch();

  const handleDeploy = () => {
    const userSelectedData = {
      region: regions[selectedRegion],
      plan: plans[selectedPlan],
      operatingSystem: operatingSystems[selectedOperatingSystem],
      sshKey: SSHKeys[selectedSSHkey],
      hostNames: hostNames,
      instanceQuantity: instanceQuantity,
      ipv4Enabled: ipv4Enabled,
    };
    console.log("User Selected Data: ", userSelectedData);
  };

  return (
    <Grid
      display={"flex"}
      flexDirection={"column"}
      width={"100%"}
      paddingX={"16px"}
      paddingY={"32px"}
    >
      <Grid
        display={"flex"}
        justifyContent={"space-around"}
        alignItems={"center"}
        sx={{
          border: "1px solid rgb(189,189,189)",
          borderRadius: "5px",
          width: "100%",
          // py: "5px",
        }}
      >
        <IconButton
          sx={{ width: "20%" }}
          onClick={() => dispatch({ type: "DELETE_INSTANCE", payload: null })}
        >
          <Remove color="action" sx={{ fontSize: 30 }} />
        </IconButton>
        <Divider orientation="vertical" flexItem />
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          width={"60%"}
          marginY={"8px"}
        >
          <Typography color={"rgba(0,0,0,0.8)"}>{instanceQuantity}</Typography>
        </Box>
        <Divider orientation="vertical" flexItem />
        <IconButton
          sx={{ width: "20%" }}
          onClick={() => dispatch({ type: "ADD_INSTANCE", payload: null })}
        >
          <AddOutlined color="action" sx={{ fontSize: 30 }} />
        </IconButton>
      </Grid>
      <Button variant="contained" onClick={handleDeploy}>
        Deploy
      </Button>
    </Grid>
  );
};

export default InstanceDeploy;
