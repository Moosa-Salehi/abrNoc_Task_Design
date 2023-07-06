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
  {name: 'Volume', icon: DnsOutlined, disabled: true, endOfGroup: true },
  {name: 'Billing', icon: AttachMoneyOutlined, children: {} },
  {name: 'Networking', icon: WifiOutlined, },
  {name: 'Report', icon: DescriptionOutlined, },
  {name: 'Support', icon: HeadphonesOutlined, bordered: true, spaceUp: true },
  {name: 'Help', icon: HelpOutlineOutlined, bordered: true },
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
        <List sx={{ paddingX:'10px', }}>
          {options.map((option, index) => (
            <>
              <ListItem key={index} disablePadding 
                disabled={option.hasOwnProperty('disabled')} 
                sx={{
                  marginY: '3px',
                  ...(option.hasOwnProperty('spaceUp') && { marginTop: '15vh' }),
                  ...(option.hasOwnProperty('bordered') && { border: '1px solid lightgray', borderRadius: '5px' }),
                }}
              >
                <ListItemButton>
                  <ListItemIcon sx={{ minWidth: '40px', }}>
                    <option.icon />
                  </ListItemIcon>
                  <ListItemText primary={option.name} sx={{ lineHeight: '1.1' }}/>
                </ListItemButton>
              </ListItem>
              {option.hasOwnProperty('endOfGroup') && <Divider />}
            </>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}

export default Sidebar;
