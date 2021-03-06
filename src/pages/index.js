import React from 'react';
import { Header, Container, Icon, Item, Button, Grid } from 'semantic-ui-react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import Footer from '../components/footer';
import Navigation from '../components/navigation';

import 'semantic-ui-css/semantic.min.css';
import '../styles/default.css';

const index = () => (
  <div className="content-wrap">
    <Helmet>
      <title>Jordan Sim-Smith</title>

      <meta charset="utf-8" />
      <meta name="author" content="Jordan Sim-Smith" />
      <meta name="description" content="Jordan Sim-Smith personal website" />
      <meta
        name="google-site-verification"
        content="XWCNf1sTNpK7uE7ad6BicgVR0pg508hwYw_7Sjerb4A"
      />

      <link href={require('../images/favicon.ico')} rel="shortcut icon" />
    </Helmet>

    <div className="landing background">
      <Grid centered>
        <Grid.Row>
          <Header as="h1">Hello, I’m Jordan Sim-Smith.</Header>
        </Grid.Row>
        <Grid.Row>
          <Button as={Link} to="/#about" inverted size="huge">
            Click to continue
          </Button>
        </Grid.Row>
      </Grid>
    </div>

    <Navigation />

    <Container className="content box">
      <Header as="h2" icon textAlign="center" id="about">
        <Icon name="user" />
        <Header.Content>About Me</Header.Content>
      </Header>
      <Item.Group>
        <Item>
          <Item.Image size="medium" src={require('../images/portrait.jpg')} />
          <Item.Content>
            <Item.Header as="h3">Hi there!</Item.Header>
            <Item.Description>
              <p>
                Hi there! My name is Jordan Sim-Smith, and I am a graduate
                software engineer from the University of Auckland, and an
                Associate Developer at Nintex. I enjoy working my way through
                challenging problems while teaching myself new skills at the
                same time.
              </p>

              <p>
                Software engineering is an incredibly fast moving field. This
                volatility drives my passion; there is always something new to
                learn to improve the way that things are currently done. The
                challenges faced and solutions developed every day are ever
                changing and evolving.
              </p>

              <p>
                One way that I like to challenge myself and learn new skills is
                to build personal projects. This website is an example of one; I
                learnt React.js through building it! Check out the
                <a href="/projects"> projects</a> section for other cool
                projects that I have been working on.
              </p>

              <p>
                Thank you for taking the time to learn a bit about me. Please do
                not hesitate to visit the <a href="/contact">contact</a> section
                if you wish to get in touch. Have a great day!
              </p>
            </Item.Description>
          </Item.Content>
        </Item>
      </Item.Group>
    </Container>

    <Footer />
  </div>
);

export default index;
