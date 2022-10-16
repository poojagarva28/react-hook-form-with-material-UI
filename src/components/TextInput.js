import { TextField, Typography } from "@mui/material";
import React from "react";
import { Controller } from "react-hook-form";

export const TextInput = ({ name, control, label, type }) => {
  return (
    <Controller
      name={name}
      control={control}
      //   rules={{ required: "Field is required" }}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <>
          <Typography variant="body2">{label}</Typography>
          <TextField
            type={type}
            onChange={onChange}
            variant="outlined"
            // rules={{ minLengh: 5 }}
            // error={!!error}
            // helperText={error && error.message}
            fullWidth
          />
          {/* {error && <p>{error.message}</p>} */}
        </>
      )}
    />
  );
};
