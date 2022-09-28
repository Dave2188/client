import React from "react";
import { createTheme } from "./style";
import { ThemeProvider } from "@mui/material/styles";

const Post = () => {
	const postTheme = createTheme();
	return (
		<ThemeProvider theme={postTheme}>
			<h1>POST</h1>
		</ThemeProvider>
	);
};

export default Post;
