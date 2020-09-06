import React from "react";

import { Grid, Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	root: {
		height: "80vh",
	},

	satellite1: {
		height: "20vh",
		width: "20vw",
		position: "absolute",
	},

	satellite2: {
		height: "15vh",
		width: "15vw",
		top: "115vh",
		left: "80vw",
		position: "absolute",
	},

	cloud1: {
		height: "25vh",
		width: "25vw",
		top: "140vh",
		position: "absolute",
	},

	cloud2: {
		height: "25vh",
		width: "25vw",
		top: "115vh",
		left: "74vw",
		position: "absolute",
	},

	cloud3: {
		height: "25vh",
		width: "25vw",
		top: "160vh",
		left: "74vw",
		position: "absolute",
	},
}));

export default function AboutUs() {
	const classes = useStyles();
	return (
		<div
			style={{
				display: "flex",
				alignItems: "center",
				marginTop: "20vh",
				height: "60vh",
			}}
		>
			<img
				src={require("../../images/AboutUsSvgs/Satellite1.svg")}
				alt="Satellite"
				className={classes.satellite1}
			/>

			<img
				src={require("../../images/AboutUsSvgs/Satellite2.svg")}
				alt="Satellite"
				className={classes.satellite2}
			/>

			<img
				src={require("../../images/CloudSvgs/Cloud1.svg")}
				alt="Cloud"
				className={classes.cloud1}
			/>
			<img
				src={require("../../images/CloudSvgs/Cloud2.svg")}
				alt="Cloud"
				className={classes.cloud2}
			/>
			<img
				src={require("../../images/CloudSvgs/Cloud3.svg")}
				alt="Cloud"
				className={classes.cloud3}
			/>
			<Grid container>
				<Grid item xs={2} sm={4} />
				<Grid
					item
					container
					direction="column"
					alignItems="center"
					justify="space-around"
					xs={8}
					sm={4}
				>
					<div>
						<Typography variant="h3" align="center">
							<Box fontStyle="bold" m={1}>
								About Us
							</Box>
						</Typography>

						<Typography variant="h6" align="center">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
							vitae orci efficitur, pellentesque massa et, placerat eros. Lorem
							ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae
							nulla in neque dignissim convallis sit amet nec felis.
						</Typography>
					</div>
				</Grid>
				<Grid item xs={2} sm={4} />
			</Grid>
		</div>
	);
}
