import React from "react";

import { Grid, Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import gsap from "gsap";

const useStyles = makeStyles((theme) => ({
	root: {
		height: "80vh",
	},

	aboutUsSvg: {
		zIndex: -1,
	},

	satellite1: {
		height: "20vh",
		width: "20vw",
		left: "0vw",
		position: "absolute",
	},

	satellite2: {
		height: "15vh",
		width: "15vw",
		top: "115vh",
		left: "80vw",
		position: "absolute",
	},

	cloud1: {
		height: "25vh",
		width: "25vw",
		top: "140vh",
		left: "0vw",
		position: "absolute",
	},

	cloud2: {
		height: "25vh",
		width: "25vw",
		top: "115vh",
		left: "74vw",
		position: "absolute",
	},

	cloud3: {
		height: "25vh",
		width: "25vw",
		top: "160vh",
		left: "74vw",
		position: "absolute",
	},
}));

export default function AboutUs() {
	const classes = useStyles();

	const satellite1 = React.useRef(null);
	const satellite2 = React.useRef(null);

	const transformSatellite = (satellite) => {
		let tl = gsap.timeline({ repeat: -1, repeatDelay: 0 });

		tl.to(satellite, {
			rotation: 80,
			transformOrigin: "55vh 10vw",
			duration: 20,
			ease: "power2.out",
		});

		tl.to(satellite, {
			rotation: -80,
			transformOrigin: "55vh 10vw",
			duration: 20,
			ease: "power2.inOut",
		});

		tl.to(satellite, {
			rotation: 0,
			transformOrigin: "55vh 10vw",
			duration: 20,
			ease: "power2.inOut",
		});

		return tl;
	};

	const masterAnim = () => {
		let master = gsap.timeline();

		master.add(transformSatellite(satellite1.current), 0);
		master.add(transformSatellite(satellite2.current), 0);

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
						<img
							src={require("../../images/AboutUsSvgs/Satellite1.svg")}
							alt="Satellite"
							className={`${classes.aboutUsSvg} ${classes.satellite1}`}
							ref={satellite1}
						/>

						<img
							src={require("../../images/AboutUsSvgs/Satellite2.svg")}
							alt="Satellite"
							className={`${classes.aboutUsSvg} ${classes.satellite2}`}
							ref={satellite2}
						/>

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
				</Grid>
				<Grid item xs={2} sm={4} />
			</Grid>
		</div>
	);
}
