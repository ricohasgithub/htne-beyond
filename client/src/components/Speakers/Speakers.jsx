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
		justifyContent: "space-around",
		overflowX: "hidden",
		marginTop: "20vh",
	},

	arrow: {
		height: "5vw",
		width: "5vw",
		userSelect: "none",

		"&:hover": {
			cursor: "pointer",
		},
	},

	rightArrow: {
		transform: "rotate(180deg)",
	},
});

class Speakers extends Component {
	constructor(props) {
		super(props);
		this.cardContainer = React.createRef(null);
	}

	moveCardsRight = () => {
		const speakerCardsCopy = [...this.speakerCards];

		this.speakerCards[0] = speakerCardsCopy[speakerCardsCopy.length - 1];

		for (let i = 1; i < this.speakerCards.length; i++) {
			this.speakerCards[i] = speakerCardsCopy[i - 1];
		}

		let tl = gsap.timeline();

		tl.from(this.cardContainer.current, {
			autoAlpha: 0,
			x: 1000,
			duration: 1,
		});

		tl.to(this.cardContainer.current, { x: 0, autoAlpha: 1, duration: 0 });

		this.forceUpdate();
	};

	moveCardsLeft = () => {
		let tl = gsap.timeline();

		tl.from(this.cardContainer.current, {
			autoAlpha: 0,
			x: -1000,
			duration: 1,
		});

		tl.to(this.cardContainer.current, { x: 0, autoAlpha: 1, duration: 0 });

		const speakerCardsCopy = [...this.speakerCards];

		this.speakerCards[speakerCardsCopy.length - 1] = speakerCardsCopy[0];

		for (let i = 0; i < this.speakerCards.length - 1; i++) {
			this.speakerCards[i] = speakerCardsCopy[i + 1];
		}

		tl.play();

		this.forceUpdate();
	};

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

	render() {
		const { classes } = this.props;

		return (
			<div className={classes.root}>
				<Grid container>
					<Grid item container xs={1} alignItems="center">
						<img
							src={require("../../images/Speakers/SpeakersSvgs/Arrow.svg")}
							alt="Left Arrow"
							className={`${classes.arrow} ${classes.leftArrow}`}
							onClick={this.moveCardsRight}
						/>
					</Grid>
					<Grid item container xs={10} direction="column">
						<Typography variant="h3" align="center">
							<Box fontStyle="bold" m={1}>
								Speakers
							</Box>
						</Typography>
						<div className={classes.main} ref={this.cardContainer}>
							{this.speakerCards[0]}
						</div>
					</Grid>

					<Grid item container xs={1} alignItems="center" justify="flex-end">
						<img
							src={require("../../images/Speakers/SpeakersSvgs/Arrow.svg")}
							alt="Right Arrow"
							className={`${classes.arrow} ${classes.rightArrow}`}
							onClick={this.moveCardsLeft}
						/>
					</Grid>
				</Grid>
			</div>
		);
	}
}

export default withStyles(styles, { withTheme: true })(Speakers);
