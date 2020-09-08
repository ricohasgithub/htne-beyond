import React from "react";

import { Typography, Box, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// Custom Components
import TeamMember from "./TeamMember";

const useStyles = makeStyles((theme) => ({
	root: {
		height: "60vh",
		display: "flex",
		alignItems: "center",
		justifyContent: "space-around",
		height: "80vh",
	},

	package: {
		position: "absolute",
		width: "15vw",
		height: "15vh",
		zIndex: -1,
		opacity: 0.6,
	},

	package1: {
		left: "10vw",
		top: "470vh",
	},

	package2: {
		left: "60vw",
		top: "490vh",
	},

	package3: {
		left: "80vw",
		top: "520vh",
	},
}));

export default function Team() {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<img
				src={require("../../images/TeamSvgs/Package1.svg")}
				alt="Package 1"
				className={`${classes.package} ${classes.package1}`}
			/>

			<img
				src={require("../../images/TeamSvgs/Package1.svg")}
				alt="Package 3"
				className={`${classes.package} ${classes.package2}`}
			/>

			<img
				src={require("../../images/TeamSvgs/Package1.svg")}
				alt="Package 2"
				className={`${classes.package} ${classes.package3}`}
			/>

			<div>
				<Typography variant="h3" align="center">
					<Box fontStyle="bold" m={1}>
						Team
					</Box>
				</Typography>

				<Grid container>
					<Grid item container xs={4} justify="center">
						<TeamMember name={"First Last"} position={"Position"} />
					</Grid>
					<Grid item container xs={4} justify="center">
						<TeamMember name={"First Last"} position={"Position"} />
					</Grid>
					<Grid item container xs={4} justify="center">
						<TeamMember name={"First Last"} position={"Position"} />
					</Grid>
					<Grid item container xs={4} justify="center">
						<TeamMember name={"First Last"} position={"Position"} />
					</Grid>
					<Grid item container xs={4} justify="center">
						<TeamMember name={"First Last"} position={"Position"} />
					</Grid>
					<Grid item container xs={4} justify="center">
						<TeamMember name={"First Last"} position={"Position"} />
					</Grid>
				</Grid>
			</div>
		</div>
	);
}
