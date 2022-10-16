import React, { useEffect, useState } from "react";
import { Slider } from "@mui/material";
import { Controller } from "react-hook-form";
import { Typography } from "@mui/material";

const SliderInput = ({ name, control, setValue, label }) => {
  const [sliderValue, setSliderValue] = useState(30);

  useEffect(() => {
    if (sliderValue) setValue(name, sliderValue);
  }, [sliderValue, name, setValue]);

  const handleChange = (event, newValue) => {
    setSliderValue(newValue);
  };

  return (
    <>
      <Typography variant="body2">{label}</Typography>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState, formState }) => (
          <Slider
            value={sliderValue}
            onChange={handleChange}
            valueLabelDisplay="auto"
            min={0}
            max={100}
            step={1}
          />
        )}
      />
    </>
  );
};

export default SliderInput;
