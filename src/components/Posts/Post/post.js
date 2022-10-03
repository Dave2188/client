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
import { createTheme } from "@mui/material/styles";

const Post = ({ post }) => {
	const creator = post.creator;
	creator.toString();
	const time = moment(post.createdAt);
	const style = styles;

	return (
		<Card sx={style.card}>
			<CardMedia
				component="img"
				height="200"
				sx={style.media}
				image={
					post.selectedFile != " "
						? `${post.selectedFile}`
						: "https://picsum.photos/200/300"
				}
				title={post.title}
			/>
			<div>
				<Typography sx={style.overlay} variant="h6" component="h6">
					{creator}
				</Typography>
				<Typography sx={style.overlay3} variant="body2">
					{time.fromNow()}
				</Typography>
			</div>
			<div>
				<Button
					sx={style.overlay2}
					style={{ color: "white" }}
					size="small"
					onClick={() => {}}
				>
					<MoreHorizIcon fontSize="medium" />
				</Button>
			</div>
			<div>
				<Typography sx={style.details} variant="body2" color="textSecondary">
					{post.tags.map((tag) => `#${tag} `)}
				</Typography>
			</div>
			<CardContent>
				<Typography sx={style.title} variant="h5" gutterBottom>
					{post.message}
				</Typography>
			</CardContent>
			<CardActions sx={style.cardActions}>
				<Button size="small" color="primary" onClick={() => {}}>
					<ThumbUpAltIcon fontSize="small" />
					Like {post.likeCount}
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
