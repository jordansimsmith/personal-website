import React from "react"
import {Parallax, Background} from "react-parallax";
import {Header, Menu, Container, Image} from "semantic-ui-react";
import Link from "gatsby-link";

import "../semantic/semantic.css"
import "../styles/default.css";
import "../styles/index.css";

export default () => (
	<div>

		<div className="bg">
			<Header as="h1">Hello, I'm Jordan Sim-Smith</Header>
		</div>

		<Menu inverted>
			<Container>
		        <Menu.Item as={Link} header>Jordan Sim-Smith</Menu.Item>

				<Menu.Item as={Link}>About</Menu.Item>
				<Menu.Item as={Link}>Biography</Menu.Item>
				<Menu.Item as={Link}>Projects</Menu.Item>
				<Menu.Item as={Link}>Resume</Menu.Item>
				<Menu.Item as={Link}>Contact</Menu.Item>

			</Container>
		</Menu>

		<div className="bg-light">
			<h2>About me</h2>
			<div className="image">
				<img src={require("../images/portrait.jpg")} alt="" />
			</div>
			<div className="text">
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				<p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
			</div>
		</div>
	</div>
);
