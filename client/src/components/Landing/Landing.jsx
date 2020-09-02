import React from "react";

import { Grid, Typography, Button, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// Custom Components
import Header from "./Header";

const useStyles = makeStyles((theme) => ({
	rootGrid: {
		marginTop: "5vh",
	},

	landingBtn: {
		borderRadius: "73px",
		marginLeft: "0.5vw",
		marginRight: "0.5vw",
	},

	svgContainer: {
		display: "inline-block",
		position: "relative",
		width: "100%",
		paddingBottom: "100%",
		verticalAlign: "middle",
		overflow: "hidden",
	},

	svgContent: {
		display: "inline-block",
		position: "absolute",
		top: 0,
		left: 0,
	},
}));

export default function Landing() {
	const classes = useStyles();
	return (
		<div>
			<Header />

			<Grid container className={classes.rootGrid}>
				<Grid
					item
					container
					sm={6}
					xs={12}
					direction="column"
					alignItems="center"
				>
					<Typography variant="h3" align="center">
						Hack the Northeast
					</Typography>
					<Typography variant="h1">
						<Box fontStyle="italic" m={1}>
							BEYOND
						</Box>
					</Typography>
					<Typography variant="h6">Dec. 12-15 | Virtual Hackathon</Typography>
					<div>
						<Button variant="contained" className={classes.landingBtn}>
							<Typography variant="subtitle1">Register</Typography>
						</Button>
						<Button variant="contained" className={classes.landingBtn}>
							<Typography variant="subtitle1">Sponsor Us</Typography>
						</Button>
					</div>
				</Grid>

				<Grid item container sm={6} xs={12}>
					<div className={classes.svgContainer}>
						{/* ALL SVGS ARE PLACEHOLDERS FOR NOW */}
						<svg
							version="1.1"
							viewBox="0 0 500 500"
							preserveAspectRatio="xMinYMin meet"
							className={classes.svgContent}
						>
							<circle
								r="50"
								cx="120"
								cy="250"
								fill="#ff4242"
								stroke="#ff4242"
								strokeWidth="1"
							/>

							<circle
								r="35"
								cx="300"
								cy="80"
								fill="#32c273"
								stroke="#32c273"
								strokwWidth="1"
							/>

							<circle
								r="15"
								cx="110"
								cy="30"
								fill="#f7ce00"
								stroke="#f7ce00"
								strokeWidth="1"
							/>
						</svg>
					</div>
				</Grid>
			</Grid>
		</div>
	);
}
