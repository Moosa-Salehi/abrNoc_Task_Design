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
import {
  DashboardOutlined,
  LocalHospitalOutlined,
  ContentCopyOutlined,
  VpnKeyOutlined,
  DnsOutlined,
  AttachMoneyOutlined,
  WifiOutlined,
  DescriptionOutlined,
  HeadphonesOutlined,
  HelpOutlineOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  LooksOneOutlined,
  LooksTwoOutlined,
  Looks3Outlined,
} from "@mui/icons-material";
import cloudzypic from "../assets/images/Cloudzy.webp";

const drawerWidth = "260px";
const options = [
  { name: "Dashboard", icon: DashboardOutlined, firstOption: true },
  { name: "Instances", icon: LocalHospitalOutlined },
  { name: "Snapshots", icon: ContentCopyOutlined },
  { name: "SSH Keys", icon: VpnKeyOutlined },
  { name: "Volume", icon: DnsOutlined, disabled: true, endOfGroup: true },
  {
    name: "Billing",
    icon: AttachMoneyOutlined,
    children: [
      { name: "item 1", icon: LooksOneOutlined },
      { name: "item 2", icon: LooksTwoOutlined },
      { name: "item 3", icon: Looks3Outlined },
    ],
  },
  { name: "Networking", icon: WifiOutlined },
  { name: "Report", icon: DescriptionOutlined },
  { name: "Support", icon: HeadphonesOutlined, bordered: true, spaceUp: true },
  { name: "Help", icon: HelpOutlineOutlined, bordered: true },
];

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
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Box
          sx={{
            my: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={cloudzypic}
            alt="cloudzypic"
            width={"150px"}
            height={"40px"}
          />
        </Box>
        <Divider />
        <List sx={{ paddingX: "20px" }}>
          {options.map((option, index) => (
            <>
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
