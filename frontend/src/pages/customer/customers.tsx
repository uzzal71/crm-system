import {
  Box,
  Button,
  SelectChangeEvent,
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
import { selectData } from "../../data";
import AppLayout from "../../layouts/private-layout/AppLayout";

const Customers = () => {
  const [page, setPage] = useState(1);
  const [rowsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [campaignType, setCampaignType] = useState<"all" | "email" | "phone">(
    "all"
  );

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  const handleChange = (e: SelectChangeEvent<"all" | "email" | "phone">) => {
    setCampaignType(e.target.value as "all" | "email" | "phone");
  };

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
            Customers
          </Typography>
          <Button variant="contained" color="primary" component={Link} to="#">
            New Customer
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
            Search By
          </Typography>
          <TextField
            label="Search Customer"
            variant="outlined"
            fullWidth
            value={searchTerm}
            sx={{ minWidth: "200px" }}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSearchTerm(e.target.value)
            }
          />
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
              <TableBody></TableBody>
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
          <Pagination count={0} page={0} changeEvent={handlePageChange} />
        </Box>
      </Box>
    </AppLayout>
  );
};

export default Customers;
