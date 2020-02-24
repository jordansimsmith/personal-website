import React from 'react';
import {
  Header,
  Icon,
  List,
  Container,
  Item,
  Table,
  Divider,
} from 'semantic-ui-react';

import Navigation from '../components/navigation';
import Footer from '../components/footer';

import 'semantic-ui-css/semantic.min.css';
import '../styles/default.css';

const biography = () => (
  <div className="content-wrap">
    <Navigation />

    <Container className="content box">
      <Header as="h2" icon textAlign="center">
        <Icon name="graduation" />
        <Header.Content>Education</Header.Content>
      </Header>

      <Item.Group>
        <Item>
          <Item.Image size="medium" src={require('../images/uoa.png')} />
          <Item.Content>
            <Item.Header as="h2">
              Bachelor of Engineering (Hons) - Software
            </Item.Header>
            <Item.Meta>The University of Auckland, 2017 - 2020</Item.Meta>
            <Item.Description>
              <p>
                I am three years into a four year Bachelor of Engineering in
                Software at the University of Auckland. Problem-solving has
                always fascinated me as it requires logical thought and a
                systematic approach. Designing software as a response to a
                specific problem feels like a natural extension to solving these
                problems. Having enjoyed programming in high-school, I enrolled
                in the engineering program at UoA, with the goal of learning the
                skills necessary to develop software in the professional world.
              </p>

              <p>
                I am part of the Software Engineering Students Association
                (SESA). I am also on the Executive Team of the UoA Developer’s
                Society, which teaches industry relevant skills to students to
                help them find internships.
              </p>

              <Header as="h4">Notable Courses</Header>
              <List bulleted>
                <List.Item>
                  <List.Header>Software Architecture</List.Header>
                  Designing WebService architectures for performance,
                  modifiability and availability.
                </List.Item>
                <List.Item>
                  <List.Header>Operating Systems</List.Header>
                  Processes, threads, memory and file systems in UNIX operating
                  systems.
                </List.Item>
                <List.Item>
                  <List.Header>Fundamentals of Database Systems</List.Header>
                  Building relational DBMS queries in SQL, Relational Algebra
                  and Relational Calculus.
                </List.Item>
                <List.Item>
                  <List.Header>Computer Networks</List.Header>
                  Principles of data communications. Physical, data link,
                  network, transport and application layers.
                </List.Item>
                <List.Item>
                  <List.Header>Human Computer Interaction</List.Header>
                  User Interface design, user centred design, design processes.
                </List.Item>
                <List.Item>
                  <List.Header>
                    Object-Oriented Software Construction
                  </List.Header>
                  O-O mechanics in Java, with an emphasis on design patterns and
                  what is good software design.
                </List.Item>
                <List.Item>
                  <List.Header>
                    Introduction to Data Structures and Algorithms
                  </List.Header>
                  Analysing the time complexity and correctness of algorithms
                  and when to use which data structure.
                </List.Item>
                <List.Item>
                  <List.Header>Quality Assurance</List.Header>
                  Developing fault-free software as well as how to test for
                  faults.
                </List.Item>
                <List.Item>
                  <List.Header>Software Engineering Design</List.Header>A
                  semester-long pair project using version control.
                </List.Item>
                <List.Item>
                  <List.Header>Software Engineering Design 2</List.Header>Two
                  6-week group projects using version control and agile
                  practices.
                </List.Item>
              </List>
              <Header as="h4">Achievements</Header>
              <List bulleted>
                <List.Item>GPA: 8.7/9</List.Item>
                <List.Item>Dean’s Honour List 2017, 2018</List.Item>
                <List.Item>
                  Top Achiever Scholarship valued at $20,000
                </List.Item>
              </List>
            </Item.Description>
          </Item.Content>
        </Item>

        <Divider />

        <Item>
          <Item.Image size="medium" src={require('../images/smc.jpg')} />
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

    <Container className="content box">
      <Header as="h2" icon textAlign="center">
        <Icon name="terminal" />
        <Header.Content>Skills</Header.Content>
      </Header>

      <Table celled>
        <Table.Header>
          <Table.Row textAlign="center">
            <Table.HeaderCell colSpan="2">I am confident with</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row textAlign="center">
            <Table.Cell>Java</Table.Cell>
            <Table.Cell>C#</Table.Cell>
          </Table.Row>
          <Table.Row textAlign="center">
            <Table.Cell>Golang</Table.Cell>
            <Table.Cell>Python</Table.Cell>
          </Table.Row>
          <Table.Row textAlign="center">
            <Table.Cell>JavaScript</Table.Cell>
            <Table.Cell>TypeScript</Table.Cell>
          </Table.Row>
          <Table.Row textAlign="center">
            <Table.Cell>Docker</Table.Cell>
            <Table.Cell>Git</Table.Cell>
          </Table.Row>
          <Table.Row textAlign="center">
            <Table.Cell>Bash</Table.Cell>
            <Table.Cell>SQL</Table.Cell>
          </Table.Row>
          <Table.Row textAlign="center">
            <Table.Cell>AWS</Table.Cell>
            <Table.Cell>Linux</Table.Cell>
          </Table.Row>
          <Table.Row textAlign="center">
            <Table.Cell>Unit Testing</Table.Cell>
            <Table.Cell>CI/CD</Table.Cell>
          </Table.Row>
          <Table.Row textAlign="center">
            <Table.Cell>React</Table.Cell>
            <Table.Cell />
          </Table.Row>
        </Table.Body>
      </Table>
    </Container>

    <Container className="content box">
      <Header as="h2" icon textAlign="center">
        <Icon name="briefcase" />
        <Header.Content>Experience</Header.Content>
      </Header>

      <Item.Group>
        <Item>
          <Item.Image size="medium" src={require('../images/autogrow.jpg')} />
          <Item.Content>
            <Item.Header as="h4">Autogrow Systems Limited</Item.Header>
            <Item.Meta>
              Software Engineer Intern, June 2018 - February 2019
            </Item.Meta>
            <Item.Description>
              <p>
                "Autogrow creates automation solutions that leverage the power
                of technology, data science and plant biology to provide growers
                affordable, accessible and easy-to-use innovation – 24/7,
                anywhere in the world." - autogrow.com
              </p>
              <p>
                I worked as a Software Engineer Intern at Autogrow during my
                breaks from University. Autogrow allowed me to apply university
                taught theory to applications in the industry.
              </p>
              <p>
                At Autogrow, I designed and developed several Serverless RESTful
                APIs using Golang and AWS. AWS API Gateway was used to route
                requests to be handled by appropriate Lambda functions. The APIs
                involved many other AWS services such as DynamoDB, S3, Step
                Functions, SNS, SQS, Batch. I maintained a Continuous
                Integration workflow using AWS Code Pipeline. I wrote automated
                unit tests in BDD style using GoConvey. All AWS resources were
                templated using AWS CloudFormation.
              </p>
              <p>
                My position at Autogrow taught me many new skills, both
                technical and professional. It was an excellent opportunity to
                apply skills developed through university to real products. It
                has been a great experience working with others in an agile
                setting, something that cannot be easily taught in a course.
              </p>

              <Header as="h4">Technologies Used</Header>
              <List bulleted>
                <List.Item>Golang</List.Item>
                <List.Item>Python</List.Item>
                <List.Item>
                  AWS API Gateway, Lambda, DynamoDB, S3, Step Functions,
                  CloudFormation, Code Pipeline
                </List.Item>
                <List.Item>Machine Vision</List.Item>
                <List.Item>Jira/Confluence</List.Item>
                <List.Item>Git/Github</List.Item>
              </List>
            </Item.Description>
          </Item.Content>
        </Item>
      </Item.Group>
    </Container>

    <Container className="content box">
      <Header as="h2" icon textAlign="center">
        <Icon name="heart" />
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
            <Table.Cell>Football</Table.Cell>
          </Table.Row>
          <Table.Row textAlign="center">
            <Table.Cell>Entrepreneurship</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </Container>

    <Footer />
  </div>
);

export default biography;
