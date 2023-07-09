import React, { useEffect } from "react";
import axios from "axios";
import { BASE_API_ROUTE } from "../../Config";
import { Box, Grid, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";

const Region = () => {
  const regions = useSelector((state) => state.regions);
  const selectedRegion = useSelector((state) => state.selectedRegion);

  const dispatch = useDispatch();

  useEffect(() => {
    const getRegions = async () => {
      if (regions.length > 0) return;
      try {
        const response = await axios.get(BASE_API_ROUTE + "/regions");
        const countryCodes = await axios.get(
          "https://flagcdn.com/en/codes.json"
        );
        // console.log("response in getting regions : ", response);
        const newRegions = [];
        response.data.forEach((region) => {
          const regionName =
            region.name === "US" ? "United States" : region.name;
          for (const key in countryCodes.data) {
            if (regionName === countryCodes.data[key]) {
              newRegions.push({
                ...region,
                flag: `https://flagcdn.com/w2560/${key}.png`,
              });
            }
          }
        });
        dispatch({ type: "SET_REGIONS", payload: newRegions });
      } catch (error) {
        console.log("error in getting regions : ", error);
      }
    };
    getRegions();
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
        Region
      </Typography>
      <Grid
        container
        direction={"row"}
        display={"flex"}
        width={"100%"}
        wrap="wrap"
      >
        {regions.map((region, index) => (
          <Grid
            key={index}
            onClick={() => dispatch({ type: "SELECT_REGION", payload: index })}
            display={"flex"}
            justifyContent={"flex-start"}
            alignItems={"center"}
            padding={"10px"}
            width={"226px"}
            border={
              selectedRegion === index
                ? "3px solid rgb(44,94,255)"
                : "1.5px solid lightgrey"
            }
            borderRadius={"5px"}
            marginBottom={"16px"}
            marginRight={"16px"}
            sx={{ cursor: "pointer" }}
            boxShadow={
              selectedRegion === index && "0.5px 0.5px 2px 0px rgba(0,0,0,0.5)"
            }
          >
            <Box
              sx={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                backgroundImage: `url(${region.flag})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                marginX: "5px",
                ...(selectedRegion !== index && {
                  filter: "grayscale(100%)",
                  opacity: "0.5",
                }),
              }}
            ></Box>
            <Typography
              marginLeft={"10px"}
              color={selectedRegion !== index && "grey"}
            >
              {region.name}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Region;
