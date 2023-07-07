import React from "react";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";

const SideBarOption = (option, index, handleOptionClick, activeOption) => {
  return (
    <ListItem
      key={index}
      disablePadding
      disabled={option.hasOwnProperty("disabled")}
      onClick={() => handleOptionClick(option)}
      sx={{
        marginY: "3px",
        ...(option.hasOwnProperty("spaceUp") && {
          marginTop: "15vh",
        }),
        ...(option.hasOwnProperty("firstOption") && {
          marginTop: "3vh",
        }),
        ...(option.hasOwnProperty("bordered") && {
          border: "1px solid lightgray",
          borderRadius: "5px",
        }),
        ...(option.name == activeOption && {
          backgroundColor: "rgb(44,94,255)",
          borderRadius: "5px",
        }),
      }}
    >
      <ListItemButton>
        <ListItemIcon sx={{ minWidth: "40px" }}>
          <option.icon
            sx={{
              ...(option.name == activeOption
                ? { color: "rgb(250,250,250)" }
                : { color: "rgba(0,0,0,0.7)" }),
            }}
          />
        </ListItemIcon>
        <ListItemText
          primary={option.name}
          primaryTypographyProps={{
            ...(option.name == activeOption
              ? { color: "rgb(250,250,250)" }
              : { color: "rgba(0,0,0,0.7)", fontWeight: "bold" }),
          }}
        />
        {option.hasOwnProperty("children") ? (
          subMenuActive ? (
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
