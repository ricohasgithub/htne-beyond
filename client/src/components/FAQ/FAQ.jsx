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

	return (
		<div className={classes.root}>
			<img
				src={require("../../images/FAQSvgs/FAQBackground.svg")}
				alt="Background"
				className={classes.backgroundImg}
			/>

			<Typography variant="h3" align="center" style={{ paddingTop: "12.5%" }}>
				<Box fontStyle="bold" m={1} fontWeight="700">
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
