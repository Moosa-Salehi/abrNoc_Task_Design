import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_API_ROUTE } from "../../Config";

const Region = () => {
  const [regions, setRegions] = useState([]);

  useEffect(() => {
    const getRegions = async () => {
      const url = BASE_API_ROUTE + "/regions";
      try {
        const response = await axios.get(url);
        // console.log("response in getting regions : ", response);
        setRegions(response.data);
        console.log(response.data);
      } catch (error) {
        console.log("error in getting regions : ", error);
      }
    };
    getRegions();
  }, []);

  return <></>;
};

export default Region;
