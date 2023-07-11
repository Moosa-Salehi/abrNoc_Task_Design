import React from "react";
import { Grid, Typography, Checkbox } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { StyledTooltip } from "../../Config";

const SSHkey = () => {
  const selectedSSHkey = useSelector((state) => state.selectedSSHkey);
  const SSHKeys = useSelector((state) => state.SSHKeys);

  const dispatch = useDispatch();

  const handleSSHClick = (index) => {
    const payload = selectedSSHkey === index ? null : index;
    dispatch({ type: "SELECT_SSHKEY", payload: payload });
  };

  return (
    <Grid
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"flex-start"}
      width={"100%"}
      padding={"0px 16px 32px 32px"}
    >
      <Grid display={"flex"} flexDirection={"row"} marginBottom={"20px"}>
        <Typography
          fontWeight={"bold"}
          fontSize={"20px"}
          color={"rgba(0,0,0,0.8)"}
        >
          SSH Key
        </Typography>
        <Typography
          fontWeight={"bold"}
          fontSize={"15px"}
          marginLeft={"5px"}
          position={"relative"}
          top={"3px"}
          color={"rgba(0,0,0,0.5)"}
        >
          (optional)
        </Typography>
      </Grid>
      <Grid
        container
        direction={"row"}
        display={"flex"}
        width={"100%"}
        wrap="wrap"
      >
        <Grid
          display={"flex"}
          justifyContent={"flex-start"}
          alignItems={"center"}
          paddingX={"10px"}
          paddingY={"15px"}
          width={"226px"}
          border={"1.5px solid lightgrey"}
          borderRadius={"5px"}
          marginBottom={"16px"}
          marginRight={"16px"}
          sx={{
            cursor: "pointer",
            "&:hover": { boxShadow: "0.5px 0.5px 3px 0px rgba(0,0,0,0.5)" },
          }}
        >
          <AddCircleOutlineIcon
            sx={{ marginLeft: "10px", color: "rgba(0,0,0,0.8)" }}
          />
          <Typography
            marginLeft={"10px"}
            fontWeight={"bold"}
            color={"rgba(0,0,0,0.8)"}
          >
            Add New
          </Typography>
        </Grid>
        {SSHKeys.map((sshkey, index) => (
          <Grid
            key={index}
            onClick={() => handleSSHClick(index)}
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
              "&:hover": { boxShadow: "0.5px 0.5px 3px 0px rgba(0,0,0,0.5)" },
            }}
            boxShadow={
              selectedSSHkey === index && "0.5px 0.5px 3px 0px rgba(0,0,0,0.5)"
            }
          >
            <Checkbox checked={selectedSSHkey === index} />
            <Typography
              marginLeft={"5px"}
              marginRight={"40px"}
              fontWeight={"bold"}
              color={"rgba(0,0,0,0.8)"}
            >
              {sshkey}
            </Typography>
            <StyledTooltip
              title={
                <React.Fragment>{"...= username@hostname"}</React.Fragment>
              }
            >
              <ErrorOutlineIcon
                color="action"
                sx={{ "&:hover": { color: "black" } }}
              />
            </StyledTooltip>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default SSHkey;
