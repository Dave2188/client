import { createTheme } from "@mui/material/styles";

createTheme((theme) => ({
	mainContainer: {
		display: "flex",
		alignItems: "center",
	},
	smMargin: {
		margin: theme.spacing(1),
	},
	actionDiv: {
		textAlign: "center",
	},
}));

export { createTheme };
