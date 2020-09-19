import React from "react";

import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import gsap from "gsap";

import SponsorPair from "./SponsorPair";

const useStyles = makeStyles((theme) => ({
	root: {
		overflow: "hidden",
		backgroundImage: "linear-gradient(#0C2648, #00132C, #0C2648)",
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

	const moveRow1 = () => {
		let tl = gsap.timeline({ repeat: -1, repeatDelay: 0 });

		tl.fromTo(row1.current, 20, { x: "-120vw" }, { x: "120vw", ease: "none" });

		return tl;
	};

	const moveRow2 = () => {
		let tl = gsap.timeline({ repeat: -1, repeatDelay: 0 });

		tl.fromTo(
			row2.current,
			12.5,
			{ x: "-120vw" },
			{ x: "120vw", ease: "none" }
		);

		return tl;
	};

	const moveRow3 = () => {
		let tl = gsap.timeline({ repeat: -1, repeatDelay: 0 });

		tl.fromTo(row3.current, 5, { x: "-120vw" }, { x: "120vw", ease: "none" });

		return tl;
	};

	const masterAnimation = () => {
		let master = gsap.timeline();

		master.add(moveRow1(), 0);
		master.add(moveRow2(), 0);
		master.add(moveRow3(), 0);

		master.play();
	};

	React.useEffect(() => masterAnimation());

	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Typography variant="h3" align="center">
				<Box fontStyle="bold" m={1} fontWeight="700">
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
