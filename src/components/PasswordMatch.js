import { TextField } from "@mui/material";
import React from "react";
import { useForm, Controller } from "react-hook-form";

function PasswordMatch({ control }) {
  const {
    watch,
    formState: { errors },
  } = useForm();
  let pwd = watch("password");

  return (
    <>
      <Controller
        name="password"
        control={control}
        rules={{
          required: "You must specify a password",
        }}
        as={<TextField name="password" type="password" variant="outlined" />}
      />
      {errors.password && <p>{errors.password.message}</p>}

      <label>Repeat password</label>
      <Controller
        name="password_repeat"
        control={control}
        rules={{
          required: "You must specify a password",
          validate: (value) => value === pwd || "The passwords do not match",
        }}
        as={
          <TextField
            name="password_repeat"
            type="password"
            variant="outlined"
          />
        }
      />
      {errors.password_repeat && <p> {errors.password_repeat.message}</p>}
    </>
  );
}

export default PasswordMatch;
