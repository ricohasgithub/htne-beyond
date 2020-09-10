import React from "react";

import { Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	answer: {
		maxHeight: "0",
		overflow: "hidden",
		transition: "max-height 0.3s ease",
	},

	open: {
		maxHeight: "10vh !important",
	},
}));

export default function QuestionAnswer({ question, answer }) {
	const classes = useStyles();
	const [answerOpen, toggleAnswerOpen] = React.useState(false);

	let answerClasses = `${classes.answer}`;

	if (answerOpen) {
		answerClasses = `${classes.answer} ${classes.open}`;
	}

	const toggleAnswerClass = () => {
		toggleAnswerOpen(!answerOpen);
	};

	return (
		<div style={{ marginTop: "1vh" }}>
			<Button color="inherit" onClick={toggleAnswerClass}>
				<img
					src={require("../../images/FAQSvgs/Plus.svg")}
					style={{ marginRight: "2vw" }}
					alt="Plus sign"
				/>
				<Typography variant="h6">{question}</Typography>
			</Button>

			<div className={answerClasses}>
				<Typography variant="body1">{answer}</Typography>
			</div>
		</div>
	);
}
