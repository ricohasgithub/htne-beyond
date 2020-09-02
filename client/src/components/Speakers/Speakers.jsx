import React from "react";

import { Typography, Box, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// Custom Components
import SpeakerCard from "./SpeakerCard";

const useStyles = makeStyles((theme) => ({
	mainCardContainer: {
		width: "100%",
		display: "flex",
		justifyContent: "space-around",
	},
}));

export default function Speakers() {
	const classes = useStyles();
	return (
		<div>
			<Typography variant="h3" align="center">
				<Box fontStyle="bold" m={1}>
					Speakers
				</Box>
			</Typography>
			<div style={{ position: "absolute", transform: "translateX(-15%)" }}>
				<SpeakerCard
					speakerName={"Name"}
					speakerSummary={
						"Lorem ipsum dolor sit amet, consectet adipiscing elit. Duis vitae orci efficitur, pellentesque."
					}
				/>
			</div>

			<div className={classes.mainCardContainer}>
				<SpeakerCard
					speakerName={"Name"}
					speakerSummary={
						"Lorem ipsum dolor sit amet, consectet adipiscing elit. Duis vitae orci efficitur, pellentesque."
					}
				/>
			</div>
		</div>
	);
}
