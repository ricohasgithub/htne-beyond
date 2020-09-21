import React from "react";
import { Typography, IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles } from "@material-ui/core/styles";
import AnchorLink from "react-anchor-link-smooth-scroll";

const useStyles = makeStyles((theme) => ({
	sideMenuContainer: {
		height: "100%",
		position: "fixed",
		backgroundColor: theme.palette.primary.main,
		zIndex: 10000,
		top: 0,
		right: 0,
		width: "60%",
		transform: "translateX(100%)",
		transition: "transform 0.3s ease",
	},

	headerLink: {
		color: "white",
		textDecoration: "none",
	},

	sideMenuOpen: {
		transform: "translateX(0%)",
	},

	sideMenuLinksContainer: {
		height: "100%",
		width: "100%",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "space-around",
	},

	closeIcon: {
		fontSize: 16,
		color: "#FFFFFF",
	},
}));

export default function SideMenu({ sideMenuClickHandler, show }) {
	const classes = useStyles();

	let sideMenuContainerClasses = `${classes.sideMenuContainer}`;

	if (show) {
		sideMenuContainerClasses = `${classes.sideMenuContainer} ${classes.sideMenuOpen}`;
	}

	return (
		<div className={sideMenuContainerClasses}>
			<div
				style={{ display: "flex", width: "100%", justifyContent: "flex-end" }}
			>
				<IconButton onClick={sideMenuClickHandler}>
					<CloseIcon className={classes.closeIcon} />
				</IconButton>
			</div>

			<div className={classes.sideMenuLinksContainer}>
				<AnchorLink className={classes.headerLink} href="#aboutus">
					<Typography>About</Typography>
				</AnchorLink>

				<AnchorLink className={classes.headerLink} href="#tracks">
					<Typography>Tracks</Typography>
				</AnchorLink>

				<AnchorLink className={classes.headerLink} href="#speakers">
					<Typography>Speakers</Typography>
				</AnchorLink>

				<AnchorLink className={classes.headerLink} href="#faq">
					<Typography>FAQ</Typography>
				</AnchorLink>

				<AnchorLink className={classes.headerLink} href="#team">
					<Typography>Team</Typography>
				</AnchorLink>

				<AnchorLink className={classes.headerLink} href="#sponsors">
					<Typography>Sponsors</Typography>
				</AnchorLink>
			</div>
		</div>
	);
}
