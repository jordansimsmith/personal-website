import { Box, Heading, VStack, Text, Link } from '@chakra-ui/react';

const ContactPage = (): JSX.Element => {
  return (
    <VStack spacing="40px">
      <Heading size="3xl">Contact me</Heading>

      <Text>
        If you would like to get in touch, please send a message to my{' '}
        <Link
          href="https://linkedin.com/in/jordansimsmith"
          isExternal
          color="green.600"
        >
          LinkedIn
        </Link>{' '}
        and I will get back to you.
      </Text>
    </VStack>
  );
};

export default ContactPage;
