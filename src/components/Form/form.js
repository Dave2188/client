import React from "react";
import { createTheme } from "./styles";
import { ThemeProvider } from "@mui/material";
import { TextField, Button, Typography, paper } from "@mui/material";

const formTheme = createTheme();
const Form = () => {
	return (
		<ThemeProvider theme={formTheme}>
			<h1>FORM</h1>
		</ThemeProvider>
	);
};

export default Form;
