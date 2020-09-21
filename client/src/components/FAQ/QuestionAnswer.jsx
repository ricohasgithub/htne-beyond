import React from "react";

import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	root: {
		marginTop: "1vh",
		userSelect: "none",

		"&:hover": {
			cursor: "pointer",
			color: "#57b9ff",
		},

		paddingLeft: "5%",
		paddingRight: "5%",
	},

	answer: {
		maxHeight: "0",
		overflow: "hidden",
		transition: "max-height 0.3s ease",
		color: "#FFFFFF",
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
		<div className={classes.root} onClick={toggleAnswerClass}>
			<div style={{ display: "flex" }}>
				<img
					src={require("../../images/FAQSvgs/Plus.svg")}
					style={{ marginRight: "2vw" }}
					alt="Plus sign"
				/>
				<Typography variant="h4">{question}</Typography>
			</div>
			<div className={answerClasses}>
				<Typography variant="body1">{answer}</Typography>
			</div>
		</div>
	);
}
