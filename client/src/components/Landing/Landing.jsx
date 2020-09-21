import React from "react";
import RoomIcon from "@material-ui/icons/Room";
import PublicIcon from "@material-ui/icons/Public";
import { Grid, Typography, Button, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// Custom Components
import Header from "./Header";

import gsap from "gsap";

const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: theme.palette.primary.main,
		color: theme.palette.primary.contrastText,
		overflow: "hidden",
	},

	wordMark: {
		width: "100px",
		height: "auto",
	},

	rootGrid: {
		marginTop: "5vh",
	},

	registerBtn: {
		borderRadius: "73px",
		margin: "0.5vh",
		backgroundColor: "#F5C042",
		color: "#FFFFFF",
	},

	partnerBtn: {
		borderRadius: "73px",
		margin: "0.5vh",
		color: "#FFFFFF",
		backgroundColor: "#E07934",
	},

	landingInfo: {
		[theme.breakpoints.up("md")]: {
			marginTop: "10vh",
		},
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
			top: " 70vh",
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
			left: "15vw",
			top: "75vh",
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

	const redPlanet = React.useRef(null);
	const greenPlanet = React.useRef(null);
	const yellowPlanet = React.useRef(null);

	const rotatePlanets = () => {
		let tl = gsap.timeline({ repeat: -1, repeatDelay: 0 });

		tl.to(redPlanet.current, {
			duration: 18,
			rotate: "360deg",
			ease: "none",
		});

		tl.to(
			greenPlanet.current,
			{
				duration: 18,
				rotate: "360deg",
				ease: "none",
			},
			0
		);

		tl.to(
			yellowPlanet.current,
			{
				duration: 18,
				rotate: "360deg",
				ease: "none",
			},
			0
		);

		return tl;
	};

	const starTwinkle = (star) => {
		let tl = gsap.timeline({
			repeat: -1,
			delay: Math.floor(Math.random() * 5),
			repeatDelay: Math.floor(Math.random() * 5),
		});

		tl.to(star, { fillOpacity: 0.3, duration: 1, ease: "none" });
		tl.to(star, { fillOpacity: 1, duration: 1, ease: "none" }, 0);
		tl.to(star, {
			delay: Math.floor(Math.random() * 3),
			fillOpacity: 0,
			duration: 2,
			ease: "none",
		});

		return tl;
	};

	const masterAnimation = () => {
		let master = gsap.timeline({ repeat: -1 });

		master.add(rotatePlanets(), 0);

		for (let i = 1; i < 11; i++) {
			master.add(starTwinkle(`#star${i}`, 0));
		}

		master.play();
	};

	React.useEffect(() => masterAnimation());

	return (
		<div className={classes.root}>
			<Header sideMenuClickHandler={sideMenuClickHandler} />
			<img
				src={require("../../images/LandingSvgs/landingCurves.svg")}
				alt="Landing page curves"
				className={classes.landingSvgs}
			/>

			<svg
				width="100%"
				height="100vh"
				viewBox="0 0 1087 385"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className={classes.landingSvgs}
			>
				<circle
					id="star1"
					cx="1082"
					cy="274"
					r="5"
					fill="white"
					fillOpacity="0.3"
				/>
				<circle
					id="star2"
					cx="5"
					cy="380"
					r="5"
					fill="white"
					fillOpacity="0.3"
				/>
				<circle
					id="star3"
					cx="910"
					cy="373"
					r="5"
					fill="white"
					fillOpacity="0.3"
				/>
				<circle id="star4" cx="510" cy="278" r="5" fill="white" />
				<circle
					id="star5"
					cx="491"
					cy="5"
					r="5"
					fill="white"
					fillOpacity="0.9"
				/>
				<circle
					id="star6"
					cx="804"
					cy="85"
					r="5"
					fill="white"
					fillOpacity="0.3"
				/>
				<circle id="star7" cx="819" cy="329" r="5" fill="white" />
				<circle
					id="star8"
					cx="536"
					cy="300"
					r="5"
					fill="white"
					fillOpacity="0.5"
				/>
				<circle id="star9" cx="936" cy="129" r="5" fill="white" />
				<circle
					id="star10"
					cx="819"
					cy="329"
					r="5"
					fill="white"
					fillOpacity="0.8"
				/>
			</svg>
			<Grid container className={classes.rootGrid}>
				<Grid
					item
					container
					md={6}
					sm={12}
					direction="column"
					alignItems="center"
					className={classes.landingInfo}
				>
					<Typography variant="h3" align="center">
						<Box fontStyle="bold" m={1} fontWeight="700">
							Hack the Northeast
						</Box>
					</Typography>
					{/* <Typography variant="h1">
						<Box fontStyle="italic" m={1} fontWeight="700">
							BEYOND
						</Box>
					</Typography> */}
					<img
						src={require("../../images/LandingSvgs/BeyondWordmark.png")}
						alt="Beyond Wordmark"
						className={classes.wordMark}
					/>
					<Typography variant="h6">
						{" "}
						<Box fontStyle="bold" m={1} fontWeight="700">
							Dec. 12-13 | Hybrid Hackathon
						</Box>
						<Box fontWeight="420">
							<RoomIcon />
							NYC, NY, USA
							<br></br>
							<PublicIcon />
							Anywhere, Worldwide
						</Box>
					</Typography>
					<Button
						variant="contained"
						className={classes.registerBtn}
						href="https://hackthenortheast.typeform.com/to/W6M5xScM?fbclid=IwAR0D12v19ZFEIKjTaYpKIPn4AqguAiPd2IxEvCWE2wp2e82br5l7_Nlipi4"
					>
						<Typography variant="subtitle1">
							Become a Campus Ambassador
						</Typography>
					</Button>

					<Button
						variant="contained"
						className={classes.partnerBtn}
						href="mailto:htne-sponsorships@hackthene.com"
					>
						<Typography variant="subtitle1">Partner with Us</Typography>
					</Button>
				</Grid>

				<Grid item container sm={6} xs={12}>
					<img
						src={require("../../images/LandingSvgs/Planets/RedPlanet.svg")}
						alt="Red Planet"
						className={`${classes.landingGraphic} ${classes.redPlanet}`}
						ref={redPlanet}
					/>
					<img
						src={require("../../images/LandingSvgs/Planets/YellowPlanet.svg")}
						alt="Yellow Planet"
						className={`${classes.landingGraphic} ${classes.yellowPlanet}`}
						ref={yellowPlanet}
					/>
					<img
						src={require("../../images/LandingSvgs/Planets/GreenPlanet.svg")}
						alt="Green Planet"
						className={`${classes.landingGraphic} ${classes.greenPlanet}`}
						ref={greenPlanet}
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
