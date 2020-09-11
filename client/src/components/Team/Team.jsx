import React from "react";

import { Typography, Box, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// Custom Components
import TeamMember from "./TeamMember";

import gsap from "gsap";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		alignItems: "center",
		justifyContent: "space-around",
		height: "80vh",
	},

	package: {
		position: "absolute",
		width: "15vw",
		height: "15vh",
		zIndex: -1,
		opacity: 0.6,

		[theme.breakpoints.down("sm")]: {
			display: "none",
		},
	},

	package1: {
		left: "10vw",
		top: "470vh",
	},

	package2: {
		left: "60vw",
		top: "490vh",
	},

	package3: {
		left: "80vw",
		top: "520vh",
	},

	cloud: {
		position: "absolute",
		width: "20vw",
		height: "20vh",
		zIndex: -1,

		[theme.breakpoints.down("sm")]: {
			display: "none",
		},
	},

	cloud1: {
		top: "470vh",

		// [theme.breakpoints.down("md")]: {
		// 	top: "560vh",
		// },
	},

	cloud2: {
		top: "520vh",
		left: "20vw",

		[theme.breakpoints.down("md")]: {
			top: "580vh",
		},
	},
}));

export default function Team() {
	const classes = useStyles();

	const package1 = React.useRef(null);
	const package2 = React.useRef(null);
	const package3 = React.useRef(null);

	const animatePackage = (pack) => {
		let tl = gsap.timeline({
			repeat: -1,
			repeatDelay: Math.floor(Math.random() * 5),
		});

		tl.to(pack, { y: "+=40vh", autoAlpha: 0, duration: 12, ease: "none" }, 0);

		return tl;
	};

	const masterAnimation = () => {
		let master = gsap.timeline();

		master.add(animatePackage(package1.current), 0);
		master.add(animatePackage(package2.current), 0);
		master.add(animatePackage(package3.current), 0);

		master.play();
	};

	React.useEffect(() => masterAnimation());

	return (
		<div className={classes.root}>
			<img
				src={require("../../images/TeamSvgs/Package1.svg")}
				alt="Package 1"
				className={`${classes.package} ${classes.package1}`}
				ref={package1}
			/>

			<img
				src={require("../../images/TeamSvgs/Package1.svg")}
				alt="Package 2"
				className={`${classes.package} ${classes.package2}`}
				ref={package2}
			/>

			<img
				src={require("../../images/TeamSvgs/Package1.svg")}
				alt="Package 3"
				className={`${classes.package} ${classes.package3}`}
				ref={package3}
			/>

			<img
				src={require("../../images/Speakers/SpeakersSvgs/Cloud2.svg")}
				alt="Cloud 1"
				className={`${classes.cloud} ${classes.cloud1}`}
			/>

			<img
				src={require("../../images/Speakers/SpeakersSvgs/Cloud4.svg")}
				alt="Cloud 3"
				className={`${classes.cloud} ${classes.cloud2}`}
			/>

			<div>
				<Typography variant="h3" align="center">
					<Box fontStyle="bold" m={1}>
						Team
					</Box>
				</Typography>

				<Grid container>
					<Grid item container xs={4} justify="center">
						<TeamMember name={"First Last"} position={"Position"} />
					</Grid>
					<Grid item container xs={4} justify="center">
						<TeamMember name={"First Last"} position={"Position"} />
					</Grid>
					<Grid item container xs={4} justify="center">
						<TeamMember name={"First Last"} position={"Position"} />
					</Grid>
					<Grid item container xs={4} justify="center">
						<TeamMember name={"First Last"} position={"Position"} />
					</Grid>
					<Grid item container xs={4} justify="center">
						<TeamMember name={"First Last"} position={"Position"} />
					</Grid>
					<Grid item container xs={4} justify="center">
						<TeamMember name={"First Last"} position={"Position"} />
					</Grid>
				</Grid>
			</div>
		</div>
	);
}
