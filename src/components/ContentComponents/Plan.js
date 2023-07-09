import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_API_ROUTE } from "../../Config";
import { Box, Grid, Typography } from "@mui/material";

const Plan = () => {
  const [plans, setPlans] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState(0);

  useEffect(() => {
    const getPlans = async () => {
      if (plans.length > 0) return;
      try {
        const response = await axios.get(
          BASE_API_ROUTE + `/plans?region=${"US"}`
        );
        setPlans(response.data);
        console.log("response in getting plans : ", response);
      } catch (error) {
        console.log("error in getting plans : ", error);
      }
    };
    getPlans();
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
        plan
      </Typography>
      <Grid
        container
        direction={"column"}
        display={"flex"}
        width={"100%"}
        wrap="wrap"
      >
        {plans.map((plan, index) => (
          <Grid
            key={index}
            onClick={() => setSelectedPlan(index)}
            display={"flex"}
            justifyContent={"flex-start"}
            alignItems={"center"}
            padding={"10px"}
            // width={"226px"}
            // border={
            //   selectedPlan === index
            //     ? "3px solid rgb(44,94,255)"
            //     : "1.5px solid lightgrey"
            // }
            // borderRadius={"5px"}
            // marginBottom={"16px"}
            // marginRight={"16px"}
            // sx={{ cursor: "pointer" }}
            // boxShadow={
            //   selectedPlan === index && "0.5px 0.5px 2px 0px rgba(0,0,0,0.5)"
            // }
          >
            <Typography
              marginLeft={"10px"}
              // color={selectedPlan !== index && "grey"}
            >
              {/* {plan.name} */}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Plan;
