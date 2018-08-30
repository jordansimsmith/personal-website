import React from "react";
import {Header, Icon, Grid, Image, List, Container, Item, Table} from "semantic-ui-react";

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

			<Table celled>
				<Table.Header>
					<Table.Row textAlign="center">
						<Table.HeaderCell>I am confident with</Table.HeaderCell>
						<Table.HeaderCell>I have experience with</Table.HeaderCell>
					</Table.Row>
				</Table.Header>

				<Table.Body>
					<Table.Row textAlign="center">
						<Table.Cell>Java</Table.Cell>
						<Table.Cell>Algorithms</Table.Cell>
					</Table.Row>
					<Table.Row textAlign="center">
						<Table.Cell>Node.js</Table.Cell>
						<Table.Cell>Data Structures</Table.Cell>
					</Table.Row>
					<Table.Row textAlign="center">
						<Table.Cell>C</Table.Cell>
						<Table.Cell>Web Design</Table.Cell>
					</Table.Row>
					<Table.Row textAlign="center">
						<Table.Cell>Matlab</Table.Cell>
						<Table.Cell>GoLang</Table.Cell>
					</Table.Row>
					<Table.Row textAlign="center">
						<Table.Cell>AWS</Table.Cell>
						<Table.Cell>Python</Table.Cell>
					</Table.Row>
					<Table.Row textAlign="center">
						<Table.Cell>Git</Table.Cell>
						<Table.Cell></Table.Cell>
					</Table.Row>
					<Table.Row textAlign="center">
						<Table.Cell>Unit Testing</Table.Cell>
						<Table.Cell></Table.Cell>
					</Table.Row>
					<Table.Row textAlign="center">
						<Table.Cell>Linux</Table.Cell>
						<Table.Cell></Table.Cell>
					</Table.Row>
					<Table.Row textAlign="center">
						<Table.Cell>Bash</Table.Cell>
						<Table.Cell></Table.Cell>
					</Table.Row>
				</Table.Body>
			</Table>

		</Container>

		<Container className="bg-light">
			<Header as="h2" icon textAlign="center">
				<Icon name="briefcase"/>
				<Header.Content>Experience</Header.Content>

			</Header>

			<Item.Group>
				<Item>
					<Item.Image size="medium" src={require("../images/autogrow.jpg")} />
					<Item.Content>
						<Item.Header as="h4">Autogrow Systems Limited</Item.Header>
						<Item.Meta>Software Engineer Intern, 2018 - PRESENT</Item.Meta>
						<Item.Description>
							<p>"Autogrow creates automation solutions that leverage the power of technology, data science and plant biology to provide growers affordable, accessible and easy-to-use innovation – 24/7, anywhere in the world." - autogrow.com</p>
							<p>I am currently working as a Software Engineer Intern at Autogrow during my breaks from University. Through this position, I hope to learn new skills and gain experience in a professional software development environment. </p>
							<p>So far, I have learnt many new skills, both technical and professional. This intern position has proved to be a great learning environment; I would learn something new every day at the office. 
							It has been an excellent opportunity to apply skills developed through university to real products. It has been a great experience working with others in an agile setting, something that cannot be easily taught in a course.</p>
							<p>At Autogrow, I have developed image recognition software using Node.js libraries. Our team followed a serverless approach facilitated by Amazon Web Services (AWS) Lamba and Step Functions.</p>

							<Header as="h4">Technologies Used</Header>
							<List bulleted>
								<List.Item>Node.js</List.Item>
								<List.Item>Jira/Confluence</List.Item>
								<List.Item>Git</List.Item>
								<List.Item>AWS Lambda, Step Functions, S3</List.Item>
							</List>
						</Item.Description>
					</Item.Content>
				</Item>
			</Item.Group>

		</Container>

		<Container className="bg-light">
			<Header as="h2" icon textAlign="center">
				<Icon name="heart"/>
				<Header.Content>Interests</Header.Content>
			</Header>

			<Table celled>
				<Table.Body>
					<Table.Row textAlign="center">
						<Table.Cell>Skiing</Table.Cell>
					</Table.Row>
					<Table.Row textAlign="center">
						<Table.Cell>Tramping</Table.Cell>
					</Table.Row>
					<Table.Row textAlign="center">
						<Table.Cell>Sailing</Table.Cell>
					</Table.Row>
					<Table.Row textAlign="center">
						<Table.Cell>Entrepreneurship</Table.Cell>
					</Table.Row>
				</Table.Body>
			</Table>

		</Container>


	<Footer/>

	</div>
);