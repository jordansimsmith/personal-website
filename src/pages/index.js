import React from "react"
import {Header, Menu, Container, Image, Icon, Item, Button} from "semantic-ui-react";
import Link from "gatsby-link";
import Helmet from "react-helmet";

import Footer from "../components/footer";
import Navigation from "../components/navigation";

import 'semantic-ui-css/semantic.min.css';
import '../styles/default.css';

export default () => (
	<div>
		<Helmet>
			<title>Jordan Sim-Smith</title>

			<meta charset="utf-8"/>
			<meta name="author" content="Jordan Sim-Smith"/>
			<meta name="description" content="Jordan Sim-Smith personal website"/>

			<link href={require("../images/favicon.ico")} rel="shortcut icon"/>
		</Helmet>


		<div className="landing background">
			<Header as="h1" textAlign="center">
			<Button>Click me</Button>
			<Header.Content>Hello, I'm Jordan Sim-Smith</Header.Content>


			</Header>
		</div>

		<Navigation/>

		<Container className="content box">
			<Header as="h2" icon textAlign="center">
				<Icon name="user"/>
				<Header.Content>About Me</Header.Content>
			</Header>
			<Item.Group>
				<Item>
					<Item.Image size="medium" src={require("../images/portrait.jpg")} />
					<Item.Content>
						<Item.Header as="h3">Hi there!</Item.Header>
						<Item.Description>
						<p>My name is Jordan Sim-Smith, and I am a second-year Software Engineering student at the University of Auckland with a passion for learning. I enjoy working my way through challenging problems while teaching myself new skills at the same time. </p>
						<p>I bring academic and industry experience to any task. My current position as a Software Engineer Intern at Autogrow Systems Limited allows me to apply skills and techniques that I have learned through university to real-world problems. </p>
						<p>I am not solely interested in development, the financial aspect of a company intrigues me too. Alongside my study, I have cofounded and co-run a mobile phone trading/repairing company. I have a natural interest towards entrepreneurship, and I would love to create a startup company using the latest software.</p>
						<p>One way that I like to challenge myself and learn new skills is to build personal projects. This website is an example of one; I am learning React.js as I go! I will add future projects to this website as they are ready. </p>
						<p>Thank you for taking the time to learn a bit about me. Please do not hesitate to visit the contact section if you wish to send me an email. Have a good day. </p>
						</Item.Description>
					</Item.Content>
				</Item>
			</Item.Group>
		</Container>

		<Footer/>
	
	</div>
);
