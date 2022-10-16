import React from "react";
import { Controller } from "react-hook-form";
import { FormControl, MenuItem, Select, Typography } from "@mui/material";

const options = [
  {
    label: "Dropdown Option 1",
    value: "Dropdown 1",
  },
  {
    label: "Dropdown Option 2",
    value: "Dropdown 2",
  },
];

const FormInputDropdown = ({ name, control, label }) => {
  const generateSingleOptions = () => {
    return options.map((option) => {
      return (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      );
    });
  };

  return (
    <FormControl size={"small"}>
      <Typography variant="body2">{label}</Typography>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <Select onChange={onChange} value={value}>
            {generateSingleOptions()}
          </Select>
        )}
      />
    </FormControl>
  );
};

export default FormInputDropdown;
