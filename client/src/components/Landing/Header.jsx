import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AnchorLink from "react-anchor-link-smooth-scroll";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},

	headerLogoContainer: {
		flexGrow: 1,
	},

	headerLogo: {
		height: "4vh",
		width: "4vw",
	},

	headerLink: {
		marginLeft: "1vw",
		marginRight: "1vw",
	},
}));

export default function Header() {
	const classes = useStyles();
	return (
		<div>
			<AppBar color={"transparent"} elevation={0} position="relative">
				<Toolbar>
					<div className={classes.headerLogoContainer}>
						<img
							src={require("../../images/placeholderlogo.png")}
							alt="HTNE Beyond Logo"
							className={classes.headerLogo}
						/>
					</div>

					<AnchorLink className={classes.headerLink}>
						<Typography>About</Typography>
					</AnchorLink>

					<AnchorLink className={classes.headerLink}>
						<Typography>Tracks</Typography>
					</AnchorLink>

					<AnchorLink className={classes.headerLink}>
						<Typography>Speakers</Typography>
					</AnchorLink>

					<AnchorLink className={classes.headerLink}>
						<Typography>FAQ</Typography>
					</AnchorLink>

					<AnchorLink className={classes.headerLink}>
						<Typography>Team</Typography>
					</AnchorLink>

					<AnchorLink className={classes.headerLink}>
						<Typography>Sponsors</Typography>
					</AnchorLink>
				</Toolbar>
			</AppBar>
		</div>
	);
}
