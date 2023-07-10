import React, { useEffect } from "react";
import axios from "axios";
import { BASE_API_ROUTE } from "../../Config";
import { Box, Grid, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";

const operatingSystemsLogos = [
  "https://www.debian.org/logos/openlogo-nd.svg",
  "https://www.debian.org/logos/openlogo-nd.svg",
  "https://commons.wikimedia.org/wiki/File:Fedora_icon_(2021).svg",
  "https://commons.wikimedia.org/wiki/File:Fedora_icon_(2021).svg",
  "https://commons.wikimedia.org/wiki/File:Fedora_icon_(2021).svg",
  "https://seeklogo.com/images/R/rocky-linux-logo-88E2F3FB8C-seeklogo.com.png",
  "https://seeklogo.com/images/R/rocky-linux-logo-88E2F3FB8C-seeklogo.com.png",
  "https://seeklogo.com/images/C/centos-logo-494F57D973-seeklogo.com.png",
  "https://seeklogo.com/images/C/centos-logo-494F57D973-seeklogo.com.png",
];

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
        response.data.forEach((operatingSystem, index) => {
          newOperatingSystems.push({
            ...operatingSystem,
            logo: operatingSystemsLogos[index],
          });
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
            justifyContent={"flex-start"}
            alignItems={"center"}
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
            sx={{ cursor: "pointer" }}
            boxShadow={
              selectedOperatingSystem === index &&
              "0.5px 0.5px 2px 0px rgba(0,0,0,0.5)"
            }
          >
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
            <Typography marginLeft={"10px"}>
              {operatingSystem.family}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default OperatingSystem;
