import React from "react";

import { Typography, Box, Grid } from "@material-ui/core";

// Custom Components
import TeamMember from "./TeamMember";

export default function Team() {
	return (
		<div
			style={{
				marginTop: "20vh",
				height: "60vh",
			}}
		>
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
	);
}
