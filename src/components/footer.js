import React from 'react';
import {List, Container, Segment, Grid, Header} from 'semantic-ui-react';

import Link from 'gatsby-link';

class Footer extends React.Component {
  render() {
    return (
      <Segment inverted vertical style={{padding: '5em 0em'}}>
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row>
              <Grid.Column width={3}>
                <Header inverted as="h4" content="Contact Me" />
                <List link inverted>
                  <List.Item
                    as="a"
                    href="https://www.linkedin.com/in/jordansimsmith/"
                    target="_blank">
                    LinkedIn
                  </List.Item>
                  <List.Item
                    as="a"
                    href="https://github.com/jordansimsmith"
                    target="_blank">
                    GitHub
                  </List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header inverted as="h4" content="Pages" />
                <List link inverted>
                  <List.Item as={Link} to="/">
                    Home
                  </List.Item>
                  <List.Item as={Link} to="/biography">
                    Biography
                  </List.Item>
                  <List.Item as={Link} to="/projects">
                    Projects
                  </List.Item>
                  <List.Item as={Link} to="/resume">
                    Resume
                  </List.Item>
                  <List.Item as={Link} to="/contact">
                    Contact
                  </List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={7}>
                <Header as="h4" inverted>
                  Updated
                </Header>
                <p>Jordan Sim-Smith, July 2019</p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    );
  }
}

export default Footer;
