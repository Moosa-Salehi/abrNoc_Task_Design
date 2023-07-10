import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_API_ROUTE } from "../../Config";
import {
  Grid,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
} from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { useSelector, useDispatch } from "react-redux";

const Plan = () => {
  const [plans, setPlans] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState(0);
  const regions = useSelector((state) => state.regions);
  const selectedRegion = useSelector((state) => state.selectedRegion);

  const dispatch = useDispatch();

  useEffect(() => {
    const getPlans = async () => {
      try {
        const response = await axios.get(
          BASE_API_ROUTE +
            `/plans?region=${
              regions[selectedRegion] ? regions[selectedRegion].name : "US"
            }`
        );
        setPlans(response.data);
        // console.log("response in getting plans : ", response);
      } catch (error) {
        console.log("error in getting plans : ", error);
      }
    };
    getPlans();
  }, [selectedRegion]);

  return (
    <Grid
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"flex-start"}
      width={"100%"}
      // paddingLeft={"32px"}
      // paddingRight={"16px"}
      // paddingY={"32px"}
    >
      <Typography
        marginBottom={"20px"}
        fontWeight={"bold"}
        fontSize={"20px"}
        color={"rgba(0,0,0,0.8)"}
      >
        Plan
      </Typography>
      <Grid
        container
        direction={"column"}
        display={"flex"}
        width={"100%"}
        wrap="wrap"
      >
        <FormControl>
          <Grid
            id="Headers"
            role="label"
            htmlFor="PlansRadioGroup"
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"space-evenly"}
            alignItems={"center"}
            borderBottom={"1px solid lightgray"}
          >
            {[
              "CPU",
              "Memory",
              "Storage",
              "Connection speed",
              "Monthly price",
            ].map((header, index) => (
              <Typography
                key={index}
                fontWeight={"bold"}
                fontSize={"13px"}
                color={"rgba(0,0,0,0.8)"}
              >
                {header}
              </Typography>
            ))}
          </Grid>
          <RadioGroup
            id="PlansRadioGroup"
            aria-labelledby="Headers"
            defaultValue={0}
          >
            {plans.map((plan, index) => (
              <>
                <Grid
                  key={index}
                  id={`LabelPlan${index}`}
                  role="label"
                  htmlFor={`Plan${index}`}
                  onClick={() => setSelectedPlan(index)}
                  display={"flex"}
                  justifyContent={"flex-start"}
                  alignItems={"center"}
                  // padding={"10px"}
                  // width={"226px"}
                  // border={
                  //   selectedPlan === index
                  //     ? "3px solid rgb(44,94,255)"
                  //     : "1.5px solid lightgrey"
                  // }
                  // marginBottom={"16px"}
                  // marginRight={"16px"}
                  // sx={{ cursor: "pointer" }}
                >
                  <Typography
                    marginLeft={"10px"}
                    fontSize={"15px"}
                    color={"rgba(0,0,0,0.8)"}
                  >
                    {plan.cpu_cores} CPU
                  </Typography>
                  <Typography
                    marginLeft={"10px"}
                    fontSize={"15px"}
                    color={"rgba(0,0,0,0.8)"}
                  >
                    {plan.memory_size_in_GB} GB
                  </Typography>
                  <Typography
                    marginLeft={"10px"}
                    fontSize={"15px"}
                    color={"rgba(0,0,0,0.8)"}
                  >
                    {plan.memory_size_in_GB * 15} GB
                  </Typography>
                  <Typography
                    marginLeft={"10px"}
                    fontSize={"15px"}
                    color={"rgba(0,0,0,0.8)"}
                  >
                    Up to {plan.connection_up_bound_speed} Gbps
                  </Typography>
                  <Typography
                    marginLeft={"10px"}
                    fontSize={"15px"}
                    color={"rgba(0,0,0,0.8)"}
                  >
                    $ {plan.monthly_price.toFixed(2)}
                  </Typography>
                  <ErrorOutlineIcon />
                </Grid>

                <FormControlLabel
                  value={index}
                  control={<Radio />}
                  id={`Plan${index}`}
                  aria-labelledby={`LabelPlan${index}`}
                />
              </>
            ))}
          </RadioGroup>
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default Plan;
