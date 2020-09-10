import React from "react";

import { Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import gsap from "gsap";

const useStyles = makeStyles((theme) => ({
	root: {
		height: "100vh",
		backgroundColor: "#00132C",
		opacity: 0.8,
		zIndex: -1,
		overflow: "hidden",
	},

	leftSponsorContainer: {
		width: "10vw",
		display: "flex",
		justifyContent: "space-around",
		marginBottom: "8vh",
	},

	sponsorSvg: {
		height: "12vh",
		width: "12vw",
		minWidth: "120px",
		minHeight: "120px",
	},
}));

export default function Sponsors() {
	const classes = useStyles();

	const logo1 = React.useRef(null);
	const logo2 = React.useRef(null);
	const logo3 = React.useRef(null);

	const animatePlanes = () => {
		let tl = gsap.timeline({ repeat: -1 });

		tl.to(logo1.current, { x: "150vw", duration: "8" });
		tl.to(logo2.current, { x: "150vw", duration: "7.5" }, "-=8");
		tl.to(logo3.current, { x: "150vw", duration: "12" }, "-=8");

		tl.play();
	};

	React.useEffect(() => animatePlanes(), []);

	return (
		<div className={classes.root}>
			<Typography
				variant="h3"
				align="center"
				className={classes.sponsorsHeader}
			>
				<Box fontStyle="bold" m={1}>
					Sponsors
				</Box>
			</Typography>

			<div className={classes.leftSponsorContainer} ref={logo1}>
				<img
					src={require("../../images/SponsorsSvgs/SponsorLogos/Github.svg")}
					alt="Github"
					className={`${classes.sponsorSvg} ${classes.github}`}
				/>
				<img
					src={require("../../images/SponsorsSvgs/Plane1.svg")}
					alt="Plane 1"
					className={`${classes.sponsorSvg} ${classes.plane}`}
				/>
			</div>

			<div className={classes.leftSponsorContainer} ref={logo2}>
				<img
					src={require("../../images/SponsorsSvgs/SponsorLogos/Github.svg")}
					alt="Github"
					className={`${classes.sponsorSvg} ${classes.github}`}
				/>
				<img
					src={require("../../images/SponsorsSvgs/Plane2.svg")}
					alt="Plane 1"
					className={`${classes.sponsorSvg} ${classes.plane}`}
				/>
			</div>

			<div className={classes.leftSponsorContainer} ref={logo3}>
				<img
					src={require("../../images/SponsorsSvgs/SponsorLogos/Github.svg")}
					alt="Github"
					className={`${classes.sponsorSvg} ${classes.github}`}
				/>
				<img
					src={require("../../images/SponsorsSvgs/Helicopter1.svg")}
					alt="Plane 1"
					className={`${classes.sponsorSvg} ${classes.plane}`}
				/>
			</div>
		</div>
	);
}
