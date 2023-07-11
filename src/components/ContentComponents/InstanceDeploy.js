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
  Checkbox,
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

  const isDeployDisabled = () => {
    let allHostNamesFilled = hostNames.find(
      (hostName, index) => hostName === `Name ${index + 1}`
    );
    return selectedSSHkey === null || allHostNamesFilled !== undefined;
  };

  return (
    <Grid
      display={"flex"}
      flexDirection={"column"}
      width={"100%"}
      paddingX={"16px"}
      paddingY={"32px"}
      sx={{ backgroundColor: "white", borderRadius: "5px" }}
      height={"340px"}
    >
      <Typography
        color={"rgba(0,0,0,0.8)"}
        fontSize={"18px"}
        marginBottom={"5px"}
      >
        Instance quantity:
      </Typography>
      <Grid
        display={"flex"}
        justifyContent={"space-around"}
        alignItems={"center"}
        sx={{
          border: "1px solid rgb(189,189,189)",
          borderRadius: "5px",
          width: "100%",
          marginBottom: "20px",
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
      <Box
        display={"flex"}
        justifyContent={"flex-start"}
        alignItems={"center"}
        marginBottom={"20px"}
      >
        <Checkbox
          checked={ipv4Enabled}
          onChange={() =>
            dispatch({ type: "TOGGLE_IPV4ENABLED", payload: null })
          }
        />
        <Typography color={"rgba(0,0,0,0.8)"} fontSize={"20px"}>
          Enable IPv4
        </Typography>
      </Box>
      <Divider flexItem />
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        marginY={"20px"}
      >
        <Typography
          color={"rgba(0,0,0,0.8)"}
          fontSize={"23px"}
          fontWeight={"bold"}
        >
          Total
        </Typography>
        <Box display={"flex"} alignItems={"end"}>
          <Typography
            color={"rgba(0,0,0,0.8)"}
            fontSize={"23px"}
            fontWeight={"bold"}
          >
            $ 57.95
          </Typography>
          <Typography
            color={"rgba(0,0,0,0.5)"}
            fontSize={"18px"}
            marginLeft={"5px"}
          >
            /month
          </Typography>
        </Box>
      </Box>
      <Button
        variant="contained"
        disabled={isDeployDisabled()}
        sx={{ backgroundColor: "rgb(0,205,130)", height: "40px" }}
        onClick={handleDeploy}
      >
        DEPLOY NOW
      </Button>
    </Grid>
  );
};

export default InstanceDeploy;
