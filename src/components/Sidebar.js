import React from "react";
import { Box, Drawer, Toolbar, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { DashboardOutlined, LocalHospitalOutlined, ContentCopyOutlined, VpnKeyOutlined, DnsOutlined, 
  AttachMoneyOutlined, WifiOutlined, DescriptionOutlined, HeadphonesOutlined, HelpOutlineOutlined, } from '@mui/icons-material';

const drawerWidth = 240;
const options = [
  {name: 'Dashboard', icon: DashboardOutlined, },
  {name: 'Instances', icon: LocalHospitalOutlined, },
  {name: 'Snapshots', icon: ContentCopyOutlined, },
  {name: 'SSH Keys', icon: VpnKeyOutlined, },
  {name: 'Volume', icon: DnsOutlined, },
  {name: 'Billing', icon: AttachMoneyOutlined, },
  {name: 'Networking', icon: WifiOutlined, },
  {name: 'Report', icon: DescriptionOutlined, },
  {name: 'Support', icon: HeadphonesOutlined, },
  {name: 'Help', icon: HelpOutlineOutlined, },
];

const Sidebar = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          {options.map((option, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <option.icon/>
                </ListItemIcon>
                <ListItemText primary={option.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}

export default Sidebar;
