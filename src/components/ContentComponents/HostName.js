import React from "react";
import { Grid, Typography } from "@mui/material";
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
      paddingY={"32px"}
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
          <Grid
            key={index}
            // onClick={() => dispatch({ type: "SELECT_SSHKEY", payload: index })}
            display={"flex"}
            justifyContent={"flex-start"}
            alignItems={"center"}
            padding={"10px"}
            width={"226px"}
            border={"1.5px solid lightgrey"}
            borderRadius={"5px"}
            marginBottom={"16px"}
            marginRight={"16px"}
            sx={{
              cursor: "pointer",
              "&:hover": { boxShadow: "0.5px 0.5px 3px 0px rgba(0,0,0,0.5)" },
            }}
          >
            <Typography
              marginLeft={"5px"}
              fontWeight={"bold"}
              color={"rgba(0,0,0,0.8)"}
            >
              {"name"}
              {index}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default HostName;
