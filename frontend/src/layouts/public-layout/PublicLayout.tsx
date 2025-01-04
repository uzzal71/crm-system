import { Box } from "@mui/material";
import React from "react";
import Footer from "./Footer";

interface IProps {
  children: React.ReactNode;
}

const PublicLayout: React.FC<IProps> = ({ children }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {/* <Header /> */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "#f9f9f9",
          py: 4,
        }}
      >
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default PublicLayout;
