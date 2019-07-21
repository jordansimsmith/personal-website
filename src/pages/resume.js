import React from 'react';

import {Container, Header, Icon, Image, Button} from 'semantic-ui-react';

import Footer from '../components/footer';
import Navigation from '../components/navigation';

const resume = () => (
  <div className="content-wrap">
    <Navigation />

    <Container className="content box">
      <Header as="h2" icon textAlign="center">
        <Icon name="file alternate" />
        <Header.Content>Resume</Header.Content>
      </Header>

      <div className="center">
        <Button
          as="a"
          href="https://s3-ap-southeast-2.amazonaws.com/jordan.sim-smith.co.nz/cv.pdf"
          download>
          <Icon name="download" />
          Download PDF
        </Button>
      </div>

      <div className="center">
        <Image
          id="resume"
          src="https://s3-ap-southeast-2.amazonaws.com/jordan.sim-smith.co.nz/cv.png"
          fluid
          rounded
          bordered
        />
      </div>
    </Container>

    <Footer />
  </div>
);

export default resume;
