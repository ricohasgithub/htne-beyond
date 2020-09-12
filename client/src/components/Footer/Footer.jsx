import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box, Grid } from "@material-ui/core";

import AnchorLink from "react-anchor-link-smooth-scroll";

import FooterBackground from "../../images/FooterSvgs/FooterBackground.svg";

const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
		height: "50vh",
		backgroundImage: `url(${FooterBackground})`,
		backgroundSize: "cover",
		overflow: "hidden",
	},

	gridRoot: {
		paddingTop: "30vh",

		[theme.breakpoints.down("md")]: {
			paddingTop: "20vh",
		},
	},

	footerLink: {
		textDecoration: "none",
		color: "#FFFFFF",

		"&:hover": {
			color: "#57b9ff",
		},
	},
}));

export default function Footer() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Grid container className={classes.gridRoot}>
				<Grid
					item
					container
					sm={4}
					xs={12}
					alignItems="center"
					direction="column"
				>
					<Typography variant="h4">
						<Box fontStyle="bold" m={1}>
							Hack the Northeast
						</Box>
					</Typography>

					<Typography
						variant="body2"
						align="left"
						style={{ marginLeft: "5.5vw" }}
					>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard.
					</Typography>
				</Grid>

				<Grid
					item
					container
					sm={4}
					xs={6}
					direction="column"
					alignItems="center"
				>
					<Typography variant="h6">
						<Box fontStyle="bold" m={1}>
							Navigate
						</Box>
					</Typography>

					<AnchorLink href="#aboutus" className={classes.footerLink}>
						<Typography variant="body2">About Us</Typography>
					</AnchorLink>
					<AnchorLink href="#tracks" className={classes.footerLink}>
						<Typography variant="body2">Tracks</Typography>
					</AnchorLink>
					<AnchorLink href="#speakers" className={classes.footerLink}>
						<Typography variant="body2">Speakers</Typography>
					</AnchorLink>
				</Grid>

				<Grid
					item
					container
					sm={4}
					xs={6}
					direction="column"
					alignItems="center"
				>
					<Typography variant="h6">
						<Box fontStyle="bold" m={1}>
							Contact
						</Box>
					</Typography>

					<a
						href="https://www.instagram.com/hackthene/"
						className={classes.footerLink}
					>
						<Typography variant="body2">Instagram</Typography>
					</a>
					<a href="/" className={classes.footerLink}>
						<Typography variant="body2">LinkedIn</Typography>
					</a>
					<a href="/" className={classes.footerLink}>
						<Typography variant="body2">Devpost</Typography>
					</a>
				</Grid>
			</Grid>
		</div>
	);
}
