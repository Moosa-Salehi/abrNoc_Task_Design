import React from "react";
import { Grid, Typography, TextField } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";

const HostName = () => {
  const selectedSSHkey = useSelector((state) => state.selectedSSHkey);
  const hostNames = useSelector((state) => state.hostNames);

  const dispatch = useDispatch();

  return (
    <Grid
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"flex-start"}
      width={"100%"}
      padding={"0px 16px 32px 32px"}
    >
      <Typography
        marginBottom={"20px"}
        fontWeight={"bold"}
        fontSize={"20px"}
        color={"rgba(0,0,0,0.8)"}
      >
        Hostname
      </Typography>
      <Grid
        container
        direction={"row"}
        display={"flex"}
        width={"100%"}
        wrap="wrap"
      >
        {hostNames.map((hostname, index) => (
          <TextField
            key={index}
            disabled={!selectedSSHkey}
            value={hostname}
            onChange={(event) => {
              dispatch({
                type: "SET_HOSTNAME",
                payload: { hostName: event.target.value, index: index },
              });
            }}
            variant="outlined"
            inputProps={{
              style: {
                fontWeight: "bold",
                ...(selectedSSHkey
                  ? { color: "rgba(0,0,0,0.8)" }
                  : { color: "rgba(0,0,0,0.5)" }),
                padding: "8.5px 14px",
              },
            }}
            sx={{
              width: "349px",
              borderRadius: "5px",
              marginBottom: "16px",
              marginRight: "16px",
            }}
          />
        ))}
      </Grid>
    </Grid>
  );
};

export default HostName;
