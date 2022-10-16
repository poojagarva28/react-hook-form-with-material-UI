import { DateTimePicker } from "@mui/lab";
import { TextField } from "@mui/material";
import React, { useState } from "react";
// import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { Controller } from "react-hook-form";

const DateInput = ({ name, label, control }) => {
  const [value, setValue] = useState("");

  const handleChange = (newValue) => {
    setValue(newValue);
  };
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState, formState }) => (
        <DateTimePicker
          label="Date&Time picker"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
      )}
    />
  );
};

export default DateInput;
