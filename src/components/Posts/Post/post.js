import React from "react";
import { postTheme } from "./style";
import { ThemeProvider } from "@mui/material/styles";

const Post = () => {
	return (
		<ThemeProvider theme={postTheme}>
			<h1>POST</h1>
		</ThemeProvider>
	);
};

export default Post;
