import { TableRow } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  borderBottom: "1px solid #ccc",
  "&:nth-of-type(even)": {
    backgroundColor: "#f9f9f9",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    borderBottom: 0,
  },
}));
