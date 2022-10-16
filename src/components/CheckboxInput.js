import {
  Checkbox,
  FormControl,
  FormControlLabel,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { Controller } from "react-hook-form";

const options = [
  {
    label: "Basketball",
    value: "Basketball",
  },
  {
    label: "Football",
    value: "Football",
  },
];

const CheckboxInput = ({ name, control, setValue, label }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelect = (value) => {
    const isPresent = selectedItems.indexOf(value);
    if (isPresent !== -1) {
      const remaining = selectedItems.filter((item) => item !== value);
      setSelectedItems(remaining);
    } else {
      setSelectedItems((prevItems) => [...prevItems, value]);
    }
  };

  useEffect(() => {
    setValue(name, selectedItems);
  }, [selectedItems, name, setValue]);

  return (
    <FormControl size={"small"} variant={"outlined"}>
      <Typography variant="body2">{label}</Typography>

      <div>
        {options.map((option) => {
          return (
            <FormControlLabel
              control={
                <Controller
                  name={name}
                  render={({ fieldState: { error } }) => {
                    return (
                      <>
                        <Checkbox
                          checked={selectedItems.includes(option.value)}
                          onChange={() => handleSelect(option.value)}
                        />
                      </>
                    );
                  }}
                  control={control}
                />
              }
              label={option.label}
              key={option.value}
            />
          );
        })}
      </div>
    </FormControl>
  );
};

export default CheckboxInput;
