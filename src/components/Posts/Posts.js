import React from "react";
import Post from "./Post/post.js";
import { createTheme } from "./styles";
import { useSelector } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";

const Posts = () => {
	const posts = useSelector((state) => state.posts);
	const postsTheme = createTheme();

	console.log(posts);

	return (
		<ThemeProvider theme={postsTheme}>
			<>
				<h1>POSTS</h1>
				<Post />
				<Post />
			</>
		</ThemeProvider>
	);
};

export default Posts;
