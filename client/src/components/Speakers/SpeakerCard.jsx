import React from "react";

import { Card, CardContent, Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	card: {
		width: "40%",
		backgroundColor: "#E7B743",
		color: "#FFFFFF",
	},

	speakerPic: {
		height: "15%",
		width: "15%",
		borderRadius: "100%",
	},

	cardContentContainer: {
		display: "flex",
		marginTop: "7.5%",
	},
}));

export default function SpeakerCard({ speakerName, speakerSummary }) {
	const classes = useStyles();
	return (
		<Card className={classes.card}>
			<CardContent>
				<div className={classes.cardContentContainer}>
					<img
						src={require(`../../images/Speakers/${speakerName}.png`)}
						alt={`${speakerName}`}
						className={classes.speakerPic}
					/>
					<div className={classes.speakerTextContainer}>
						<Typography variant="h3">
							<Box fontStyle="bold" m={1}>
								{speakerName}
							</Box>
						</Typography>

						<Typography variant="body1">{speakerSummary}</Typography>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
