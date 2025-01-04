import { Box } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        textAlign: "center",
        py: 2,
        bgcolor: "#1976d2",
        color: "white",
        mt: "auto",
      }}
    >
      CRM Version 1.0.0
    </Box>
  );
};

export default Footer;
