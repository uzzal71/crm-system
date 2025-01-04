import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#edeff0",
    border: "1px solid #d1d6da",
    fontWeight: "700",
    fontSize: "14px",
    whiteSpace: "nowrap",
    padding: "7px 14px",
    "& .table-align": {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      cursor: "pointer",
    },
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: "14px",
    color: "#222c3c",
    whiteSpace: "nowrap",
    border: "1px solid #d1d6da",
    padding: "12px",
  },
  [`& .text-negative`]: {
    border: "2px solid #ff0000",
    padding: " 13px 10px",
  },
  [`& .text-positive`]: {
    border: "2px solid green",
    padding: " 13px 10px",
  },
}));
