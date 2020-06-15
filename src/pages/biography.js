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
                I am in my fourth and final year of a Bachelor of Engineering
                (Software) at the University of Auckland. Software engineering
                is constantly changing, with new discoveries being made every
                day. This drives my passion for software engineering, as every
                day is different, and something new can be learned.
              </p>

              <p>
                I am a founding executive member and Technical Lead for the UoA
                Developer’s Society, the largest student tech club in New
                Zealand. I lead a team of 9 to produce high quality technical
                workshops for hundreds of students.
              </p>

              <Header as="h4">Notable Courses</Header>
              <List bulleted>
                <List.Item>
                  <List.Header>
                    Advanced Software Development Methodologies
                  </List.Header>
                  Collaboration in large teams, working on open source software
                  projects.
                </List.Item>
                <List.Item>
                  <List.Header>Software Development Methodologies</List.Header>
                  12-week project involving user interviews, beta testing,
                  continuous integration and deployment.
                </List.Item>
                <List.Item>
                  <List.Header>
                    Advanced Software Requirements Engineering
                  </List.Header>
                  Requirements elicitation, test driven development, behaviour
                  driven development.
                </List.Item>
                <List.Item>
                  <List.Header>Software Architecture</List.Header>
                  Designing service oriented architectures for performance,
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
                <List.Item>GPA: 8.7/9 (A/A+ average)</List.Item>
                <List.Item>
                  Dean’s Honours List (top 5% in cohort) 2017, 2018, 2019
                </List.Item>
                <List.Item>
                  First in course award for Software Architecture, Software
                  Engineering Design 2, Fundamentals of Computer Engineering.
                </List.Item>
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
          <Item.Image size="medium" src={require('../images/nintex.png')} />
          <Item.Content>
            <Item.Header as="h4">Nintex</Item.Header>
            <Item.Meta>
              Associate Developer Intern, November 2019 - February 2020
            </Item.Meta>
            <Item.Description>
              <p>
                &quot;Build, improve and share process knowledge from a central
                online repository with Nintex Promapp's business process
                management (BPM) software. Turn complex process maps, Visio
                charts and procedure documents into clean, simple process maps
                that everyone can find and follow.&quot; - promapp.com
              </p>
              <p>
                I worked as a Associate Developer Intern at Nintex during my
                university summer holidays. This internship provided a great
                opportunity to build upon skills that I have developed through
                university, previous work experience and personal projects.
              </p>
              <p>
                At Nintex, I collaborated on Promapp production stories with
                team members in an agile environment. I Developed backend
                features using C#, .NET Core, Entity Framework and SQL Server. I
                Developed frontent features using TypeScript and React. I Wrote
                testable code and wrote unit tests for all features using XUnit
                and Moq.
              </p>

              <Header as="h4">Technologies Used</Header>
              <List bulleted>
                <List.Item>C#</List.Item>
                <List.Item>.NET Core</List.Item>
                <List.Item>SQL Server</List.Item>
                <List.Item>TypeScript</List.Item>
                <List.Item>React</List.Item>
                <List.Item>Docker</List.Item>
              </List>
            </Item.Description>
          </Item.Content>
        </Item>
      </Item.Group>

      <Divider />

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
