import {
  Box,
  Button,
  Grid,
  ThemeProvider,
  createTheme,
  Typography,
  CssBaseline,
} from "@mui/material";
import { useForm } from "react-hook-form";
import "./App.css";
import RadioInput from "./components/RadioInput";
import { TextInput } from "./components/TextInput";
import React, { useEffect } from "react";
import CheckboxInput from "./components/CheckboxInput";
import DropdownInput from "./components/DropdownInput";
import SliderInput from "./components/SliderInput";
// import DateInput from "./components/DateInput";

const theme = createTheme();

theme.typography.body2 = {
  marginTop: "18px",
  fontWeight: 600,
};

function App() {
  const { handleSubmit, control, watch, setValue } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data) => alert(JSON.stringify(data, null, 2));

  useEffect(() => {
    const subscription = watch((value, { name, type }) =>
      console.log(value, name, type)
    );
    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          style={{ minHeight: "100vh" }}
        >
          <Typography variant="h4" component="h2">
            Form
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid item>
              <TextInput
                name="email"
                label="Enter email address"
                control={control}
                type="text"
              />
            </Grid>
            <Grid item>
              <RadioInput name={"gender"} label="Gender" control={control} />
            </Grid>
            <Grid item>
              <CheckboxInput
                control={control}
                setValue={setValue}
                name={"interest"}
                label={"Your interest"}
              />
            </Grid>
            <Grid item>
              <DropdownInput
                name="dropdownValue"
                label="Dropdown Input"
                control={control}
                value="Select"
              />
            </Grid>
            <Grid item>
              <SliderInput
                name={"sliderValue"}
                control={control}
                setValue={setValue}
                label={"Slider Input"}
              />
            </Grid>
            {/* <Grid item>
            <DateInput name="dateValue" control={control} label="Date Input" />
          </Grid> */}
            <Grid item>
              <Button type="submit" size="large" variant="contained">
                Login
              </Button>
            </Grid>
          </form>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}

export default App;
