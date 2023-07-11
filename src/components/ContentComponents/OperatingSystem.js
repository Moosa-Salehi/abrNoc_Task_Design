import React, { useEffect } from "react";
import axios from "axios";
import { BASE_API_ROUTE, operatingSystemsLogos } from "../../Config";
import { Box, Grid, Typography, Autocomplete, TextField } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import "../../index.css";

const OperatingSystem = () => {
  const operatingSystems = useSelector((state) => state.operatingSystems);
  const selectedOperatingSystem = useSelector(
    (state) => state.selectedOperatingSystem
  );

  const dispatch = useDispatch();

  useEffect(() => {
    const getOperatingSystems = async () => {
      if (operatingSystems.length > 0) return;
      try {
        const response = await axios.get(BASE_API_ROUTE + "/operating_systems");
        // console.log("response in getting operating systems : ", response);
        const newOperatingSystems = [];
        let isNewOperatingSystem = false;
        response.data.forEach((operatingSystem) => {
          isNewOperatingSystem = true;
          newOperatingSystems.forEach((newOperatingSystem, newIndex) => {
            if (newOperatingSystem.family === operatingSystem.family) {
              newOperatingSystems[newIndex].versions.push(
                operatingSystem.version
              );
              isNewOperatingSystem = false;
            }
          });
          if (isNewOperatingSystem) {
            newOperatingSystems.push({
              family: operatingSystem.family,
              versions: [operatingSystem.version],
              selectedVersion: null,
              logo: operatingSystemsLogos[operatingSystem.family],
            });
          }
        });
        dispatch({
          type: "SET_OPERATING_SYSTEMS",
          payload: newOperatingSystems,
        });
      } catch (error) {
        console.log("error in getting operating systems : ", error);
      }
    };
    getOperatingSystems();
  }, []);

  const versionList = (versions, selectedVersion, index) => {
    return (
      <Autocomplete
        value={selectedOperatingSystem === index ? selectedVersion : null}
        onChange={(event, newValue) => {
          dispatch({
            type: "SELECT_OPERATING_SYSTEM_VERSION",
            payload: { version: newValue, index: index },
          });
        }}
        fullWidth
        disableClearable
        options={versions}
        renderInput={(params) => (
          <TextField placeholder="Select version" {...params} />
        )}
      />
    );
  };

  return (
    <Grid
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"flex-start"}
      width={"100%"}
      padding={"48px 16px 32px 32px"}
    >
      <Typography
        marginBottom={"20px"}
        fontWeight={"bold"}
        fontSize={"20px"}
        color={"rgba(0,0,0,0.8)"}
      >
        Operating System
      </Typography>
      <Grid
        container
        direction={"row"}
        display={"flex"}
        width={"100%"}
        wrap="wrap"
      >
        {operatingSystems.map((operatingSystem, index) => (
          <Grid
            key={index}
            onClick={() =>
              dispatch({ type: "SELECT_OPERATING_SYSTEM", payload: index })
            }
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"flex-start"}
            alignItems={"flex-start"}
            padding={"10px"}
            width={"226px"}
            border={
              selectedOperatingSystem === index
                ? "3px solid rgb(44,94,255)"
                : "1.5px solid lightgrey"
            }
            borderRadius={"5px"}
            marginBottom={"16px"}
            marginRight={"16px"}
            sx={{
              cursor: "pointer",
              "&:hover": { boxShadow: "0.5px 0.5px 3px 0px rgba(0,0,0,0.5)" },
            }}
            boxShadow={
              selectedOperatingSystem === index &&
              "0.5px 0.5px 3px 0px rgba(0,0,0,0.5)"
            }
          >
            <Grid display={"flex"} flexDirection={"row"} marginBottom={"20px"}>
              <Box
                sx={{
                  width: "40px",
                  height: "40px",
                  backgroundImage: `url(${operatingSystem.logo})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  marginX: "5px",
                }}
              ></Box>
              <Typography marginLeft={"10px"} fontWeight={"bold"}>
                {operatingSystem.family}
              </Typography>
            </Grid>
            {versionList(
              operatingSystem.versions,
              operatingSystem.selectedVersion,
              index
            )}
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default OperatingSystem;
