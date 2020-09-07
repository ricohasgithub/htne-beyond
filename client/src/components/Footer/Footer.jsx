import React from "react";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	backgroundImage: {
		width: "100%",
		position: "absolute",
	},

	trees: {
		height: "30vh",
		width: "30vw",
		position: "absolute",
		top: "520vh",
		left: "60vw",
	},

	telescopeStand: {
		height: "10vh",
		width: "10vw",
		position: "absolute",
		top: "537.5vh",
		left: "10vw",
	},

	telescopeBody: {
		height: "10vh",
		width: "10vw",
		position: "absolute",
		top: "530vh",
		left: "10vw",
	},
}));

export default function Footer() {
	const classes = useStyles();
	return (
		<div>
			<img
				src={require("../../images/FooterSvgs/FooterBackground.svg")}
				alt="Footer Background"
				className={classes.backgroundImage}
			/>

			<img
				src={require("../../images/FooterSvgs/Trees.svg")}
				alt="Trees"
				className={classes.trees}
			/>
			<svg
				style={{ top: "200vh" }}
				width="849"
				height="486"
				viewBox="0 0 849 486"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M101.844 403.135L71.5045 469.838L75.6194 471.71L86.2542 448.329L98.9782 448.551L98.5827 471.211L100.656 471.247L102.729 471.284L103.125 448.624L115.849 448.846L125.661 472.584L129.839 470.857L101.844 403.135ZM99.0569 444.032L88.2942 443.844L99.4898 419.23L99.0569 444.032ZM103.203 444.104L103.636 419.302L113.966 444.292L103.203 444.104Z"
					fill="white"
				/>
				<path
					d="M101.844 403.135L100.655 471.247L102.728 471.283L103.124 448.624L115.848 448.846L125.66 472.583L129.837 470.857L101.844 403.135ZM103.203 444.104L103.636 419.302L113.965 444.292L103.203 444.104L103.203 444.104Z"
					fill="white"
				/>
				<path
					d="M139 349.184L151.973 372.113C158.305 368.531 160.534 360.494 156.951 354.162C153.369 347.83 145.332 345.601 139 349.184Z"
					fill="#BCE8F7"
				/>
				<path
					d="M59.2812 416.612L67.3457 412.049L61.1834 401.157L53.1189 405.72L59.2812 416.612Z"
					fill="white"
				/>
				<path
					d="M151.973 372.113C158.305 368.531 160.534 360.494 156.951 354.162L145.486 360.648L151.973 372.113Z"
					fill="#8EC1D6"
				/>
				<path
					d="M64.2637 406.601L56.1992 411.164L59.2798 416.609L67.3443 412.047L64.2637 406.601Z"
					fill="white"
				/>
				<path
					d="M68.04 416.686L105.295 395.608L94.8221 377.097L57.5671 398.174L68.04 416.686Z"
					fill="#EDEEF0"
				/>
				<path
					d="M105.293 395.607L100.057 386.352L62.8017 407.429L68.0378 416.684L105.293 395.607Z"
					fill="#DCDEE2"
				/>
				<path
					d="M94.8217 377.095L89.8945 379.883L100.367 398.394L105.295 395.606L94.8217 377.095Z"
					fill="#B7B9C0"
				/>
				<path
					d="M105.295 395.606L100.059 386.351L95.1314 389.138L100.368 398.393L105.295 395.606Z"
					fill="#9B9DA6"
				/>
				<path
					d="M104.809 399.361L157.186 369.729L143.731 345.947L91.354 375.58L104.809 399.361Z"
					fill="#EDEEF0"
				/>
				<path
					d="M134.233 351.318L131.281 352.988L144.736 376.769L147.687 375.1L134.233 351.318Z"
					fill="white"
				/>
				<path
					d="M143.731 345.942L138.66 348.812L152.115 372.593L157.186 369.724L143.731 345.942Z"
					fill="white"
				/>
				<path
					d="M157.184 369.727L150.457 357.837L98.0801 387.47L104.807 399.359L157.184 369.727Z"
					fill="#DCDEE2"
				/>
				<path
					d="M140.955 363.21L138.004 364.879L144.731 376.769L147.682 375.099L140.955 363.21Z"
					fill="white"
				/>
				<path
					d="M157.188 369.727L150.461 357.837L145.39 360.706L152.116 372.596L157.188 369.727Z"
					fill="white"
				/>
				<path
					d="M101.551 404.816C104.908 403.948 106.926 400.522 106.058 397.165C105.189 393.808 101.764 391.79 98.4068 392.658C95.0497 393.527 93.032 396.952 93.9002 400.309C94.7684 403.666 98.1938 405.684 101.551 404.816Z"
					fill="#F9D026"
				/>
				<path
					d="M100.865 402.161C102.756 401.672 103.893 399.742 103.404 397.851C102.915 395.96 100.985 394.824 99.094 395.313C97.2029 395.802 96.0664 397.731 96.5554 399.622C97.0445 401.513 98.974 402.65 100.865 402.161Z"
					fill="#E7C224"
				/>
				<path
					d="M784.658 16.5669L802.971 53.2966L154.65 366.182L145.789 348.41L784.658 16.5669Z"
					fill="url(#paint0_linear)"
					fill-opacity="0.28"
				/>
				<defs>
					<linearGradient
						id="paint0_linear"
						x1="793.815"
						y1="34.9317"
						x2="149.629"
						y2="356.111"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="white" stop-opacity="0" />
						<stop offset="1" stop-color="white" />
					</linearGradient>
				</defs>
			</svg>
		</div>
	);
}
