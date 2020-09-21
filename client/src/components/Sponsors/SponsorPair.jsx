import React from "react";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		justifyContent: "center",
		width: "20%",
		marginLeft: "15vw",
		marginRight: "15vw",
	},

	logoFile: {
		width: "25vw",
		height: "25vh",
		minWidth: "50px",
		minHeight: "50px",
	},

	graphic: {
		height: "25vh",
		width: "25vw",
	},
}));

export default function SponsorPair({ logoFile, graphicFile }) {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<img
				src={require(`../../images/SponsorsSvgs/SponsorLogos/${logoFile}`)}
				alt={logoFile}
				className={classes.logoFile}
			/>

			<img
				src={require(`../../images/SponsorsSvgs/${graphicFile}`)}
				alt={logoFile}
				className={classes.graphic}
			/>
		</div>
	);
}
