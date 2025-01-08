import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import AppLayout from "../../layouts/private-layout/AppLayout";

const Dashboard = () => {
  return (
    <AppLayout>
      <Box sx={{ padding: 3 }}>
        <Typography variant="h5" fontWeight="bolder" gutterBottom>
          Dashboard
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Card sx={{ backgroundColor: "#009688", color: "#fff" }}>
              <CardContent>
                <Typography variant="h6">Success Rate</Typography>
                <Typography variant="h4">85%</Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={{ backgroundColor: "#880e4f", color: "#fff" }}>
              <CardContent>
                <Typography variant="h6">Failure Rate</Typography>
                <Typography variant="h4">10%</Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={{ backgroundColor: "#0d47a1", color: "#fff" }}>
              <CardContent>
                <Typography variant="h6">Open Rate</Typography>
                <Typography variant="h4">75%</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Box sx={{ marginTop: 4 }}>
          <Typography variant="h6" gutterBottom>
            Dashboard Visualization
          </Typography>
        </Box>
      </Box>
    </AppLayout>
  );
};

export default Dashboard;
