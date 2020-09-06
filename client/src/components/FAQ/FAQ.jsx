import React from "react";
import { Grid, Typography, Box, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import QuestionAnswer from "./QuestionAnswer";

const useStyles = makeStyles((theme) => ({
	root: {
		height: "100vh",
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
