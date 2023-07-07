import React from "react";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";

const SideBarOption = (props) => {
  return (
    <ListItem
      key={props.index}
      disablePadding
      disabled={props.option.hasOwnProperty("disabled")}
      onClick={() => props.handleOptionClick(props.option)}
      sx={{
        marginY: "3px",
        ...(props.option.hasOwnProperty("spaceUp") && {
          marginTop: "15vh",
        }),
        ...(props.option.hasOwnProperty("firstOption") && {
          marginTop: "3vh",
        }),
        ...(props.option.hasOwnProperty("bordered") && {
          border: "1px solid lightgray",
          borderRadius: "5px",
        }),
        ...(props.option.name == props.activeOption && {
          backgroundColor: "rgb(44,94,255)",
          borderRadius: "5px",
        }),
      }}
    >
      <ListItemButton>
        <ListItemIcon sx={{ minWidth: "40px" }}>
          <props.option.icon
            sx={{
              ...(props.option.name == props.activeOption
                ? { color: "rgb(250,250,250)" }
                : { color: "rgba(0,0,0,0.7)" }),
            }}
          />
        </ListItemIcon>
        <ListItemText
          primary={props.option.name}
          primaryTypographyProps={{
            ...(props.option.name == props.activeOption
              ? { color: "rgb(250,250,250)" }
              : { color: "rgba(0,0,0,0.7)", fontWeight: "bold" }),
          }}
        />
        {props.option.hasOwnProperty("children") ? (
          props.subMenuActive ? (
            <KeyboardArrowUp color="black" />
          ) : (
            <KeyboardArrowDown color="black" />
          )
        ) : null}
      </ListItemButton>
    </ListItem>
  );
};

export default SideBarOption;
