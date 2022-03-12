import { Box, Flex, Heading, Image, Link, Text } from '@chakra-ui/react';
import NextLink from 'next/link';

const AboutPage = (): JSX.Element => {
  return (
    <Flex flexDirection="row">
      <Image
        borderRadius="3xl"
        alt="Jordan Sim-Smith"
        src="/portrait.jpg"
        objectFit="cover"
        maxWidth="400px"
        maxHeight="400px"
      />
      <Box paddingLeft="40px">
        <Heading size="3xl">Hi there! 👋</Heading>

        <Text marginTop="20px">
          I'm an Engineer at{' '}
          <Link href="https://www.nintex.com/" isExternal color="green.600">
            Nintex
          </Link>{' '}
          and a graudate from the{' '}
          <Link href="https://www.auckland.ac.nz/" isExternal color="green.600">
            University of Auckland
          </Link>
          .
        </Text>
        <br />

        <Text>
          My passion for sofware engineering is fed from my drive for learning
          and self improvement. The opportunity to explore potential
          enhancements motivates me to seek out areas of improvement, instead of
          letting the technolgy I am using become stale.
        </Text>
        <br />

        <Text>
          One way that I like to challenge myself and learn new skills is to
          build personal projects. This website is an example of one! Check out
          my{' '}
          <Link
            href="https://github.com/jordansimsmith"
            isExternal
            color="green.600"
          >
            GitHub
          </Link>{' '}
          to see what other cool projects that I have been working on.
        </Text>
        <br />

        <Text>
          Thank you for taking the time to learn a bit about me. Please do not
          hesitate to{' '}
          <NextLink href="/contact" passHref>
            <Link color="green.600">contact</Link>
          </NextLink>{' '}
          me if you wish to get in touch. Have a great day!
        </Text>
      </Box>
    </Flex>
  );
};

export default AboutPage;
