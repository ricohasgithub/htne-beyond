import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

// Custom components
import Landing from "./components/Landing/Landing";
import AboutUs from "./components/AboutUs/AboutUs";
import Tracks from "./components/Tracks/Tracks";
import Speakers from "./components/Speakers/Speakers";

const theme = createMuiTheme({
	palette: {
		primary: {
			main: "#0C2648",
			contrastText: "#FFFFFF",
		},
	},
});

function App() {
	return (
		<ThemeProvider theme={theme}>
			<div className="App" style={{ width: "100%", height: "100%" }}>
				<Landing />

				<section id="aboutus">
					<AboutUs />
				</section>

				<section id="tracks">
					<Tracks />
				</section>

				<section id="speakers">
					<Speakers />
				</section>
			</div>
		</ThemeProvider>
	);
}

export default App;
