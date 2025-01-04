import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import { MenuItem } from "./AppLayout";

interface SidebarProps {
  isOpen: boolean;
  drawerWidth: number;
  menuItems: MenuItem[];
}

const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  drawerWidth,
  menuItems,
}) => {
  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={isOpen}
      sx={{
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
    >
      <Toolbar />
      <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <List sx={{ flexGrow: 1 }}>
          {menuItems.map((item, index) => (
            <ListItem
              key={index}
              component={NavLink}
              to={item.path}
              sx={{
                "&.active": {
                  backgroundColor: "rgba(0, 0, 0, 0.1)",
                  "& .MuiListItemIcon-root": { color: "primary.main" },
                },
                "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.08)" },
              }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
