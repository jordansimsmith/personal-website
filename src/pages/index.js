import React from "react"
import {Parallax, Background} from "react-parallax";
import {Header} from "semantic-ui-react";

import "../styles/default.css";
import "../styles/index.css";

export default () => (
	<Parallax
		blur={0}
		bgImage={require("../images/background.jpg")}
		bgImageAlt=""
		strength={200}
	>
			<div id="landing">
				<Header as="h1">Hello, I'm Jordan Sim-Smith</Header>
			</div>
			<div>
				<h2>About me</h2>
				<div>
					<img src={require("../images/portrait.jpg")} alt="" />
				</div>
				<div>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				</div>
			</div>
	</Parallax>
);
