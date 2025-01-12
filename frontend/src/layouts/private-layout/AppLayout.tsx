import {
  Dashboard as DashboardIcon,
  Settings as SettingsIcon,
  FormatListBulleted as TodoIcon,
  People as UserIcon,
} from "@mui/icons-material";
import {
  BiPodcast,
  BiSolidBarChartAlt2,
  BiSolidLandmark,
  BiSolidMagnet,
} from "react-icons/bi";
import { DiJira } from "react-icons/di";
import { FaUserGraduate } from "react-icons/fa";
import { GoGift, GoTable } from "react-icons/go";

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
      icon: <GoGift size={20} />,
      path: "/products",
    },
    { label: "Leads", icon: <DiJira size={24} />, path: "/leads" },
    { label: "Sales", icon: <GoTable size={20} />, path: "/sales" },
    { label: "Marketing", icon: <BiPodcast size={20} />, path: "/marketing" },
    { label: "Tasks", icon: <TodoIcon />, path: "/tasks" },
    {
      label: "Reports",
      icon: <BiSolidBarChartAlt2 size={20} />,
      path: "/reports",
    },
    {
      label: "Support Ticket",
      icon: <BiSolidMagnet size={20} />,
      path: "/support-ticket",
    },

    { label: "Users", icon: <UserIcon />, path: "/users" },
    { label: "Todos", icon: <BiSolidLandmark size={20} />, path: "/todos" },
    { label: "Settings", icon: <SettingsIcon />, path: "/settings" },
  ];

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Box sx={{ display: "flex", height: "100vh", backgroundColor: "#f1f1f1" }}>
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
        <div style={{ backgroundColor: "#ffffff" }}>{children}</div>
      </Box>
    </Box>
  );
};

export default AppLayout;
