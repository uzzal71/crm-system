import {
  Box,
  Button,
  Container,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import PublicLayout from "../layouts/public-layout/PublicLayout";

const CreateCampaign = () => {
  return (
    <PublicLayout>
      <Container
        maxWidth="sm"
        sx={{
          mt: 4,
          p: 3,
          bgcolor: "white",
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Typography variant="h5" gutterBottom align="center">
          Create Campaign
        </Typography>
        <Box
          component="form"
          noValidate
          autoComplete="off"
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          <TextField
            label="Campaign Name"
            variant="outlined"
            fullWidth
            required
          />
          <TextField
            label="Message Content"
            variant="outlined"
            fullWidth
            required
            multiline
            rows={4}
          />
          <TextField label="Type" variant="outlined" select fullWidth required>
            <MenuItem value="email">Email</MenuItem>
            <MenuItem value="phone">Phone</MenuItem>
          </TextField>
          <Button
            variant="contained"
            component="label"
            sx={{
              textTransform: "none",
              backgroundColor: "#1976d2",
              color: "white",
            }}
          >
            Upload Recipient List
            <input type="file" hidden />
          </Button>
          <TextField
            label="Schedule Time"
            type="datetime-local"
            variant="outlined"
            fullWidth
            required
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Button variant="contained" type="submit" fullWidth sx={{ py: 1.5 }}>
            Create Campaign
          </Button>
        </Box>
      </Container>
    </PublicLayout>
  );
};

export default CreateCampaign;
