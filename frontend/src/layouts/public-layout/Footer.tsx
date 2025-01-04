import { Box } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        textAlign: "center",
        py: 2,
        bgcolor: "#f9f9f9",
        color: "#000",
        mt: "auto",
        fontWeight: "bold",
        textTransform: "uppercase",
      }}
    >
      CRM Version 1.0.0
    </Box>
  );
};

export default Footer;
