import React from "react";

import { Card, CardContent, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	card: {
		backgroundColor: theme.palette.primary.main,
		color: theme.palette.primary.contrastText,
		borderRadius: "5%",
		transition: "transform 0.3s ease-out",

		"&:hover": {
			transform: "scale(1.25)",
			cursor: "pointer",
		},
	},

	scale: {
		transform: "scale(1.5, 1.5)",
		transition: "transform 0.5s ease",
	},

	cardLogo: {
		padding: 0,
		height: "6vh",
		width: "6vw",
	},
}));

export default function TrackCard({ trackName, trackSummary }) {
	const classes = useStyles();

	return (
		<Card className={classes.card}>
			<CardContent>
				<img
					src={require(`../../images/TracksSvgs/${trackName}.svg`)}
					alt={`${trackName} logo`}
					className={classes.cardLogo}
				/>

				<Typography variant="h3">{trackName}</Typography>

				<Typography variant="body1">{trackSummary}</Typography>
			</CardContent>
		</Card>
	);
}
