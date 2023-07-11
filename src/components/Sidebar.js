import React, { useState } from "react";
import { Box, Drawer, Divider, List } from "@mui/material";
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
                child={false}
              />
              {option.hasOwnProperty("children") &&
                subMenuActive &&
                option.children.map((childOption, childIndex) => (
                  <SideBarOption
                    option={childOption}
                    index={childIndex}
                    handleOptionClick={handleOptionClick}
                    activeOption={activeOption}
                    subMenuActive={subMenuActive}
                    child={true}
                  />
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
