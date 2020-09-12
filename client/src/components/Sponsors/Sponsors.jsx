// import React from "react";

// import { Typography, Box } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";

// import SponsorsBackground from "../../images/SponsorsSvgs/SponsorsBackground.svg";

// import gsap from "gsap";

// const useStyles = makeStyles((theme) => ({
// 	root: {
// 		height: "150vh",
// 		background: `url(${SponsorsBackground})`,
// 		backgroundSize: "cover",
// 		opacity: 0.8,
// 		zIndex: -1,
// 		overflow: "hidden",
// 	},

// 	sponsorsContentContainer: {
// 		marginTop: "30%",

// 		[theme.breakpoints.down("lg")]: {
// 			marginTop: "40%",
// 		},

// 		[theme.breakpoints.down("md")]: {
// 			marginTop: "60%",
// 		},

// 		[theme.breakpoints.down("sm")]: {
// 			marginTop: "100%",
// 		},
// 	},

// 	sponsorsBackground: {
// 		position: "absolute",
// 		width: "100%",
// 		height: "auto",
// 		zIndex: -1,
// 	},

// 	leftSponsorContainer: {
// 		width: "10vw",
// 		display: "flex",
// 		justifyContent: "space-around",
// 		marginBottom: "8vh",
// 	},

// 	sponsorSvg: {
// 		height: "12vh",
// 		width: "12vw",
// 		minWidth: "120px",
// 		minHeight: "120px",
// 	},
// }));

// export default function Sponsors() {
// 	const classes = useStyles();

// 	const logo1 = React.useRef(null);
// 	const logo2 = React.useRef(null);
// 	const logo3 = React.useRef(null);

// 	const animatePlanes = () => {
// 		let tl = gsap.timeline({ repeat: -1 });

// 		tl.to(logo1.current, { x: "150vw", duration: "8" });
// 		tl.to(logo2.current, { x: "150vw", duration: "7.5" }, "-=8");
// 		tl.to(logo3.current, { x: "150vw", duration: "12" }, "-=8");

// 		tl.play();
// 	};

// 	React.useEffect(() => animatePlanes(), []);

// 	return (
// 		<div className={classes.root}>
// 			<div className={classes.sponsorsContentContainer}>
// 				<Typography
// 					variant="h3"
// 					align="center"
// 					className={classes.sponsorsHeader}
// 				>
// 					<Box fontStyle="bold" m={1}>
// 						Sponsors
// 					</Box>
// 				</Typography>

// 				<div className={classes.leftSponsorContainer} ref={logo1}>
// 					<img
// 						src={require("../../images/SponsorsSvgs/SponsorLogos/Github.svg")}
// 						alt="Github"
// 						className={`${classes.sponsorSvg} ${classes.github}`}
// 					/>
// 					<img
// 						src={require("../../images/SponsorsSvgs/Plane1.svg")}
// 						alt="Plane 1"
// 						className={`${classes.sponsorSvg} ${classes.plane}`}
// 					/>
// 				</div>

// 				<div className={classes.leftSponsorContainer} ref={logo2}>
// 					<img
// 						src={require("../../images/SponsorsSvgs/SponsorLogos/Github.svg")}
// 						alt="Github"
// 						className={`${classes.sponsorSvg} ${classes.github}`}
// 					/>
// 					<img
// 						src={require("../../images/SponsorsSvgs/Plane2.svg")}
// 						alt="Plane 1"
// 						className={`${classes.sponsorSvg} ${classes.plane}`}
// 					/>
// 				</div>

// 				<div className={classes.leftSponsorContainer} ref={logo3}>
// 					<img
// 						src={require("../../images/SponsorsSvgs/SponsorLogos/Github.svg")}
// 						alt="Github"
// 						className={`${classes.sponsorSvg} ${classes.github}`}
// 					/>
// 					<img
// 						src={require("../../images/SponsorsSvgs/Helicopter1.svg")}
// 						alt="Plane 1"
// 						className={`${classes.sponsorSvg} ${classes.plane}`}
// 					/>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }

import React from "react";

import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import gsap from "gsap";

import SponsorsBackground from "../../images/SponsorsSvgs/SponsorsBackground.svg";
import SponsorPair from "./SponsorPair";

const useStyles = makeStyles((theme) => ({
	root: {
		overflow: "hidden",
	},

	sponsorRow: {
		display: "flex",
		justifyContent: "space-around",
	},
}));

export default function Sponsors() {
	const row1 = React.useRef(null);
	const row2 = React.useRef(null);
	const row3 = React.useRef(null);

	const moveRow = (row) => {
		let tl = gsap.timeline({ repeat: -1, repeatDelay: 0 });

		tl.fromTo(
			row,
			Math.floor(Math.random() * 10 + 7),
			{ x: "-120vw" },
			{ x: "120vw" }
		);

		return tl;
	};

	const masterAnimation = () => {
		let master = gsap.timeline();

		master.add(moveRow(row1.current), 0);
		master.add(moveRow(row2.current), 0);
		master.add(moveRow(row3.current), 0);

		master.play();
	};

	React.useEffect(() => masterAnimation());

	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Typography variant="h3" align="center">
				<Box fontStyle="bold" m={1}>
					Sponsors
				</Box>
			</Typography>

			<div className={classes.sponsorRow} ref={row1}>
				<SponsorPair logoFile={"Github.svg"} graphicFile={"Plane1.svg"} />
				<SponsorPair logoFile={"Github.svg"} graphicFile={"Plane2.svg"} />
				<SponsorPair logoFile={"Github.svg"} graphicFile={"Plane2.svg"} />
			</div>

			<div className={classes.sponsorRow} ref={row2}>
				<SponsorPair logoFile={"Github.svg"} graphicFile={"Helicopter1.svg"} />
				<SponsorPair logoFile={"Github.svg"} graphicFile={"Plane1.svg"} />
				<SponsorPair logoFile={"Github.svg"} graphicFile={"Plane1.svg"} />
			</div>

			<div className={classes.sponsorRow} ref={row3}>
				<SponsorPair logoFile={"Github.svg"} graphicFile={"Plane1.svg"} />
				<SponsorPair logoFile={"Github.svg"} graphicFile={"Helicopter2.svg"} />
				<SponsorPair logoFile={"Github.svg"} graphicFile={"Helicopter2.svg"} />
			</div>
		</div>
	);
}
