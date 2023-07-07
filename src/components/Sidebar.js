import React, { useState } from "react";
import {
  Box,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { SideBarOptions, SideBarWidth } from "../Config";
import CloudzyPicture from "./SidebarComponents/CloudzyPicture";
import SideBarOption from "./SidebarComponents/SideBarOption";

const Sidebar = () => {
  const [activeOption, setActiveOption] = useState("Instances");
  const [subMenuActive, setSubMenuActive] = useState(false);

  const handleOptionClick = (option) => {
    if (option.hasOwnProperty("disabled")) return;
    if (option.hasOwnProperty("children")) {
      setSubMenuActive((prevSubMenuActive) => !prevSubMenuActive);
      return;
    }
    setActiveOption(option.name);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        sx={{
          width: SideBarWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: SideBarWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <CloudzyPicture />
        <Divider />
        <List sx={{ paddingX: "20px" }}>
          {SideBarOptions.map((option, index) => (
            <>
              <SideBarOption
                option={option}
                index={index}
                handleOptionClick={handleOptionClick}
                activeOption={activeOption}
                subMenuActive={subMenuActive}
              />
              {option.hasOwnProperty("children") &&
                subMenuActive &&
                option.children.map((childOption, chiledIndex) => (
                  <ListItem
                    key={chiledIndex}
                    disablePadding
                    onClick={() => handleOptionClick(childOption)}
                    sx={{
                      marginY: "3px",
                      marginLeft: "15px",
                      ...(childOption.name == activeOption && {
                        backgroundColor: "rgb(44,94,255)",
                        borderRadius: "5px",
                      }),
                    }}
                  >
                    <ListItemButton>
                      <ListItemIcon sx={{ minWidth: "40px" }}>
                        <childOption.icon
                          sx={{
                            ...(childOption.name == activeOption
                              ? { color: "rgb(250,250,250)" }
                              : { color: "rgba(0,0,0,0.7)" }),
                          }}
                        />
                      </ListItemIcon>
                      <ListItemText
                        primary={childOption.name}
                        primaryTypographyProps={{
                          ...(childOption.name == activeOption
                            ? { color: "rgb(250,250,250)" }
                            : { color: "rgba(0,0,0,0.7)", fontWeight: "bold" }),
                        }}
                      />
                    </ListItemButton>
                  </ListItem>
                ))}
              {option.hasOwnProperty("endOfGroup") && <Divider />}
            </>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

export default Sidebar;
