import React from "react";

import { Grid, Typography, Button, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// Custom Components
import Header from "./Header";

const useStyles = makeStyles((theme) => ({
	root: {
		height: "90vh",
		backgroundColor: theme.palette.primary.main,
		color: theme.palette.primary.contrastText,
	},

	rootGrid: {
		marginTop: "5vh",
	},

	registerBtn: {
		borderRadius: "73px",
		marginLeft: "0.5vw",
		marginRight: "0.5vw",
		backgroundColor: "#F5C042",
		color: "#FFFFFF",
	},

	sponsorBtn: {
		borderRadius: "73px",
		marginLeft: "0.5vw",
		marginRight: "0.5vw",
		color: "#FFFFFF",
		backgroundColor: "#E07934",
	},

	landingSvgs: {
		position: "absolute",
		width: "100%",
	},

	landingGraphic: {
		position: "absolute",
	},

	redPlanet: {
		top: "40vh",
		left: "40vw",
		height: "30vh",
		width: "30vw",

		[theme.breakpoints.down("sm")]: {
			left: "60vw",
		},
	},

	yellowPlanet: {
		left: "50vw",
		top: "15vh",
		width: "15vw",
		height: "15vh",

		[theme.breakpoints.down("sm")]: {
			left: "10vw",
			top: "60vh",
		},
	},

	greenPlanet: {
		top: "30vh",
		left: "70vw",
		height: "22.5vh",
		width: "22.5vw",

		[theme.breakpoints.down("sm")]: {
			left: "45vw",
			top: "70vh",
		},
	},

	constellation1: {
		top: "20vh",
		left: "65vw",

		[theme.breakpoints.down("sm")]: {
			left: "25vw",
			top: "55vh",
			height: "10vh",
			width: "10vw",
		},
	},

	constellation2: {
		top: "20vh",
		left: "80vw",

		[theme.breakpoints.down("sm")]: {
			left: "35vw",
			top: "80vh",
			height: "10vh",
			width: "10vw",
		},
	},

	constellation3: {
		top: "50vh",
		left: "65vw",

		[theme.breakpoints.down("sm")]: {
			left: "80vw",
			top: "70vh",
			height: "10vh",
			width: "10vw",
		},
	},
}));

export default function Landing({ sideMenuClickHandler }) {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Header sideMenuClickHandler={sideMenuClickHandler} />
			<img
				src={require("../../images/LandingSvgs/landingCurves.svg")}
				alt="Landing page curves"
				className={classes.landingSvgs}
			/>

			<img
				src={require("../../images/LandingSvgs/landingStars.svg")}
				alt="Landing page stars"
				className={classes.landingSvgs}
			/>
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
						<Button variant="contained" className={classes.registerBtn}>
							<Typography variant="subtitle1">Register</Typography>
						</Button>
						<Button variant="contained" className={classes.sponsorBtn}>
							<Typography variant="subtitle1">Sponsor Us</Typography>
						</Button>
					</div>
				</Grid>

				<Grid item container sm={6} xs={12}>
					<img
						src={require("../../images/LandingSvgs/Planets/RedPlanet.svg")}
						alt="Red Planet"
						className={`${classes.landingGraphic} ${classes.redPlanet}`}
					/>
					<img
						src={require("../../images/LandingSvgs/Planets/YellowPlanet.svg")}
						alt="Yellow Planet"
						className={`${classes.landingGraphic} ${classes.yellowPlanet}`}
					/>
					<img
						src={require("../../images/LandingSvgs/Planets/GreenPlanet.svg")}
						alt="Green Planet"
						className={`${classes.landingGraphic} ${classes.greenPlanet}`}
					/>
					<img
						src={require("../../images/LandingSvgs/Constellations/Constellation1.svg")}
						alt="Constellation 1"
						className={`${classes.landingGraphic} ${classes.constellation1}`}
					/>
					<img
						src={require("../../images/LandingSvgs/Constellations/Constellation2.svg")}
						alt="Constellation 2"
						className={`${classes.landingGraphic} ${classes.constellation2}`}
					/>
					<img
						src={require("../../images/LandingSvgs/Constellations/Constellation3.svg")}
						alt="Constellation 3"
						className={`${classes.landingGraphic} ${classes.constellation3}`}
					/>
				</Grid>
			</Grid>
		</div>
	);
}
