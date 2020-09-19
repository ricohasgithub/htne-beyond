import React from "react";

import { Grid, Typography, useMediaQuery, Box } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	speakerPhoto: {
		width: "50%",
		height: "auto",
		borderRadius: "100%",

		[theme.breakpoints.down("sm")]: {
			width: "60%",
		},
	},
}));

export default function SpeakerCard({ speakerName, speakerSummary }) {
	const classes = useStyles();
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.down("sm"));
	let direction = "row";
	let nameAlignment = "left";

	if (matches) {
		direction = "column";
		nameAlignment = "center";
	} else {
		direction = "row";
		nameAlignment = "left";
	}

	return (
		<div>
			<Grid container direction="row" spacing={0} style={{ height: "100%" }}>
				<Grid
					container
					item
					xs={12}
					direction={direction}
					justify="space-around"
					alignItems="center"
				>
					<Grid
						item
						container
						xs={6}
						justify="space-around"
						alignItems="center"
					>
						<img
							src={require("../../images/Speakers/placeholder.png")}
							alt={speakerName}
							className={classes.speakerPhoto}
						/>
					</Grid>
					<Grid item container xs={6} direction="column" justify="space-around">
						<div>
							<Typography variant="h4" align={nameAlignment}>
								<Box
									fontStyle="bold"
									m={1}
									fontWeight="700"
									style={{ marginLeft: 0, marginRight: 0 }}
								>
									{speakerName}
								</Box>
							</Typography>
							<Typography variant="body1" align={nameAlignment}>
								{speakerSummary}
							</Typography>
						</div>
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
}
