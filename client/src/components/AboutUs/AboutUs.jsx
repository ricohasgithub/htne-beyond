import React from "react";

import { Grid, Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import gsap from "gsap";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		alignItems: "center",
		height: "100vh",
		marginTop: "20vh",
		overflowX: "hidden",
		overflowY: "visible",
	},

	aboutUsSvg: {
		zIndex: -1,
	},

	satelliteContainer: {
		width: "100%",
		height: "100%",
		position: "absolute",

		[theme.breakpoints.down("sm")]: {
			display: "none",
		},
	},

	satellite1: {
		height: "20vh",
		width: "20vw",
		top: "40vh",
		left: "0vw",
		position: "relative",

		[theme.breakpoints.down("sm")]: {
			display: "none",
		},
	},

	satellite2: {
		height: "15vh",
		width: "15vw",
		top: "20vh",
		left: "60vw",
		position: "relative",

		[theme.breakpoints.down("sm")]: {
			display: "none",
		},
	},

	cloudContainter: {
		width: "100%",
		height: "100%",
		position: "absolute",
		[theme.breakpoints.down("sm")]: {
			display: "none",
		},
	},

	cloud1: {
		height: "25vh",
		width: "25vw",
		top: "60vh",
		left: "0vw",
		position: "relative",

		[theme.breakpoints.down("sm")]: {
			display: "none",
		},
	},

	cloud2: {
		height: "25vh",
		width: "25vw",
		top: "15vh",
		left: "50vw",
		position: "relative",

		[theme.breakpoints.down("sm")]: {
			display: "none",
		},
	},

	cloud3: {
		height: "25vh",
		width: "25vw",
		top: "55vh",
		left: "25vw",
		position: "relative",

		[theme.breakpoints.down("sm")]: {
			display: "none",
		},
	},
}));

export default function AboutUs() {
	const classes = useStyles();

	const satelliteContainer = React.useRef(null);

	const transformSatellite = () => {
		let tl = gsap.timeline({
			repeat: -1,
			repeatDelay: Math.floor(Math.random() * 5),
		});

		tl.to(satelliteContainer.current, {
			rotate: 20,
			duration: 20,
			ease: "power2.out",
		});

		tl.to(satelliteContainer.current, {
			rotate: -20,
			duration: 20,
			ease: "power2.inOut",
		});

		tl.to(satelliteContainer.current, {
			rotate: 0,
			duration: 20,
			ease: "power2.inOut",
		});

		return tl;
	};

	const masterAnim = () => {
		let master = gsap.timeline();

		master.add(transformSatellite(), 0);

		master.play();
	};

	React.useEffect(() => masterAnim());

	return (
		<div className={classes.root}>
			<Grid container>
				<Grid item xs={2} sm={4} />
				<Grid
					item
					container
					direction="column"
					alignItems="center"
					justify="space-around"
					xs={8}
					sm={4}
				>
					<div>
						<Typography variant="h3" align="center">
							<Box fontStyle="bold" m={1} fontWeight="700">
								Our Mission
							</Box>
						</Typography>

						<Typography variant="h6" align="center">
							To provide students an opportunity for accessible collaboration to
							foster innovation, diversity, and inclusivity. Created by students
							for students, we aim to empower and expand the student developer
							community by providing resources to explore technology and turn
							ideas into reality. Whether you're completely new to coding or a
							seasoned hacker, join us for a weekend full of learning,
							connection, and fun.
						</Typography>
					</div>
					<div className={classes.satelliteContainer} ref={satelliteContainer}>
						<img
							src={require("../../images/AboutUsSvgs/Satellite1.svg")}
							alt="Satellite"
							className={`${classes.aboutUsSvg} ${classes.satellite1}`}
						/>

						<img
							src={require("../../images/AboutUsSvgs/Satellite2.svg")}
							alt="Satellite"
							className={`${classes.aboutUsSvg} ${classes.satellite2}`}
						/>
					</div>
					<div className={classes.cloudContainter}>
						<img
							src={require("../../images/CloudSvgs/Cloud1.svg")}
							alt="Cloud"
							className={`${classes.aboutUsSvg} ${classes.cloud1}`}
						/>
						<img
							src={require("../../images/CloudSvgs/Cloud2.svg")}
							alt="Cloud"
							className={`${classes.aboutUsSvg} ${classes.cloud2}`}
						/>
						<img
							src={require("../../images/CloudSvgs/Cloud3.svg")}
							alt="Cloud"
							className={`${classes.aboutUsSvg} ${classes.cloud3}`}
						/>
					</div>
				</Grid>
				<Grid item xs={2} sm={4} />
			</Grid>
		</div>
	);
}
