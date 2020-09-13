import React from "react";
import {
	createMuiTheme,
	responsiveFontSizes,
	ThemeProvider,
} from "@material-ui/core/styles";

// Custom fonts
import Apercu from "./fonts/Apercu.woff";

// Custom components
import Landing from "./components/Landing/Landing";
import SideMenu from "./components/Landing/SideMenu";
import AboutUs from "./components/AboutUs/AboutUs";
import Tracks from "./components/Tracks/Tracks";
import Speakers from "./components/Speakers/Speakers";
import FAQ from "./components/FAQ/FAQ";
import Team from "./components/Team/Team";
import Sponsors from "./components/Sponsors/Sponsors";
import Footer from "./components/Footer/Footer";
import { CssBaseline } from "@material-ui/core";

const apercu = {
	fontFamily: "Apercu",
	fontStyle: "normal",
	fontDisplay: "swap",
	fontWeight: 400,

	src: `
		local('Apercu'),
		url(${Apercu}) format('woff')
	`,
	unicodeRange:
		"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};

let theme = createMuiTheme({
	typography: {
		fontFamily: "Apercu, Arial",
	},
	overrides: {
		MuiCssBaseline: {
			"@global": {
				"@font-face": [apercu],
			},
		},
	},

	palette: {
		primary: {
			main: "#0C2648",
			contrastText: "#FFFFFF",
		},
	},
});

theme = responsiveFontSizes(theme);

function App() {
	const [sideMenuOpen, setSideMenuOpen] = React.useState(false);

	const sideMenuClickHandler = () => {
		setSideMenuOpen(!sideMenuOpen);
	};

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<div
				className="App"
				style={{ width: "100%", height: "100%", overflowX: "hidden" }}
			>
				<Landing sideMenuClickHandler={sideMenuClickHandler} />

				<SideMenu
					sideMenuClickHandler={sideMenuClickHandler}
					show={sideMenuOpen}
				/>
				<section id="aboutus">
					<AboutUs />
				</section>

				<section id="tracks">
					<Tracks />
				</section>

				<section id="speakers">
					<Speakers />
				</section>

				<section id="faq">
					<FAQ />
				</section>

				<section id="team">
					<Team />
				</section>

				<section id="sponsors">
					<Sponsors />
				</section>

				<Footer />
			</div>
		</ThemeProvider>
	);
}

export default App;
