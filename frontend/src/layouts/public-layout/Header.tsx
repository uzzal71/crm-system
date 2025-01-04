import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="static" sx={{ backgroundColor: "#1976d2" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          variant="h6"
          component="div"
          sx={{ cursor: "pointer" }}
          onClick={() => {
            navigate("/");
          }}
        >
          CRM
        </Typography>
        <Button
          color="inherit"
          sx={{ textTransform: "none" }}
          onClick={() => {
            navigate("/create-campaign");
          }}
        >
          Create Campaign
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
