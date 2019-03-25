import React from 'react';
import {Menu, Container, Image} from 'semantic-ui-react';
import Link from 'gatsby-link';

class Navigation extends React.Component {
  render() {
    return (
      <Menu inverted>
        <Container>
          <Menu.Item as={Link} to="/" header>
            <Image
              size="mini"
              src={require('../images/portrait.jpg')}
              style={{marginRight: '1.5em'}}
            />
            Jordan Sim-Smith
          </Menu.Item>

          <Menu.Item as={Link} to="/#about">
            About
          </Menu.Item>
          <Menu.Item as={Link} to="/biography/">
            Biography
          </Menu.Item>
          <Menu.Item as={Link} to="/projects/">
            Projects
          </Menu.Item>
          <Menu.Item as={Link}>Blog</Menu.Item>
          <Menu.Item as={Link} to="/resume/">
            Resume
          </Menu.Item>
          <Menu.Item as={Link} to="/contact/">
            Contact
          </Menu.Item>
        </Container>
      </Menu>
    );
  }
}

export default Navigation;
