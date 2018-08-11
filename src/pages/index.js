import React from "react"
import {Header, Menu, Container, Image, Segment, Grid, List, Icon} from "semantic-ui-react";
import Link from "gatsby-link";

import Footer from "../components/footer";
import Navigation from "../components/navigation";

import "../semantic/semantic.css"
import "../styles/default.css";
import "../styles/index.css";

export default () => (
	<div>

		<div className="bg">
			<Header as="h1">Hello, I'm Jordan Sim-Smith</Header>
		</div>

		<Navigation/>

		<div className="bg-light">
			<Header as="h2" icon textAlign="center">
				<Icon name="user"/>
				<Header.Content>About Me</Header.Content>
			</Header>
			<Grid divided inverted>
				<Grid.Row>
					<Grid.Column width={6}>
						<Image src={require("../images/portrait.jpg")} />
					</Grid.Column>
					<Grid.Column width={10}>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
						<p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
					</Grid.Column>

				</Grid.Row>
			</Grid>
		</div>

		<Footer/>
	
	</div>
);
