import React from "react";
import { Grid, Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import QuestionAnswer from "./QuestionAnswer";

const useStyles = makeStyles((theme) => ({
	root: {
		height: "100vh",
		overflow: "hidden",
	},

	backgroundImg: {
		position: "absolute",
		height: "100%",
		width: "100%",
		zIndex: -1,

		[theme.breakpoints.down("sm")]: {
			display: "none",
		},
	},

	meteors: {
		position: "absolute",
		height: "10vh",
		width: "10vw",
	},

	meteor1: {
		left: "30vw",
		top: "390vh",
	},

	meteor2: {
		left: "70vw",
		top: "400vh",
	},

	meteor3: {
		left: "20vw",
		top: "450vh",
	},

	meteor4: {
		left: "60vw",
		top: "435vh",
	},

	meteor5: {
		top: "450vh",
	},
}));

export default function FAQ() {
	const classes = useStyles();

	// const meteor1 = React.useRef(null);
	// const meteor2 = React.useRef(null);
	// const meteor3 = React.useRef(null);
	// const meteor4 = React.useRef(null);
	// const meteor5 = React.useRef(null);

	// const moveMetors = () => {
	// 	console.log("Moving");
	// 	let tl = gsap.timeline({ repeat: -1 });

	// 	tl.to(meteor1.current, { x: "+=59vw", duration: 0.5 });
	// 	tl.to(meteor1.current, { x: "-1000", duration: 0.1 });
	// 	tl.to(meteor1.current, { x: 0, duration: 0.5 });

	// 	tl.play();
	// };

	// React.useEffect(() => moveMetors(), []);

	return (
		<div className={classes.root}>
			<img
				src={require("../../images/FAQSvgs/FAQBackground.svg")}
				alt="Background"
				className={classes.backgroundImg}
			/>
			{/* 
			<img
				src={require("../../images/FAQSvgs/Meteor1.svg")}
				alt="Meteor 1"
				className={`${classes.meteors} ${classes.meteor1}`}
				ref={meteor1}
			/>

			<img
				src={require("../../images/FAQSvgs/Meteor2.svg")}
				alt="Meteor 2"
				className={`${classes.meteors} ${classes.meteor2}`}
				ref={meteor2}
			/>

			<img
				src={require("../../images/FAQSvgs/Meteor3.svg")}
				alt="Meteor 3"
				className={`${classes.meteors} ${classes.meteor3}`}
				ref={meteor3}
			/>

			<img
				src={require("../../images/FAQSvgs/Meteor4.svg")}
				alt="Meteor 4"
				className={`${classes.meteors} ${classes.meteor4}`}
				ref={meteor4}
			/>

			<img
				src={require("../../images/FAQSvgs/Meteor5.svg")}
				alt="Meteor 5"
				className={`${classes.meteors} ${classes.meteor5}`}
				ref={meteor5}
			/> */}

			<Typography variant="h3" align="center" style={{ paddingTop: "12.5%" }}>
				<Box fontStyle="bold" m={1}>
					FAQ
				</Box>
			</Typography>

			<Grid container>
				<Grid item sm={2} />
				<Grid item container sm={4}>
					<Grid item xs={12}>
						<QuestionAnswer
							question="What is a Hackathon?"
							answer="Placeholder text"
						/>
						<QuestionAnswer
							question="What if I don't have a team?"
							answer="Placeholder text"
						/>
						<QuestionAnswer
							question="When is Beyond?"
							answer="Placeholder text"
						/>
					</Grid>
				</Grid>

				<Grid item container sm={4}>
					<Grid item xs={12}>
						<QuestionAnswer
							question="Who can attend?"
							answer="Placeholder text"
						/>
						<QuestionAnswer
							question="What if I don't know how to code?"
							answer="Placeholder text"
						/>
						<QuestionAnswer
							question="I have more questions!"
							answer="Placeholder text"
						/>
					</Grid>
				</Grid>
				<Grid item sm={2} />
			</Grid>
		</div>
	);
}
