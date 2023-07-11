import React from "react";
import { Grid, Typography, TextField } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";

const HostName = () => {
  const instanceQuantity = useSelector((state) => state.instanceQuantity);
  const hostNames = useSelector((state) => state.hostNames);

  const dispatch = useDispatch();

  return (
    <Grid
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"flex-start"}
      width={"100%"}
      paddingLeft={"32px"}
      paddingRight={"16px"}
      paddingBottom={"32px"}
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
            // value={name}
            // onChange={(event) => {
            //   setName(event.target.value);
            // }}
            variant="outlined"
            label={`Name ${index + 1}`}
            inputProps={{
              style: { fontWeight: "bold", color: "rgba(0,0,0,0.8)" },
            }}
            InputLabelProps={{ style: { color: "rgba(0,0,0,0.5)" } }}
            sx={{
              width: "349px",
              // height: "40px",
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
