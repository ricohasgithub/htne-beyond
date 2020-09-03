import React from "react";
import {
	AppBar,
	Toolbar,
	Typography,
	useMediaQuery,
	IconButton,
} from "@material-ui/core";
import Menu from "@material-ui/icons/Menu";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AnchorLink from "react-anchor-link-smooth-scroll";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},

	headerLogoContainer: {
		flexGrow: 1,
	},

	headerLogo: {
		height: "8vh",
		width: "8vw",
		minWidth: "50px",
		minHeight: "50px",
		paddingTop: "10px",
	},

	headerLink: {
		marginLeft: "1vw",
		marginRight: "1vw",
		color: theme.palette.primary.contrastText,
	},

	menuIcon: {
		height: "8vh",
		width: "8vh",
		color: "#FFFFFF",
	},
}));

const DesktopHeader = () => {
	const classes = useStyles();

	return (
		<div>
			<AppBar color={"transparent"} elevation={0} position="relative">
				<Toolbar>
					<div className={classes.headerLogoContainer}>
						<img
							src={require("../../images/LandingSvgs/headerLogo.svg")}
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
};

const MobileHeader = ({ sideMenuClickHandler }) => {
	const classes = useStyles();

	return (
		<div>
			<AppBar color={"transparent"} elevation={0} position="relative">
				<Toolbar>
					<div className={classes.headerLogoContainer}>
						<img
							src={require("../../images/LandingSvgs/headerLogo.svg")}
							alt="HTNE Beyond Logo"
							className={classes.headerLogo}
						/>
					</div>
					<IconButton onClick={sideMenuClickHandler}>
						<Menu className={classes.menuIcon} />
					</IconButton>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default function Header({ sideMenuClickHandler }) {
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.up("sm"));

	if (matches) {
		return <DesktopHeader />;
	} else {
		return <MobileHeader sideMenuClickHandler={sideMenuClickHandler} />;
	}
}
