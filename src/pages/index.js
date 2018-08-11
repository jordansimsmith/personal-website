import React from "react"
import {Parallax, Background} from "react-parallax";
import {Header, Menu, Container, Image, Segment, Grid, List, Icon} from "semantic-ui-react";
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
		        <Menu.Item as={Link} header>
 					<Image size='mini' src={require("../images/portrait.jpg")} style={{ marginRight: '1.5em' }} />

		        	Jordan Sim-Smith
		        </Menu.Item>

				<Menu.Item as={Link}>About</Menu.Item>
				<Menu.Item as={Link}>Biography</Menu.Item>
				<Menu.Item as={Link}>Projects</Menu.Item>
				<Menu.Item as={Link}>Resume</Menu.Item>
				<Menu.Item as={Link}>Contact</Menu.Item>

			</Container>
		</Menu>

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

	{/** Footer */}
		<Segment inverted vertical style={{ padding: '5em 0em' }}>
		    <Container>
		        <Grid divided inverted stackable>
		            <Grid.Row>
		                <Grid.Column width={3}>
		                    <Header inverted as='h4' content='About' />
		                    <List link inverted>
		                        <List.Item as='a'>Sitemap</List.Item>
		                        <List.Item as='a'>Contact Us</List.Item>
		                        <List.Item as='a'>Religious Ceremonies</List.Item>
		                        <List.Item as='a'>Gazebo Plans</List.Item>
		                    </List>
		                </Grid.Column>
		                <Grid.Column width={3}>
		                    <Header inverted as='h4' content='Services' />
		                    <List link inverted>
		                        <List.Item as='a'>Banana Pre-Order</List.Item>
		                        <List.Item as='a'>DNA FAQ</List.Item>
		                        <List.Item as='a'>How To Access</List.Item>
		                        <List.Item as='a'>Favorite X-Men</List.Item>
		                    </List>
		                </Grid.Column>
		                <Grid.Column width={7}>
		                    <Header as='h4' inverted>
		                        Footer Header
		                    </Header>
		                    <p>
		                        Extra space for a call to action inside the footer that could help re-engage users.
		                    </p>
		                </Grid.Column>
		            </Grid.Row>
		        </Grid>
		    </Container>
		</Segment>
	</div>
);
