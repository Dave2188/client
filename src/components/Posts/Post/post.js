import React from "react";
import {
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Button,
	Typography,
} from "@mui/material";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import moment from "moment";
import { styles } from "./style";
import { title } from "process";

const Post = ({ post }) => {
	const creator = post.creator;
	creator.toString();
	const time = moment(post.createdAt);

	return (
		<Card sx={styles.card}>
			<CardMedia
				component="img"
				className={styles.media}
				image={`${post.selectedFile}`}
				title={post.title}
			/>
			<div sx={styles.overlay}>
				<Typography variant="h6" component="h6">
					{creator}
				</Typography>
				<Typography variant="body2">{time.fromNow()}</Typography>
			</div>
			<div sx={styles.overlay2}>
				<Button style={{ color: "black" }} size="small" onClick={() => {}}>
					<MoreHorizIcon fontSize="medium" />
				</Button>
			</div>
			<div sx={styles.details}>
				<Typography variant="body2" color="textSecondary">
					{post.tags.map((tag) => `#${tag} `)}
				</Typography>
			</div>
			<CardContent>
				<Typography sx={styles.title} variant="h5" gutterBottom>
					{post.message}
				</Typography>
			</CardContent>
			<CardActions sx={styles.cardActions}>
				<Button size="small" color="primary" onClick={() => {}}>
					<ThumbUpAltIcon fontSize="small" />
					Like
					{post.likeCount}
				</Button>
				<Button size="small" color="primary" onClick={() => {}}>
					<DeleteIcon fontSize="small" />
					Delete
				</Button>
			</CardActions>
		</Card>
	);
};

export default Post;
