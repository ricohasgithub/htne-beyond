import React, { Component } from "react";

import { Grid, Typography, Box } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

// Custom Components
import SpeakerCard from "./SpeakerCard";

import gsap from "gsap";

const styles = (theme) => ({
	root: {
		display: "flex",
		flexDirection: "column",
		height: "80vh",
		minHeight: "600px",
		justifyContent: "space-evenly",
		overflowX: "hidden",

		[theme.breakpoints.up("lg")]: {
			marginTop: "20vh",
		},
	},

	arrowPart: {
		display: "",
	},

	arrow: {
		height: "5vh",
		width: "5vw",
		userSelect: "none",

		"&:hover": {
			cursor: "pointer",
		},

		"&:hover $arrowPart": {
			fill: "#57b9ff",
		},
	},

	rightArrow: {
		transform: "rotate(180deg)",
	},
});

class Speakers extends Component {
	state = {
		intervalId: null,
		inTransition: null,
	};

	constructor(props) {
		super(props);
		this.cardContainer = React.createRef(null);
	}

	moveCardsRight = () => {
		let tl = gsap.timeline();

		tl.to(this.cardContainer.current, {
			autoAlpha: 0,
			x: "-60vw",
			duration: 1,
		});

		tl.to(this.cardContainer.current, { x: 1500, duration: 0 });

		const speakerCardsCopy = [...this.speakerCards];

		this.speakerCards[0] = speakerCardsCopy[speakerCardsCopy.length - 1];

		for (let i = 1; i < this.speakerCards.length; i++) {
			this.speakerCards[i] = speakerCardsCopy[i - 1];
		}

		tl.to(this.cardContainer.current, {
			autoAlpha: 1,
			x: 0,
			duration: 1,
		});

		tl.to(this.cardContainer.current, { x: 0, autoAlpha: 1, duration: 0 });

		this.forceUpdate();
	};

	moveCardsLeft = () => {
		let tl = gsap.timeline();

		tl.to(this.cardContainer.current, {
			autoAlpha: 0,
			x: "60vw",
			duration: 1,
		});

		tl.to(this.cardContainer.current, { x: -1500, duration: 0 });

		const speakerCardsCopy = [...this.speakerCards];

		this.speakerCards[speakerCardsCopy.length - 1] = speakerCardsCopy[0];

		for (let i = 0; i < this.speakerCards.length - 1; i++) {
			this.speakerCards[i] = speakerCardsCopy[i + 1];
		}

		tl.to(this.cardContainer.current, {
			autoAlpha: 1,
			x: 0,
			duration: 1,
		});

		tl.play();

		this.forceUpdate();
	};

	speakerCards = [
		<SpeakerCard
			speakerName={"To Be Determined"}
			speakerSummary={
				"We're working hard to provide you with talks and workshops from the highest quality and most thought provoking technical leaders in the field. If you are interested in speaking @Beyond please send us an email at hello@hackthene.com"
			}
			key={0}
		/>,
		<SpeakerCard
			speakerName={"To Be Determined"}
			speakerSummary={
				"We're working hard to provide you with talks and workshops from the highest quality and most thought provoking technical leaders in the field. If you are interested in speaking @Beyond please send us an email at hello@hackthene.com"
			}
			key={1}
		/>,
		<SpeakerCard
			speakerName={"To Be Determined"}
			speakerSummary={
				"We're working hard to provide you with talks and workshops from the highest quality and most thought provoking technical leaders in the field. If you are interested in speaking @Beyond please send us an email at hello@hackthene.com"
			}
			key={2}
		/>,
		<SpeakerCard
			speakerName={"To Be Determined"}
			speakerSummary={
				"We're working hard to provide you with talks and workshops from the highest quality and most thought provoking technical leaders in the field. If you are interested in speaking @Beyond please send us an email at hello@hackthene.com"
			}
			key={3}
		/>,
		<SpeakerCard
			speakerName={"To Be Determined"}
			speakerSummary={
				"We're working hard to provide you with talks and workshops from the highest quality and most thought provoking technical leaders in the field. If you are interested in speaking @Beyond please send us an email at hello@hackthene.com"
			}
			key={4}
		/>,
	];

	componentDidMount() {
		var intervalId = setInterval(this.moveCardsLeft, 10000);

		this.setState({ intervalId: intervalId });
	}

	componentWillUnmount() {
		clearInterval(this.state.intervalId);
	}

	// className={`${classes.arrow} ${classes.leftArrow}`}
	// onClick={this.moveCardsRight}

	render() {
		const { classes } = this.props;

		return (
			<div className={classes.root}>
				<Typography variant="h3" align="center">
					<Box fontStyle="bold" m={1} fontWeight="700">
						Speakers
					</Box>
				</Typography>
				<Grid container>
					<Grid item container xs={2} alignItems="center">
						<svg
							width="55"
							height="55"
							viewBox="0 0 55 55"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							className={`${classes.arrow} ${classes.leftArrow}`}
							onClick={this.moveCardsRight}
						>
							<rect
								x="27.7949"
								y="54.1138"
								width="38.2535"
								height="7.53022"
								rx="3.76511"
								transform="rotate(-135 27.7949 54.1138)"
								fill="white"
								className={classes.arrowPart}
							/>
							<rect
								x="33.1201"
								y="5.33972"
								width="38.2535"
								height="7.53022"
								rx="3.76511"
								transform="rotate(135 33.1201 5.33972)"
								fill="white"
								className={classes.arrowPart}
							/>
						</svg>
					</Grid>
					<Grid item container xs={8} direction="column">
						<div className={classes.main} ref={this.cardContainer}>
							{this.speakerCards[0]}
						</div>
					</Grid>

					<Grid item container xs={2} alignItems="center" justify="flex-end">
						<svg
							width="55"
							height="55"
							viewBox="0 0 55 55"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							className={`${classes.arrow} ${classes.rightArrow}`}
							onClick={this.moveCardsLeft}
						>
							<rect
								x="27.7949"
								y="54.1138"
								width="38.2535"
								height="7.53022"
								rx="3.76511"
								transform="rotate(-135 27.7949 54.1138)"
								fill="white"
								className={classes.arrowPart}
							/>
							<rect
								x="33.1201"
								y="5.33972"
								width="38.2535"
								height="7.53022"
								rx="3.76511"
								transform="rotate(135 33.1201 5.33972)"
								fill="white"
								className={classes.arrowPart}
							/>
						</svg>
					</Grid>
				</Grid>
			</div>
		);
	}
}

export default withStyles(styles, { withTheme: true })(Speakers);
