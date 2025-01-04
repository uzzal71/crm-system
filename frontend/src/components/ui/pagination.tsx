import MuiPagination from "@mui/material/Pagination";
import React from "react";

interface IPage {
  count: number;
  page: number;
  changeEvent: (event: React.ChangeEvent<unknown>, value: number) => void;
}

const Pagination: React.FC<IPage> = ({ count, page, changeEvent }) => {
  return (
    <MuiPagination
      count={count}
      page={page}
      onChange={changeEvent}
      variant="outlined"
      shape="rounded"
      sx={{
        "& .Mui-selected": {
          backgroundColor: "rgba(0, 0, 0, 0.12) !important",
        },
        margin: "5px",
      }}
    />
  );
};

export default Pagination;
