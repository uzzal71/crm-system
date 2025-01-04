import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "../../components/ui/pagination";
import SelectMd from "../../components/ui/SelectMd";
import { StyledTableCell } from "../../components/ui/table/StyledTableCell";
import { StyledTableRow } from "../../components/ui/table/StyledTableRow";
import { selectData } from "../../data";
import AppLayout from "../../layouts/private-layout/AppLayout";

const CampaignList = () => {
  const [page, setPage] = useState(1);
  const [rowsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [campaignType, setCampaignType] = useState("All");

  const totalCampaigns = 50; // Example total campaigns
  const campaigns = Array.from({ length: rowsPerPage }, (_, i) => ({
    id: i + 1 + (page - 1) * rowsPerPage,
    name: `Campaign ${i + 1 + (page - 1) * rowsPerPage}`,
    type: i % 2 === 0 ? "Email" : "Phone",
    status: i % 2 === 0 ? "Active" : "Inactive",
  }));

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  const filteredCampaigns = campaigns.filter(
    (campaign) =>
      campaign.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (campaignType === "All" || campaign.type === campaignType)
  );

  return (
    <AppLayout>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          p: 3,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#fff",
            mb: 3,
          }}
        >
          <Typography variant="h5" fontWeight="bold">
            Campaigns
          </Typography>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/campaign-create"
          >
            New Campaign
          </Button>
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: 2,
            alignItems: "center",
            mb: 3,
            width: "600px",
          }}
        >
          <Typography
            variant="body1"
            sx={{ width: "150px", fontWeight: "bold" }}
          >
            Filter By
          </Typography>
          <TextField
            label="Search Campaigns"
            variant="outlined"
            fullWidth
            value={searchTerm}
            sx={{ minWidth: "200px" }}
          />
          <FormControl variant="outlined" sx={{ minWidth: 200 }}>
            <InputLabel id="campaign-type-label">Campaign Type</InputLabel>
            <Select
              labelId="campaign-type-label"
              value={campaignType}
              label="Campaign Type"
            >
              <MenuItem value="All">All</MenuItem>
              <MenuItem value="Email">Email</MenuItem>
              <MenuItem value="Phone">Phone</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box
          sx={{
            flex: 1,
            overflow: "auto",
            mb: 2,
          }}
        >
          <TableContainer>
            <Table aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>ID</StyledTableCell>
                  <StyledTableCell>Name</StyledTableCell>
                  <StyledTableCell>Type</StyledTableCell>
                  <StyledTableCell>Status</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredCampaigns.map((campaign) => (
                  <StyledTableRow key={campaign.id}>
                    <StyledTableCell>{campaign.id}</StyledTableCell>
                    <StyledTableCell>{campaign.name}</StyledTableCell>
                    <StyledTableCell>{campaign.type}</StyledTableCell>
                    <StyledTableCell>{campaign.status}</StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div className="showRecord">
            <h5 style={{ width: "100%" }} className="showTitle">
              Show Rows
            </h5>
            <SelectMd
              options={selectData}
              color="#fff"
              setSelect={(e: string) => {}}
              selectedOption={"10"}
            />
          </div>
          <Pagination
            count={Math.ceil(totalCampaigns / rowsPerPage)}
            page={page}
            changeEvent={handlePageChange}
          />
        </Box>
      </Box>
    </AppLayout>
  );
};

export default CampaignList;
