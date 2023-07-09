import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_API_ROUTE } from "../../Config";
import { Grid, Typography } from "@mui/material";

const Region = () => {
  const [regions, setRegions] = useState([]);

  useEffect(() => {
    const getRegions = async () => {
      if (regions.length > 0) return;
      try {
        const response = await axios.get(BASE_API_ROUTE + "/regions");
        const countryCodes = await axios.get(
          "https://flagcdn.com/en/codes.json"
        );
        // console.log("response in getting regions : ", response);
        response.data.forEach((region) => {
          const regionName =
            region.name === "US" ? "United States" : region.name;
          for (const key in countryCodes.data) {
            if (regionName === countryCodes.data[key]) {
              setRegions((prevRegions) => [
                ...prevRegions,
                {
                  ...region,
                  flag: `https://flagcdn.com/w80/${key}.png`,
                },
              ]);
            }
          }
        });
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
    >
      <Typography>Region</Typography>
      <Grid display={"flex"} flexDirection={"row"}>
        {regions.map((region, index) => (
          <Grid
            key={index}
            display={"flex"}
            justifyContent={"flex-start"}
            alignItems={"center"}
            padding={"10px"}
            minWidth={"226px"}
            border={"1px solid blue"}
          >
            <img src={region.flag} width="80" alt="country flag" />
            <Typography>{region.name}</Typography>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Region;
