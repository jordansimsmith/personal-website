import React from 'react';

import { Container, Header, Icon, Form, Button } from 'semantic-ui-react';

import Footer from '../components/footer';
import Navigation from '../components/navigation';

const contact = () => (
  <div className="content-wrap">
    <Navigation />

    <Container className="content box">
      <Header as="h2" icon textAlign="center">
        <Icon name="mail" />
        <Header.Content>Contact Me</Header.Content>
      </Header>

      <Header as="h3" textAlign="center">
        <Header.Content>
          Message me on LinkedIn or send me an email below and I will get back
          to you.
        </Header.Content>
      </Header>

      <div className="center">
        <Button
          as="a"
          href="https://www.linkedin.com/in/jordansimsmith/"
          target="_blank"
          color="blue"
        >
          My LinkedIn
        </Button>
      </div>

      <Form
        method="POST"
        action="https://formspree.io/jordansimsmith@gmail.com"
      >
        <Form.Input
          type="text"
          name="name"
          placeholder="Your name"
          label="Name"
          required
        />
        <Form.Input
          type="email"
          name="email"
          placeholder="Your email address"
          label="Email"
          required
        />
        <Form.Input
          type="text"
          name="subject"
          placeholder="Subject"
          label="Subject"
          required
        />
        <Form.TextArea
          name="message"
          placeholder="Please type your message here"
          label="Message"
          required
        />

        <Form.Button type="submit" content="Submit" />
      </Form>
    </Container>

    <Footer />
  </div>
);

export default contact;
