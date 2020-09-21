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
		overflow: "hidden",
		height: "150vh",
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
		position: "relative",
		width: "20vw",
		height: "20vh",
		zIndex: -1,

		[theme.breakpoints.down("sm")]: {
			display: "none",
		},
	},

	cloud1: {
		left: "-20vw",
		top: "30vh",
		// [theme.breakpoints.down("md")]: {
		// 	top: "560vh",
		// },
	},

	cloud2: {
		left: "0vw",
		top: "-20vh",
	},

	cloud3: {
		left: "30vw",
	},

	cloud4: {
		top: "-30vh",
	},
}));

export default function Team() {
	const classes = useStyles();

	const package1 = React.useRef(null);
	const package2 = React.useRef(null);
	const package3 = React.useRef(null);

	const cloud1 = React.useRef(null);
	const cloud2 = React.useRef(null);
	const cloud3 = React.useRef(null);
	const cloud4 = React.useRef(null);

	const animatePackage = (pack) => {
		let tl = gsap.timeline({
			repeat: -1,
			repeatDelay: Math.floor(Math.random() * 5),
		});

		tl.fromTo(pack, { autoAlpha: 0 }, { autoAlpha: 0.7, duration: 2 });
		tl.to(
			pack,
			{ y: "+=20vh", autoAlpha: 0, duration: 12, ease: "none" },
			"-=1.25"
		);

		return tl;
	};

	const animateCloud = (cloud) => {
		let tl = gsap.timeline({
			repeat: -1,
			repeatDelay: Math.floor(Math.random() * 10),
		});

		tl.to(cloud, {
			x: -Math.floor(Math.random() * 22 + 7),
			duration: Math.floor(Math.random() * 10 + 2),
			ease: "none",
		});
		tl.to(cloud, {
			x: Math.floor(Math.random() * 22 + 7),
			duration: Math.floor(Math.random() * 10 + 2),
			ease: "none",
		});
		tl.to(cloud, {
			x: 0,
			duration: Math.floor(Math.random() * 10 + 2),
			ease: "none",
		});

		return tl;
	};

	const masterAnimation = () => {
		let master = gsap.timeline();

		master.add(animatePackage(package1.current), 0);
		master.add(animatePackage(package2.current), 0);
		master.add(animatePackage(package3.current), 0);

		master.add(animateCloud(cloud1.current), 0);
		master.add(animateCloud(cloud2.current), 0);
		master.add(animateCloud(cloud3.current), 0);
		master.add(animateCloud(cloud4.current), 0);

		master.play();
	};

	React.useEffect(() => masterAnimation());

	return (
		<div className={classes.root}>
			<img
				src={require("../../images/Team/TeamSvgs/Package1.svg")}
				alt="Package 1"
				className={`${classes.package} ${classes.package1}`}
				ref={package1}
			/>

			<img
				src={require("../../images/Team/TeamSvgs/Package1.svg")}
				alt="Package 2"
				className={`${classes.package} ${classes.package2}`}
				ref={package2}
			/>

			<img
				src={require("../../images/Team/TeamSvgs/Package1.svg")}
				alt="Package 3"
				className={`${classes.package} ${classes.package3}`}
				ref={package3}
			/>

			<div style={{ position: "absolute", zIndex: -1 }}>
				<img
					src={require("../../images/Speakers/SpeakersSvgs/Cloud2.svg")}
					alt="Cloud 1"
					className={`${classes.cloud} ${classes.cloud1}`}
					ref={cloud1}
				/>

				<img
					src={require("../../images/Speakers/SpeakersSvgs/Cloud4.svg")}
					alt="Cloud 2"
					className={`${classes.cloud} ${classes.cloud2}`}
					ref={cloud2}
				/>

				<img
					src={require("../../images/Speakers/SpeakersSvgs/Cloud5.svg")}
					alt="Cloud 3"
					className={`${classes.cloud} ${classes.cloud3}`}
					ref={cloud3}
				/>

				<img
					src={require("../../images/Speakers/SpeakersSvgs/Cloud3.svg")}
					alt="Cloud 4"
					className={`${classes.cloud} ${classes.cloud4}`}
					ref={cloud4}
				/>
			</div>

			<div>
				<Typography variant="h3" align="center">
					<Box fontStyle="bold" m={1} fontWeight="700">
						Team
					</Box>
				</Typography>

				<Grid container>
					<Grid item xs={1} />
					<Grid item container xs={10} justify="space-around">
						<Grid item container sm={3} xs={6} justify="space-around">
							<TeamMember
								firstName={"Omar"}
								lastName={"Abdullah"}
								position={"Co-Founder"}
							/>
						</Grid>
						<Grid item container sm={3} xs={6} justify="space-around">
							<TeamMember
								firstName={"David"}
								lastName={"Zhang"}
								position={"Director"}
							/>
						</Grid>
						<Grid item container sm={3} xs={6} justify="center">
							<TeamMember
								firstName={"Leroy"}
								lastName={"Shaigorodsky"}
								position={"Co-Director of Graphic Design"}
							/>
						</Grid>
						<Grid item container sm={3} xs={6} justify="center">
							<TeamMember
								firstName={"Rachelle"}
								lastName={"Hu"}
								position={"Co-Director of Graphic Design"}
							/>
						</Grid>
						<Grid item container sm={3} xs={6} justify="center">
							<TeamMember
								firstName={"Claire"}
								lastName={"Cho"}
								position={"Co-Director of Logistics"}
							/>
						</Grid>
						<Grid item container sm={3} xs={6} justify="center">
							<TeamMember
								firstName={"Rico"}
								lastName={"Zhu"}
								position={"Director of Technology"}
							/>
						</Grid>
						<Grid item container sm={3} xs={6} justify="center">
							<TeamMember
								firstName={"Lucy"}
								lastName={"Xu"}
								position={"Co-Director of Logistics"}
							/>
						</Grid>
						<Grid item container sm={3} xs={6} justify="center">
							<TeamMember firstName={"Adriana"} position={"Position"} />
						</Grid>
						<Grid item container sm={3} xs={6} justify="center">
							<TeamMember
								firstName={"Saadwi"}
								lastName={"Balaji"}
								position={"Member of Graphic Design and Public Relations"}
							/>
						</Grid>
						<Grid item container sm={3} xs={6} justify="center">
							<TeamMember
								firstName={"Reezan"}
								lastName={"Visram"}
								position={"Frontend Developer"}
							/>
						</Grid>
						<Grid item container sm={3} xs={6} justify="center">
							<TeamMember
								firstName={"Fara"}
								lastName={"Yan"}
								position={"Member of Graphic Design"}
							/>
						</Grid>
						<Grid item container sm={3} xs={6} justify="center">
							<TeamMember
								firstName={"Malek"}
								lastName={"Wabha"}
								position={"Sponshorships Coordinator and Member of Logistics"}
							/>
						</Grid>
						<Grid item container sm={3} xs={6} justify="center">
							<TeamMember
								firstName={"Will"}
								lastName={"Feldman"}
								position={"Member of Graphic Design and Technology"}
							/>
						</Grid>
						<Grid item container sm={3} xs={6} justify="center">
							<TeamMember
								firstName={"Rahul"}
								lastName={"Sunil"}
								position={"Backend Developer"}
							/>
						</Grid>
						<Grid item container sm={3} xs={6} justify="center">
							<TeamMember
								firstName={"Bhavya"}
								lastName={"Ghuduru"}
								position={"Member of Logistics"}
							/>
						</Grid>
					</Grid>
					<Grid item xs={1} />
				</Grid>
			</div>
		</div>
	);
}
