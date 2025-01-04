import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import React from "react";
import { SelectOption } from "../../ts-type/generated";

interface ISelect {
  options: { name: string; value: string }[];
  color: string;
  selectedOption: string;
  setSelect: (e: string) => void;
  size?: string;
  error?: any;
  multiple?: boolean;
  placeholder?: string;
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 5;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: "auto",
    },
  },
};

const SelectMd: React.FC<ISelect> = ({
  options,
  color,
  selectedOption,
  setSelect,
  size,
  error,
  multiple,
  placeholder,
}) => {
  return (
    <Select
      displayEmpty
      multiple={multiple ? multiple : false}
      error={error && error.source}
      labelId="demo-simple-select-label"
      sx={{
        m: 1,
        width: "100%",
        margin: "0px",
        bgcolor: color,
        "& .MuiInputBase-input": { padding: size ? size : "6px 15px" },
      }}
      value={selectedOption}
      onChange={(event: SelectChangeEvent) =>
        setSelect(event.target.value as string)
      }
      className="select-md"
      MenuProps={MenuProps}
    >
      {placeholder && (
        <MenuItem disabled value="">
          <em>{placeholder}</em>
        </MenuItem>
      )}

      {options.length > 0 &&
        options.map((src: SelectOption, index: number) => (
          <MenuItem key={index} value={src.value}>
            {src.name}
          </MenuItem>
        ))}
    </Select>
  );
};
export default SelectMd;
