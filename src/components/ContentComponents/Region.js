import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_API_ROUTE } from "../../Config";

const Region = () => {
  const [regions, setRegions] = useState([]);
  const [countryFlags, setCountryFlags] = useState([]);

  useEffect(() => {
    const getRegions = async () => {
      const url = BASE_API_ROUTE + "/regions";
      try {
        const response = await axios.get(url);
        // console.log("response in getting regions : ", response);
        setRegions(response.data);
      } catch (error) {
        console.log("error in getting regions : ", error);
      }
    };

    const getCountryFlags = async () => {
      try {
        const countryCodes = await axios.get(
          "https://flagcdn.com/en/codes.json"
        );
        regions.forEach((region) => {
          const regionName =
            region.name === "US" ? "United States" : region.name;
          for (const key in countryCodes.data) {
            if (regionName === countryCodes.data[key]) {
              setCountryFlags((prevCountryFlags) => [
                ...prevCountryFlags,
                `https://flagcdn.com/w80/${key}.png`,
              ]);
            }
          }
        });
      } catch (error) {
        console.log("error in getting Country Flags : ", error, ";");
      }
    };

    getRegions();
    if (countryFlags.length == 0) getCountryFlags();
  }, []);

  return <></>;
};

export default Region;
