import React from "react";

import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import gsap from "gsap";

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
