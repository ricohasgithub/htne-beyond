import React from "react";

import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	root: {
		color: "#ABC9F0",
	},
}));

export default function TeamMember({ name, position }) {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Typography variant="h4">{name}</Typography>
			<Typography align="center" variant="h6">
				{position}
			</Typography>
		</div>
	);
}
