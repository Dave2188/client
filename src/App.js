import React, { useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@mui/material";
import memories from "./images/memories.png";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/form";
import { styles } from "./styles";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts";

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getPosts());
	}, [dispatch]);

	return (
		<Container maxWidth="lg">
			<AppBar style={styles.appBar} position="static" color="inherit">
				<Typography style={styles.heading} variant="h2">
					Memories
				</Typography>
				<img style={styles.image} src={memories} alt="memories" height="60" />
			</AppBar>
			<Grow in>
				<Container>
					<Grid
						container
						justify="space-between"
						alignItems="stretch"
						spacing="3"
					>
						<Grid item xs={12} sm={7}>
							<Posts />
						</Grid>
						<Form />
						<Grid item xs={12} sm={4}></Grid>
					</Grid>
				</Container>
			</Grow>
		</Container>
	);
};

export default App;
