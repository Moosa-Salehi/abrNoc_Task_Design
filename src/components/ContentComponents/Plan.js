import React, { useEffect } from "react";
import axios from "axios";
import { BASE_API_ROUTE } from "../../Config";
import {
  Grid,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Box,
} from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { useSelector, useDispatch } from "react-redux";
import { StyledTooltip } from "../../Config";

const Plan = () => {
  const plans = useSelector((state) => state.plans);
  const selectedPlan = useSelector((state) => state.selectedPlan);
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
        dispatch({ type: "SET_PLANS", payload: response.data });
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
    >
      <Typography
        marginBottom={"20px"}
        marginLeft={"32px"}
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
            justifyContent={"flex-start"}
            alignItems={"center"}
            borderBottom={"1px solid lightgray"}
            paddingLeft={"80px"}
            paddingRight={"16px"}
            height={"56px"}
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
                fontSize={"14px"}
                color={"rgba(0,0,0,0.8)"}
                width={"20%"}
              >
                {header}
              </Typography>
            ))}
          </Grid>
          <RadioGroup
            id="PlansRadioGroup"
            aria-labelledby="Headers"
            defaultValue={0}
            value={selectedPlan}
            onChange={(event) =>
              dispatch({ type: "SELECT_PLAN", payload: event.target.value })
            }
          >
            {plans.map((plan, index) => (
              <Grid
                display={"flex"}
                flexDirection={"row"}
                borderBottom={"1px solid lightgray"}
                paddingLeft={"32px"}
                paddingRight={"16px"}
                height={"56px"}
              >
                <FormControlLabel
                  value={index}
                  control={<Radio />}
                  id={`Plan${index}`}
                  aria-labelledby={`LabelPlan${index}`}
                />
                <Grid
                  container
                  direction={"row"}
                  key={index}
                  id={`LabelPlan${index}`}
                  role="label"
                  htmlFor={`Plan${index}`}
                  display={"flex"}
                  justifyContent={"flex-start"}
                  alignItems={"center"}
                >
                  {[
                    `${plan.cpu_cores} CPU`,
                    `${plan.memory_size_in_GB} GB`,
                    `${plan.memory_size_in_GB * 15} GB`,
                    `Up to ${plan.connection_up_bound_speed} Gbps`,
                    `$ ${plan.monthly_price.toFixed(2)}`,
                  ].map((item, itemIindex) => (
                    <>
                      {itemIindex === 4 ? (
                        <Box
                          display={"flex"}
                          flexDirection={"row"}
                          width={"20%"}
                        >
                          <Typography
                            key={itemIindex}
                            fontSize={"15px"}
                            color={"rgba(0,0,0,0.8)"}
                            marginRight={"25%"}
                          >
                            {item}
                          </Typography>
                          <StyledTooltip
                            title={
                              <React.Fragment>
                                {`${plan.hourly_price} /hour`}
                              </React.Fragment>
                            }
                          >
                            <ErrorOutlineIcon
                              color="action"
                              sx={{ "&:hover": { color: "black" } }}
                            />
                          </StyledTooltip>
                        </Box>
                      ) : (
                        <Typography
                          key={itemIindex}
                          fontSize={"15px"}
                          color={"rgba(0,0,0,0.8)"}
                          width={"20%"}
                        >
                          {item}
                        </Typography>
                      )}
                    </>
                  ))}
                </Grid>
              </Grid>
            ))}
          </RadioGroup>
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default Plan;
