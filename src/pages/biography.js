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

              <List bulleted>
                <List.Item>
                  Designed components for an Azure Cognitive Search based
                  microservice.
                </List.Item>

                <List.Item>
                  Individually containerised existing microservices using Docker
                  and .NET Core.
                </List.Item>

                <List.Item>
                  Awarded R & D legend of the month for independently upgrading
                  legacy software, resolving issues experienced by hundreds of
                  customers.
                </List.Item>

                <List.Item>
                  Collaborated on Promapp production stories with team members
                  in an agile environment.
                </List.Item>

                <List.Item>
                  Developed full stack features using C#, .NET Core, SQL Server,
                  TypeScript and React.
                </List.Item>
              </List>

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
                My position at Autogrow taught me many new skills, both
                technical and professional. It was an excellent opportunity to
                apply skills developed through university to real products. It
                has been a great experience working with others in an agile
                setting, something that cannot be easily taught in a course.
              </p>

              <List bulleted>
                <List.Item>
                  Designed and implemented RESTful APIs in Golang on AWS to
                  scale a greenhouse health computer vision solution.
                </List.Item>

                <List.Item>
                  Architected and implemented a serverless, event-driven push
                  notifications system for browsers. Used AWS services such as
                  API Gateway, Lambda, DynamoDB, SNS, SQS.
                </List.Item>

                <List.Item>
                  Redesigned an Python image processing pipeline for performance
                  improvements exceeding 50x.
                </List.Item>

                <List.Item>
                  Maintained a Continuous Integration workflow using
                  CodePipeline and CloudFormation, saving hundreds of developer
                  hours per month.
                </List.Item>
              </List>

              <Header as="h4">Technologies Used</Header>
              <List bulleted>
                <List.Item>Golang</List.Item>
                <List.Item>Python</List.Item>
                <List.Item>
                  AWS API Gateway, Lambda, DynamoDB, S3, Step Functions,
                  CloudFormation, Code Pipeline
                </List.Item>
                <List.Item>Machine Vision</List.Item>
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
            <Table.Cell>JavaScript</Table.Cell>
            <Table.Cell>TypeScript</Table.Cell>
          </Table.Row>
          <Table.Row textAlign="center">
            <Table.Cell>React.js</Table.Cell>
            <Table.Cell>Python</Table.Cell>
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
            <Table.Cell>Azure</Table.Cell>
          </Table.Row>
          <Table.Row textAlign="center">
            <Table.Cell>Unit Testing</Table.Cell>
            <Table.Cell>CI/CD</Table.Cell>
          </Table.Row>
          <Table.Row textAlign="center">
            <Table.Cell>Linux</Table.Cell>
            <Table.Cell></Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </Container>

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
                I graduated with a Bachelor of Engineering (Honours) in Software
                from the University of Auckland in 2020.
              </p>

              <p>
                I was a founding executive member and Technical Lead for the UoA
                Developer’s Society, the largest student tech club in New
                Zealand. I lead a team of 9 to produce high quality technical
                workshops for hundreds of students.
              </p>

              <Header as="h4">Notable Courses</Header>
              <List bulleted>
                <List.Item>
                  <List.Header>
                    Advanced Agile and Lean Software Development
                  </List.Header>
                  Scrum collaboration in a distributed environment to build a
                  product for a real client.
                </List.Item>
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
                  Dean’s Honours List (top 5% in cohort) 2017, 2018, 2019, 2020
                </List.Item>
                <List.Item>
                  First in course award for Software Development Methodologies,
                  Software Architecture, Software Engineering Design 2,
                  Fundamentals of Computer Engineering.
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
        </Table.Body>
      </Table>
    </Container>

    <Footer />
  </div>
);

export default biography;
