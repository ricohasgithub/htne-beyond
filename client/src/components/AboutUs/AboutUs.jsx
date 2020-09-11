import React from "react";

import { Grid, Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import gsap from "gsap";

const useStyles = makeStyles((theme) => ({
	root: {
		height: "80vh",
		overflowX: "hidden",
	},

	aboutUsSvg: {
		zIndex: -1,
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
		<div
			style={{
				display: "flex",
				alignItems: "center",
				marginTop: "20vh",
				height: "60vh",
			}}
		>
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
							<Box fontStyle="bold" m={1}>
								About Us
							</Box>
						</Typography>

						<Typography variant="h6" align="center">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
							vitae orci efficitur, pellentesque massa et, placerat eros. Lorem
							ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae
							nulla in neque dignissim convallis sit amet nec felis.
						</Typography>
					</div>
					<div
						style={{ width: "100%", height: "100%", position: "absolute" }}
						ref={satelliteContainer}
					>
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
					<div style={{ width: "100%", height: "100%", position: "absolute" }}>
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
