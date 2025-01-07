import {
  Dashboard as DashboardIcon,
  Settings as SettingsIcon,
  FormatListBulleted as TodoIcon,
  People as UserIcon,
} from "@mui/icons-material";
import { FaUserGraduate } from "react-icons/fa";

import { Box, Toolbar } from "@mui/material";
import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

interface IProps {
  children: React.ReactNode;
}

export interface MenuItem {
  label: string;
  icon: React.ReactNode;
  path: string;
}

const drawerWidth = 240;

const AppLayout: React.FC<IProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const menuItems: MenuItem[] = [
    { label: "Dashboard", icon: <DashboardIcon />, path: "/dashboard" },
    { label: "Customers", icon: <FaUserGraduate />, path: "/customers" },
    {
      label: "Products",
      icon: <FaUserGraduate />,
      path: "/products",
    },
    { label: "Leads", icon: <FaUserGraduate />, path: "/leads" },
    { label: "Sales", icon: <FaUserGraduate />, path: "/sales" },
    { label: "Marketing", icon: <FaUserGraduate />, path: "/marketing" },
    { label: "Tasks", icon: <TodoIcon />, path: "/tasks" },
    {
      label: "Reports",
      icon: <FaUserGraduate />,
      path: "/reports",
    },
    {
      label: "Support Ticketing",
      icon: <FaUserGraduate />,
      path: "/support-ticket",
    },

    { label: "Users", icon: <UserIcon />, path: "/users" },
    { label: "Todos", icon: <TodoIcon />, path: "/todos" },
    { label: "Settings", icon: <SettingsIcon />, path: "/settings" },
  ];

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar
        isOpen={sidebarOpen}
        drawerWidth={drawerWidth}
        menuItems={menuItems}
      />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          marginLeft: sidebarOpen ? `${drawerWidth}px` : 0,
          transition: "margin-left 0.3s",
          p: 3,
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default AppLayout;
