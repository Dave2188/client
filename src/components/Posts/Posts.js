import React from "react";
import Post from "./Post/post.js";
import { postsTheme } from "./styles";
import { useSelector } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";

const Posts = () => {
	const posts = useSelector((state) => state.posts);

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
