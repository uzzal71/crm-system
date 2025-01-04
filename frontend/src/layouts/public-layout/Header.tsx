import { AppBar, Button, Toolbar, Typography } from "@mui/material";

const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#1976d2" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" component="div">
          CRM
        </Typography>
        <Button color="inherit" sx={{ textTransform: "none" }}>
          Create Campaign
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
