import React from "react";
import { createMuiTheme } from "@material-ui/core/styles";

// Custom components
import Landing from "./components/Landing/Landing";

const theme = createMuiTheme({
	palette: {
		primary: {
			main: "#000000",
		},
	},
});

function App() {
	return (
		<div className="App">
			<Landing />
		</div>
	);
}

export default App;
