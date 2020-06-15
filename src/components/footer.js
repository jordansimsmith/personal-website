import React from 'react';
import { List, Container, Segment, Grid, Header } from 'semantic-ui-react';

import Link from 'gatsby-link';

const Footer = () => {
  const [lastUpdated, setLastUpdated] = React.useState();

  // fetch last commit to master branch
  React.useEffect(() => {
    const url =
      'https://api.github.com/repos/jordansimsmith/personal-website/branches/master';

    fetch(url)
      .then((data) => data.json())
      .then((json) =>
        setLastUpdated(new Date(json.commit.commit.committer.date))
      )
      .catch((err) => console.error(err));
  }, []);

  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const lastUpdatedString = lastUpdated
    ? `Jordan Sim-Smith, ${
        monthNames[lastUpdated.getMonth()]
      } ${lastUpdated.getFullYear()}`
    : `Jordan Sim-Smith`;

  return (
    <div className="footer">
      <Segment inverted vertical style={{ padding: '5em 0em' }}>
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row>
              <Grid.Column width={3}>
                <Header inverted as="h4" content="Contact Me" />
                <List link inverted>
                  <List.Item
                    as="a"
                    href="https://www.linkedin.com/in/jordansimsmith/"
                    target="_blank"
                  >
                    LinkedIn
                  </List.Item>
                  <List.Item
                    as="a"
                    href="https://github.com/jordansimsmith"
                    target="_blank"
                  >
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
                <p>{lastUpdatedString}</p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    </div>
  );
};

export default Footer;
