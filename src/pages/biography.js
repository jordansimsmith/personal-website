import React from "react";
import {Header, Icon, Grid, Image, List, Container, Item} from "semantic-ui-react";

import Navigation from "../components/navigation";
import Footer from "../components/footer";

import "../semantic/semantic.css"
import "../styles/default.css";

export default () => (
	<div>
		<Navigation/>

		<Container className="bg-light">
			<Header as="h2" icon textAlign="center">
				<Icon name="graduation"/>
				<Header.Content>Education</Header.Content>
			</Header>

			<Item.Group>
				<Item>
					<Item.Image size="medium" src={require("../images/uoa.png")} />
					<Item.Content>
						<Item.Header as="h2">Bachelor of Engineering (Hons) - Software</Item.Header>
						<Item.Meta>The University of Auckland, 2017 - 2020</Item.Meta>
						<Item.Description>
							<p>I am two years into a four year Bachelor of Engineering in Software at the University of Auckland. Problem-solving has always fascinated me as it requires logical thought and a systematic approach. 
							Designing software as a response to a specific problem feels like a natural extension to solving these problems. 
							Having enjoyed programming in high-school, I enrolled in the Engineering program at UoA, with the goal of learning the skills necessary to develop software in the professional world.</p>

							<p>I am part of the Software Engineering Students Association (SESA).</p>

							<p>My second year in the Software course has been a blur of language mechanics, algorithms, data structures, testing and software design. </p>
							<Header as="h4">Notable Courses</Header>
							<List bulleted>
								<List.Item>
									<List.Header>Object-Oriented Software Construction</List.Header>
									I learnt about O-O mechanics in Java, with an emphasis on design patterns and what is good software design.
								</List.Item>
								<List.Item>
									<List.Header>Introduction to Data Structures and Algorithms</List.Header>
									I learnt how to analyse the time complexity and correctness of algorithms and which data structure to use.
								</List.Item>
								<List.Item>
									<List.Header>Quality Assurance</List.Header>
									I learnt about developing fault-free software as well as how to test for faults in my code.
								</List.Item>
								<List.Item>
									<List.Header>Software Engineering Design</List.Header>
									I brought everything I have learnt together into a semester-long pair project using version control.
								</List.Item>			
							</List>
							<Header as="h4">Achievements</Header>
							<List bulleted>
								<List.Item>GPA: 8.75/9</List.Item>
								<List.Item>Dean's Honour List 2017</List.Item>
								<List.Item>Top Achiever Scholarship valued at $20,000</List.Item>
							</List>
						</Item.Description>
					</Item.Content>
				</Item>

				<Item>
					<Item.Image size="medium" src={require("../images/smc.jpg")} />
					<Item.Content>
						<Item.Header as="h2">NCEA Level 3</Item.Header>
						<Item.Meta>Sancta Maria College, 2010 - 2016</Item.Meta>
						<Item.Description>
							<Header as="h4">Achievements</Header>
							<List bulleted>
								<List.Item>Dux</List.Item>
								<List.Item>Academic Prefect</List.Item>
								<List.Item>Excellence Endorsed at all 3 levels</List.Item>
							</List>
						</Item.Description>

					</Item.Content>
				</Item>
			</Item.Group>

		</Container>

		<Container className="bg-light">
			<Header as="h2" icon textAlign="center">
				<Icon name="terminal"/>
				<Header.Content>Skills</Header.Content>

			</Header>

			<Grid divided inverted>
				<Grid.Row>
					<Grid.Column width={8}>
						<Header as="h3" textAlign="center">
							<Header.Content>I am confident with:</Header.Content>
						</Header>
						<List bulleted>
							<List.Item>Java</List.Item>
							<List.Item>Node.js</List.Item>
							<List.Item>C</List.Item>
							<List.Item>Matlab</List.Item>
							<List.Item>AWS</List.Item>
							<List.Item>Git</List.Item>
							<List.Item>Unit Testing</List.Item>
							<List.Item>Linux</List.Item>
							<List.Item>Bash</List.Item>

						</List>
					</Grid.Column>

					<Grid.Column width={8}>
						<Header as="h3" textAlign="center">
							<Header.Content>I have experience with:</Header.Content>
						</Header>
						<List bulleted>
							<List.Item>Algorithms</List.Item>
							<List.Item>Data Structures</List.Item>
							<List.Item>Web Design</List.Item>
							<List.Item>GoLang</List.Item>
							<List.Item>Python</List.Item>
						</List>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</Container>

		<Container className="bg-light">
			<Header as="h2" icon textAlign="center">
				<Icon name="briefcase"/>
				<Header.Content>Experience</Header.Content>

			</Header>

			<Grid divided inverted>
				<Grid.Row>
					<Grid.Column width={5}>
						<Image src={require("../images/autogrow.jpg")} />
					</Grid.Column>
					<Grid.Column width={10}>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
						<p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
					</Grid.Column>

				</Grid.Row>
			</Grid>

		</Container>

		<Container className="bg-light">
			<Header as="h2" icon textAlign="center">
				<Icon name="heart"/>
				<Header.Content>Interests</Header.Content>

			</Header>			
		</Container>


	<Footer/>

	</div>
);