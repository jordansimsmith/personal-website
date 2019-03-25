import React from 'react';

import {Container, Header, Icon, Image, Button} from 'semantic-ui-react';

import Footer from '../components/footer';
import Navigation from '../components/navigation';

export default () => (
  <div>
    <Navigation />

    <Container className="content box">
      <Header as="h2" icon textAlign="center">
        <Icon name="file alternate" />
        <Header.Content>Resume</Header.Content>
      </Header>

      <div className="center">
        <Button
          as="a"
          href={require('../assets/jordan-sim-smith-cv.pdf')}
          download>
          <Icon name="download" />
          Download PDF
        </Button>
      </div>

      <div className="center">
        <Image
          id="resume"
          src={require('../images/cv.png')}
          fluid
          rounded
          bordered
        />
      </div>
    </Container>

    <Footer />
  </div>
);
