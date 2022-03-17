import NextLink from 'next/link';
import { Box, Button, ButtonGroup, Heading } from '@chakra-ui/react';
import React from 'react';

export const Header = (): JSX.Element => {
  return (
    <Box as="header">
      <Box
        backgroundColor="green.200"
        display="flex"
        justifyContent="space-between"
        padding="10px"
        as="nav"
      >
        <NextLink href="/" passHref>
          <Heading as="a" size="lg">
            Jordan Sim-Smith
          </Heading>
        </NextLink>

        <ButtonGroup>
          <NextLink href="/" passHref>
            <Button as="a" colorScheme="green" variant="ghost">
              About
            </Button>
          </NextLink>

          <NextLink href="/projects" passHref>
            <Button as="a" colorScheme="green" variant="ghost">
              Projects
            </Button>
          </NextLink>

          <NextLink href="/resume" passHref>
            <Button as="a" colorScheme="green" variant="ghost">
              Resume
            </Button>
          </NextLink>

          <NextLink href="/contact" passHref>
            <Button as="a" colorScheme="green" variant="ghost">
              Contact
            </Button>
          </NextLink>
        </ButtonGroup>
      </Box>
    </Box>
  );
};
