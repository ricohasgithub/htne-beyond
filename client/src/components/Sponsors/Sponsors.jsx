import React from "react";

import { Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	root: {
		height: "100vh",
	},

	backgroundImg: {
		position: "absolute",
		width: "100%",
		zIndex: -1,
	},

	sponsorsHeader: {
		paddingTop: "50vh",
	},

	helicopter1: {
		height: "10vw",
		width: "10vw",
		position: "absolute",
		top: "640vh",
		left: "20vw",
		minWidth: "120px",
		minHeight: "120px",
	},

	helicopter2: {
		height: "10vw",
		width: "10vw",
		position: "absolute",
		top: "600vh",
		left: "60vw",
		minWidth: "120px",
		minHeight: "120px",
	},

	plane1: {
		height: "10vw",
		width: "10vw",
		position: "absolute",
		top: "600vh",
		left: "10vw",
		minWidth: "120px",
		minHeight: "120px",
	},

	plane2: {
		height: "10vw",
		width: "10vw",
		position: "absolute",
		top: "640vh",
		left: "70vw",
		minWidth: "120px",
		minHeight: "120px",
	},
}));

export default function Sponsors() {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<img
				src={require("../../images/SponsorsSvgs/SponsorsBackground.svg")}
				alt="Sponsors Background"
				className={classes.backgroundImg}
			/>

			<img
				src={require("../../images/SponsorsSvgs/Helicopter1.svg")}
				alt="Helicopter 1"
				className={classes.helicopter1}
			/>

			<img
				src={require("../../images/SponsorsSvgs/Helicopter2.svg")}
				alt="Helicopter 2"
				className={classes.helicopter2}
			/>

			<img
				src={require("../../images/SponsorsSvgs/Plane1.svg")}
				alt="Plane 1"
				className={classes.plane1}
			/>

			<img
				src={require("../../images/SponsorsSvgs/Plane2.svg")}
				alt="Plane 2"
				className={classes.plane2}
			/>

			<Typography
				variant="h3"
				align="center"
				className={classes.sponsorsHeader}
			>
				<Box fontStyle="bold" m={1}>
					Sponsors
				</Box>
			</Typography>
		</div>
	);
}
