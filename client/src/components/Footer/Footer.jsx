import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box, Grid } from "@material-ui/core";

import AnchorLink from "react-anchor-link-smooth-scroll";

import FooterBackground from "../../images/FooterSvgs/FooterBackground.svg";

const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
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
						Made with{" "}
						<span role="img" aria-label="heart">
							❤️
						</span>{" "}
						by Reezan Visram
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
							Get in Contact
						</Box>
					</Typography>

					<AnchorLink
						href="mailto:htne-sponsorships@hackthene.com"
						className={classes.footerLink}
					>
						<Typography variant="body2">Sponsor</Typography>
					</AnchorLink>
					<AnchorLink
						href="htne-logistics@hackthene.com"
						className={classes.footerLink}
					>
						<Typography variant="body2">Mentorship</Typography>
					</AnchorLink>
					<AnchorLink
						href="htne-logistics@hackthene.com"
						className={classes.footerLink}
					>
						<Typography variant="body2">Speak</Typography>
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
							Follow us
						</Box>
					</Typography>

					<a
						href="https://www.instagram.com/hackthene/"
						className={classes.footerLink}
					>
						<Typography variant="body2">Instagram</Typography>
					</a>
					<a
						href="https://www.facebook.com/hackthene"
						className={classes.footerLink}
					>
						<Typography variant="body2">Facebook</Typography>
					</a>
					<a
						href="https://twitter.com/hackthene"
						className={classes.footerLink}
					>
						<Typography variant="body2">Twitter</Typography>
					</a>
				</Grid>
			</Grid>
		</div>
	);
}
