import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	cardRoot: {
		width: "100%",
		height: "100%",
		backgroundColor: "#365680",
	},

	cardContentContainer: {
		display: "flex",
		height: "100%",
		alignItems: "center",
	},

	speakerImage: {
		width: "15%",
		height: "40%",
		borderRadius: "100%",
		margin: "2.5%",

		[theme.breakpoints.down("sm")]: {
			display: "none",
		},
	},

	cardTextContainer: {
		margin: "2.5%",
	},
}));

export default function SpeakerCard({ speakerName, speakerSummary }) {
	const classes = useStyles();

	return (
		<div className={classes.cardRoot}>
			<div className={classes.cardContentContainer}>
				<img
					src={require("../../images/Speakers/placeholder.png")}
					alt={speakerName}
					className={classes.speakerImage}
				/>

				<div className={classes.cardTextContainer}>
					<Typography variant="h4">{speakerName}</Typography>
					<Typography variant="body2">{speakerSummary}</Typography>
				</div>
			</div>
		</div>
	);
}
