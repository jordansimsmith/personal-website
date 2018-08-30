import React from "react";

import {Container, Header, Icon, Form, Message} from "semantic-ui-react";

import Footer from "../components/footer";
import Navigation from "../components/navigation";

export default () => (
	<div>
		<Navigation/>

			<Container className="bg-light">

			<Header as="h2" icon textAlign="center">
				<Icon name="mail"/>
				<Header.Content>Contact Me</Header.Content>
			</Header>

			<Form method="POST" action="https://formspree.io/jordansimsmith@gmail.com">
				<Form.Input type="text" name="name" placeholder="Your name" label="Name" required />
				<Form.Input type="email" name="email" placeholder="Your email address" label="Email" required />
				<Form.Input type="text" name="subject" placeholder="Subject" label="Subject" required />
				<Form.TextArea name="message" placeholder="Please type your message here" label="Message" required />

				<Form.Button type="submit" content="Submit"/>
			</Form>

			</Container>

		<Footer/>
	</div>
	);