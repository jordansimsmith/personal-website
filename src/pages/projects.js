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
  <div className="content-wrap">
    <Navigation />

    <Container className="content box">
      <Header as="h2" icon textAlign="center">
        <Icon name="code" />
        <Header.Content>Personal Projects</Header.Content>
      </Header>

      <Card fluid>
        <Image fluid src={require('../images/are-you-hitler.png')} />
        <Card.Content>
          <Card.Header>Secret Stats</Card.Header>
          <Card.Meta>July 2019</Card.Meta>
          <Card.Description>
            <p>
              One of my favourite activities is playing the social deduction
              game: <a href="https://secrethitler.com">Secret Hitler</a> with my
              friends. I developed a web application to track records of our
              games so each statistics can be made available for each user.
            </p>
            <p>
              I architected this application using microservices with Docker and
              Docker Compose. I wrote the API service in Golang using the
              <a href="https://github.com/gin-gonic/gin"> Gin API framework </a>
              and a MariaDB database. I wrote the client application using
              React.js. I configured NGINX to serve static files and to act as a
              reverse proxy to the API. API documentation was written in
              <a href="https://swagger.io"> Swagger</a>. I used
              <a href="https://auth0.com"> Auth0</a> to secure my App and API
              with JSON Web Tokens.
            </p>
            <Button
              as="a"
              href="https://github.com/jordansimsmith/secret-stats"
              target="_blank"
              size="mini">
              <Icon name="github" />
              GitHub Repository
            </Button>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Label>Golang</Label>
          <Label>
            <Icon name="react" color="blue" />
            React.js
          </Label>
          <Label>
            <Icon name="docker" color="blue" />
            Docker
          </Label>
          <Label>
            <Icon name="database" color="orange" />
            MariaDB
          </Label>
          <Label>
            <Icon name="server" color="green" />
            NGINX
          </Label>
          <Label>
            <Icon name="key" color="red" />
            Auth0
          </Label>
        </Card.Content>
      </Card>

      <Card fluid>
        <Image fluid src={require('../images/waterboy.png')} />
        <Card.Content>
          <Card.Header>Water Boy</Card.Header>
          <Card.Meta>May 2019</Card.Meta>
          <Card.Description>
            <p>
              Having trouble keeping a small pot plant alive, I decided to apply
              an engineer’s touch. I hooked up a soil moisture sensor to a
              Raspberry Pi Zero W to measure the plant’s water supply. Once the
              moisture content drops below a certain threshold, the Pi sends a
              stylised notification email, notifying me of the care required. So
              far, my chilli plant has remained watered and alive.
            </p>
            <Button
              as="a"
              href="https://github.com/jordansimsmith/waterboy"
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
          <Label>Raspberry Pi</Label>
          <Label>
            <Icon name="html5" color="orange" />
            HTML
          </Label>
          <Label>
            <Icon name="css3" color="blue" />
            CSS
          </Label>
          <Label>
            <Icon name="mail" color="red" />
            Email
          </Label>
        </Card.Content>
      </Card>

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
