import React from "react";

import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	root: {
		color: "#ABC9F0",
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-around",
		alignItems: "center",

		"&:hover": {
			cursor: "pointer",
		},
	},

	close: {
		display: "none",
	},

	open: {
		display: "block",
	},

	memoji: {
		width: "75%",
		height: "auto",
		textAlign: "center",
	},
}));

export default function TeamMember({ firstName, lastName, position }) {
	const classes = useStyles();

	const [infoClasses, setInfoClasses] = React.useState(
		`${classes.memberInfo} ${classes.close}`
	);

	const openInfo = () => {
		console.log("Mouse entered");
		setInfoClasses(`${classes.memberInfo} ${classes.open}`);
	};

	const closeInfo = () => {
		console.log("Mouse exited");
		setInfoClasses(`${classes.memberInfo} ${classes.close}`);
	};

	return (
		<div
			className={classes.root}
			onMouseEnter={openInfo}
			onMouseLeave={closeInfo}
		>
			<img
				src={require(`../../images/Team/TeamMemojis/${firstName}.png`)}
				alt={`${firstName}`}
				className={classes.memoji}
			/>

			<div className={infoClasses}>
				<Typography variant="h4" align="center">
					{firstName} {lastName}
				</Typography>
				<Typography align="center" variant="h6">
					{position}
				</Typography>
			</div>
		</div>
	);
}
