import { Box, Heading, Link, Text } from '@chakra-ui/react';

const IndexPage = (): JSX.Element => {
  return (
    <Box>
      <Heading size="3xl">
        A developer passionate about creating modern web services
      </Heading>

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
    </Box>
  );
};

export default IndexPage;
