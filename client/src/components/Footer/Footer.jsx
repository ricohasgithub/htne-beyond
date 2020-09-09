import React from "react";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Typography, Box, Grid, useMediaQuery } from "@material-ui/core";

import AnchorLink from "react-anchor-link-smooth-scroll";

const useStyles = makeStyles((theme) => ({
	root: {
		[theme.breakpoints.down("md")]: {
			backgroundColor: "#B42B52",
		},
	},

	backgroundImage: {
		width: "100%",
		position: "absolute",
		marginTop: "10vh",
		zIndex: -1,

		[theme.breakpoints.down("md")]: {
			display: "none",
		},
	},

	gridRoot: {
		[theme.breakpoints.up("lg")]: {
			paddingTop: "60vh",
		},
	},
}));

export default function Footer() {
	const theme = useTheme();
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<img
				src={require("../../images/FooterSvgs/FooterBackground.svg")}
				alt="Footer Background"
				className={classes.backgroundImage}
			/>
			<Grid container className={classes.gridRoot}>
				<Grid item container xs={4} alignItems="center" direction="column">
					<Typography variant="h4">
						<Box fontStyle="bold" m={1}>
							Hack the Northeast
						</Box>
					</Typography>

					<Typography
						variant="body1"
						align="left"
						style={{ marginLeft: "5.5vw" }}
					>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard.
					</Typography>
				</Grid>

				<Grid item container xs={4} direction="column" alignItems="center">
					<Typography variant="h5">
						<Box fontStyle="bold" m={1}>
							Navigate
						</Box>
					</Typography>

					<AnchorLink>
						<Typography variant="body1">About Us</Typography>
					</AnchorLink>
					<AnchorLink>
						<Typography variant="body1">Tracks</Typography>
					</AnchorLink>
					<AnchorLink>
						<Typography variant="body1">Speakers</Typography>
					</AnchorLink>
				</Grid>

				<Grid item container xs={4} direction="column" alignItems="center">
					<Typography variant="h5">
						<Box fontStyle="bold" m={1}>
							Contact
						</Box>
					</Typography>

					<a>
						<Typography variant="body1">Instagram</Typography>
					</a>
					<a>
						<Typography variant="body1">LinkedIn</Typography>
					</a>
					<a>
						<Typography variant="body1">Devpost</Typography>
					</a>
				</Grid>
			</Grid>
		</div>
	);
}
