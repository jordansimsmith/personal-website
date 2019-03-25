import React from 'react';

import {
  Container,
  Header,
  Icon,
  Card,
  Image,
  Button,
  Label,
} from 'semantic-ui-react';

import Footer from '../components/footer';
import Navigation from '../components/navigation';

export default () => (
  <div>
    <Navigation />

    <Container className="content box">
      <Header as="h2" icon textAlign="center">
        <Icon name="code" />
        <Header.Content>Personal Projects</Header.Content>
      </Header>

      <Card fluid>
        <Image fluid src={require('../images/webtex.png')} />
        <Card.Content>
          <Card.Header>WebTex</Card.Header>
          <Card.Meta>March 2019</Card.Meta>
          <Card.Description>
            <p>
              I developed this program so that I could print out just the
              content of a web page in a consistent format for reading and
              annotation. It is written in Python 3, using the Readability
              library to extract the content, Beautiful Soup to analyse the HTML
              and PyLatex to typeset the results into a LaTeX document.
            </p>
            <Button
              as="a"
              href="https://github.com/jordansimsmith/webtex"
              target="_blank"
              size="mini">
              <Icon name="github" />
              GitHub Repository
            </Button>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Label>
            <Icon name="python" color="yellow" />
            Python
          </Label>
          <Label>Beautiful Soup</Label>
          <Label>LaTeX</Label>
          <Label>
            <Icon name="docker" color="blue" />
            Docker
          </Label>
        </Card.Content>
      </Card>

      <Card fluid>
        <Image fluid src={require('../images/personal-website.png')} />
        <Card.Content>
          <Card.Header>Personal Website</Card.Header>
          <Card.Meta>October 2018</Card.Meta>
          <Card.Description />
          <p>
            This website was developed using the React.js library. The Gatsby.js
            static site generator was used to transpile and bundle JSX for
            deployment. Node.js was used to manage dependencies through npm.
            Semantic UI React Components were used.
          </p>
          <Button
            as="a"
            href="https://github.com/jordansimsmith/personal-website"
            target="_blank"
            size="mini">
            <Icon name="github" />
            GitHub Repository
          </Button>
        </Card.Content>
        <Card.Content extra>
          <Label>
            <Icon name="react" color="blue" />
            React.js
          </Label>
          <Label>Gatsby.js</Label>
          <Label>
            <Icon name="html5" color="orange" />
            HTML
          </Label>
          <Label>
            <Icon name="css3" color="blue" />
            CSS
          </Label>
          <Label>
            <Icon name="js" color="yellow" />
            JavaScript
          </Label>
        </Card.Content>
      </Card>
    </Container>

    <Footer />
  </div>
);
