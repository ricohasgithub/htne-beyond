import React from "react";

import { Card, CardContent, Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	card: {
		backgroundColor: theme.palette.primary.main,
		color: theme.palette.primary.contrastText,
		borderRadius: "5%",
		transition: "transform 0.3s ease-out",
		padding: "5%",

		"&:hover": {
			transform: "scale(1.25)",
			cursor: "pointer",

			[theme.breakpoints.down("sm")]: {
				transform: "scale(1)",
			},
		},
	},

	cardLogo: {
		padding: 0,

		height: "6vh",
		width: "6vw",

		[theme.breakpoints.up("lg")]: {
			marginLeft: "-25px",
		},
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

				<Typography variant="h4">
					<Box
						fontStyle="bold"
						m={1}
						fontWeight="700"
						style={{ marginLeft: 0, marginRight: 0 }}
					>
						{trackName}
					</Box>
				</Typography>

				<Typography variant="body1">{trackSummary}</Typography>
			</CardContent>
		</Card>
	);
}
