import React, { useEffect } from "react";
import axios from "axios";
import { BASE_API_ROUTE } from "../../Config";
import { Box, Grid, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";

const SSHkey = () => {
  const selectedSSHkey = useSelector((state) => state.selectedSSHkey);

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
        SSH Key (optional)
      </Typography>
      <Grid
        container
        direction={"row"}
        display={"flex"}
        width={"100%"}
        wrap="wrap"
      >
        {["Add New", "Key name 1", "Key name 2", "Key name 3"].map(
          (sshkey, index) => (
            <Grid
              key={index}
              onClick={() =>
                dispatch({ type: "SELECT_SSHKEY", payload: index })
              }
              display={"flex"}
              justifyContent={"flex-start"}
              alignItems={"center"}
              padding={"10px"}
              width={"226px"}
              border={
                selectedSSHkey === index
                  ? "3px solid rgb(44,94,255)"
                  : "1.5px solid lightgrey"
              }
              borderRadius={"5px"}
              marginBottom={"16px"}
              marginRight={"16px"}
              sx={{
                cursor: "pointer",
                "&:hover": { boxShadow: "0.5px 0.5px 2px 0px rgba(0,0,0,0.5)" },
              }}
              boxShadow={
                selectedSSHkey === index &&
                "0.5px 0.5px 2px 0px rgba(0,0,0,0.5)"
              }
            >
              <Typography marginLeft={"10px"} fontWeight={"bold"}>
                {sshkey}
              </Typography>
            </Grid>
          )
        )}
      </Grid>
    </Grid>
  );
};

export default SSHkey;
