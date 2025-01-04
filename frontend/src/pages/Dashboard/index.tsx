import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import PrivateLayout from "../../layouts/private-layout/PrivateLayout";

const Dashboard = () => {
  return (
    <PrivateLayout>
      <Box sx={{ padding: 3 }}>
        <Typography variant="h5" fontWeight="bolder" gutterBottom>
          Campaign Delivery Metrics
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
            Campaign Performance
          </Typography>
        </Box>
      </Box>
    </PrivateLayout>
  );
};

export default Dashboard;
