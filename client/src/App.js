import React from "react";
import {
	createMuiTheme,
	responsiveFontSizes,
	ThemeProvider,
} from "@material-ui/core/styles";

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

let theme = createMuiTheme({
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
			<div className="App" style={{ width: "100%", height: "100%" }}>
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
