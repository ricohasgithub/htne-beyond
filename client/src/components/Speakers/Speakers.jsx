import React, { Component } from "react";

import { withStyles } from "@material-ui/core/styles";

import gsap from "gsap";
// Custom Components
import SpeakerCard from "./SpeakerCard";
import { Typography, Box } from "@material-ui/core";

// REDO THIS SECTION TO BE MORE LIKE FIGMA OPTION 2, MAKES IT FAR EASIER FOR USER HANDLING

const styles = (theme) => ({
	root: {
		display: "flex",
		flexDirection: "column",
		overflowX: "hidden",
		overflowY: "hidden",
		alignItems: "center",
		justifyContent: "space-around",
		height: "100vh",
	},

	cardContainer: {
		overflowX: "hidden",
		overflowY: "hidden",
		display: "flex",
		opacity: 1,

		[theme.breakpoints.down("sm")]: {
			flexDirection: "column",
			justifyContent: "space-around",
			alignItems: "center",
		},
	},

	individualCardContainer: {
		width: "40vw",
		height: "25vh",
		paddingLeft: "1vw",
		paddingRight: "1vw",
		transition: "transform 0.3s ease",
		[theme.breakpoints.down("sm")]: {
			width: "80vw",
		},
	},

	justOutsideMiddleCardContainer: {
		transform: "scale(0.75, 0.75)",
	},

	edgeCardContainers: {
		display: "none",
	},

	rocket1: {
		height: "35vh",
		width: "35vw",
		position: "absolute",
		left: "60vw",
		top: "275vh",

		[theme.breakpoints.down("md")]: {
			display: "none",
		},
	},

	rocket2: {
		height: "25vh",
		width: "25vw",
		position: "absolute",
		left: "0vw",
		top: "350vh",

		[theme.breakpoints.down("md")]: {
			display: "none",
		},
	},

	cloud1: {
		height: "25vh",
		width: "25vw",
		left: "0vw",
		top: "300vh",
		position: "absolute",

		[theme.breakpoints.down("md")]: {
			display: "none",
		},
	},

	cloud2: {
		height: "25vh",
		width: "25vw",
		left: "45vw",
		top: "280vh",
		position: "absolute",

		[theme.breakpoints.down("md")]: {
			display: "none",
		},
	},

	cloud3: {
		height: "25vh",
		width: "25vw",
		left: "65vw",
		top: "320vh",
		position: "absolute",

		[theme.breakpoints.down("md")]: {
			display: "none",
		},
	},

	cloud4: {
		height: "25vh",
		width: "25vw",
		left: "60vw",
		top: "370vh",
		position: "absolute",

		[theme.breakpoints.down("md")]: {
			display: "none",
		},
	},

	cloud5: {
		height: "25vh",
		width: "25vw",
		left: "10vw",
		top: "340vh",
		position: "absolute",

		[theme.breakpoints.down("md")]: {
			display: "none",
		},
	},
});

class Speakers extends Component {
	state = {
		intervalId: null,
		inTransition: false,
	};

	constructor(props) {
		super(props);
		this.cardContainer = React.createRef(null);
		this.rocket1 = React.createRef(null);
		this.rocket2 = React.createRef(null);
	}

	speakerCards = [
		<SpeakerCard
			speakerName={"Name1"}
			speakerSummary={
				"Lorem ipsum dolor sit amet, consectet adipiscing elit. Duis vitae orci efficitur, pellentesque.Lorem ipsum dolor sit amet, consectet adipiscing elit. Duis vitae orci efficitur, pellentesque."
			}
			key={0}
		/>,
		<SpeakerCard
			speakerName={"Name2"}
			speakerSummary={
				"Lorem ipsum dolor sit amet, consectet adipiscing elit. Duis vitae orci efficitur, pellentesque.Lorem ipsum dolor sit amet, consectet adipiscing elit. Duis vitae orci efficitur, pellentesque."
			}
			key={1}
		/>,
		<SpeakerCard
			speakerName={"Name3"}
			speakerSummary={
				"Lorem ipsum dolor sit amet, consectet adipiscing elit. Duis vitae orci efficitur, pellentesque.Lorem ipsum dolor sit amet, consectet adipiscing elit. Duis vitae orci efficitur, pellentesque."
			}
			key={2}
		/>,
		<SpeakerCard
			speakerName={"Name4"}
			speakerSummary={
				"Lorem ipsum dolor sit amet, consectet adipiscing elit. Duis vitae orci efficitur, pellentesque.Lorem ipsum dolor sit amet, consectet adipiscing elit. Duis vitae orci efficitur, pellentesque."
			}
			key={3}
		/>,
		<SpeakerCard
			speakerName={"Name5"}
			speakerSummary={
				"Lorem ipsum dolor sit amet, consectet adipiscing elit. Duis vitae orci efficitur, pellentesque.Lorem ipsum dolor sit amet, consectet adipiscing elit. Duis vitae orci efficitur, pellentesque."
			}
			key={4}
		/>,
	];

	moveCardsRight = () => {
		const speakerCardsCopy = [...this.speakerCards];

		this.speakerCards[0] = speakerCardsCopy[speakerCardsCopy.length - 1];

		for (let i = 1; i < this.speakerCards.length; i++) {
			this.speakerCards[i] = speakerCardsCopy[i - 1];
		}

		let tl = gsap.timeline();

		tl.fromTo(
			this.cardContainer.current,
			0.5,
			{ autoAlpha: 0 },
			{ autoAlpha: 1 }
		);
		tl.play();

		this.forceUpdate();
	};

	moveCardsLeft = () => {
		const speakerCardsCopy = [...this.speakerCards];

		this.speakerCards[speakerCardsCopy.length - 1] = speakerCardsCopy[0];

		for (let i = 0; i < this.speakerCards.length - 1; i++) {
			this.speakerCards[i] = speakerCardsCopy[i + 1];
		}

		let tl = gsap.timeline();

		tl.fromTo(
			this.cardContainer.current,
			0.5,
			{ autoAlpha: 0 },
			{ autoAlpha: 1 }
		);
		tl.play();

		this.forceUpdate();
	};

	moveRockets = (rocket) => {
		let tl = gsap.timeline({
			repeat: -1,
			repeatDelay: Math.floor(Math.random() * 5),
		});

		tl.to(rocket, { y: "+=10vh", duration: 10 });
		tl.to(rocket, { y: "-=10vh", duration: 5 });
		tl.to(rocket, { y: 0, duration: 5 });

		return tl;
	};

	componentDidMount() {
		var intervalId = setInterval(this.moveCardsRight, 10000);

		let master = gsap.timeline();

		master.add(this.moveRockets(this.rocket1.current), 0);
		master.add(this.moveRockets(this.rocket2.current), 0);

		this.setState({ intervalId: intervalId });
	}

	componentWillUnmount() {
		clearInterval(this.state.intervalId);
	}

	render() {
		const { classes } = this.props;
		let edgeContainerClasses = `${classes.individualCardContainer} ${classes.edgeCardContainers}`;
		let justOutsideMiddleCardContainerClasses = `${classes.individualCardContainer} ${classes.justOutsideMiddleCardContainer}`;
		let mainContainerClasses = `${classes.individualCardContainer}`;

		return (
			<div className={classes.root}>
				<img
					src={require("../../images/Speakers/SpeakersSvgs/Rocket1.svg")}
					alt="Rocket 1"
					className={classes.rocket1}
					ref={this.rocket1}
				/>
				<img
					src={require("../../images/Speakers/SpeakersSvgs/Rocket2.svg")}
					alt="Rocket 2"
					className={classes.rocket2}
					ref={this.rocket2}
				/>

				<img
					src={require("../../images/Speakers/SpeakersSvgs/Cloud1.svg")}
					alt="Cloud 1"
					className={classes.cloud1}
				/>

				<img
					src={require("../../images/Speakers/SpeakersSvgs/Cloud2.svg")}
					alt="Cloud 2"
					className={classes.cloud2}
				/>

				<img
					src={require("../../images/Speakers/SpeakersSvgs/Cloud3.svg")}
					alt="Cloud 3"
					className={classes.cloud3}
				/>

				<img
					src={require("../../images/Speakers/SpeakersSvgs/Cloud4.svg")}
					alt="Cloud 4"
					className={classes.cloud4}
				/>

				<img
					src={require("../../images/Speakers/SpeakersSvgs/Cloud5.svg")}
					alt="Cloud 5"
					className={classes.cloud5}
				/>
				<div>
					<Typography variant="h3" style={{ textAlign: "center" }}>
						<Box fontStyle="bold" m={1}>
							Speakers
						</Box>
					</Typography>
					<div className={classes.cardContainer} ref={this.cardContainer}>
						<div className={edgeContainerClasses}>{this.speakerCards[0]}</div>
						<div
							className={justOutsideMiddleCardContainerClasses}
							onClick={this.moveCardsRight}
						>
							{this.speakerCards[1]}
						</div>
						<div className={mainContainerClasses}>{this.speakerCards[2]}</div>
						<div
							className={justOutsideMiddleCardContainerClasses}
							onClick={this.moveCardsLeft}
						>
							{this.speakerCards[3]}
						</div>
						<div className={edgeContainerClasses}>{this.speakerCards[4]}</div>
					</div>
				</div>
			</div>
		);
	}
}

export default withStyles(styles, { withTheme: true })(Speakers);
