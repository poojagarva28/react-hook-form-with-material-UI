import { FormControlLabel, Radio, RadioGroup, Typography } from "@mui/material";
import React from "react";
import { Controller } from "react-hook-form";

const options = [
  {
    label: "Male",
    value: "Male",
  },
  {
    label: "Female",
    value: "Female",
  },
];

const RadioInput = ({ name, control, label }) => {
  const generateRadioOptions = () => {
    return options.map((singleOption) => (
      <FormControlLabel
        key={singleOption.label}
        value={singleOption.value}
        label={singleOption.label}
        control={<Radio />}
      />
    ));
  };
  return (
    <>
      <Typography variant="body2">{label}</Typography>
      <Controller
        name={name}
        control={control}
        // rules={{ required: "Select one option" }}
        render={({ field: { onChange }, fieldState: { error } }) => (
          <>
            <RadioGroup onChange={onChange}>
              {generateRadioOptions()}
              {/* {error && error.message} */}
            </RadioGroup>
          </>
        )}
      />
    </>
  );
};

export default RadioInput;
