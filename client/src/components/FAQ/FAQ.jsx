import React from "react";
import { Grid, Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import QuestionAnswer from "./QuestionAnswer";

import BackgroundImage from "../../images/FAQSvgs/FAQBackground.svg";

const useStyles = makeStyles((theme) => ({
	root: {
		overflow: "hidden",
		height: "120vh",

		display: "flex",
		flexDirection: "column",
		justifyContent: "space-around",

		[theme.breakpoints.up("md")]: {
			backgroundImage: `url(${BackgroundImage})`,
			backgroundSize: "100% 100%",
			backgroundRepeat: "no-repeat",
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
			<div>
				<Typography variant="h3" align="center">
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
								question="When is HTNE: Beyond?"
								answer="Placeholder text"
							/>
							<QuestionAnswer
								question="How does the Hybrid Format work?"
								answer="Placeholder text"
							/>
						</Grid>
					</Grid>

					<Grid item container sm={4}>
						<Grid item xs={12}>
							<QuestionAnswer
								question="Who can attend?"
								answer="Every student at a High School or University worldwide is eligible to participate"
							/>
							<QuestionAnswer
								question="What if I don't know how to code?"
								answer="Placeholder text"
							/>
							<QuestionAnswer
								question="How do I apply for the In Person part of the event?"
								answer="Placeholder text"
							/>
							<QuestionAnswer
								question="I have more questions!"
								answer="Please reach out to support@hackthene.com for any additional concerns."
							/>
						</Grid>
					</Grid>
					<Grid item sm={2} />
				</Grid>
			</div>
		</div>
	);
}
