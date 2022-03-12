import NextLink from 'next/link';
import { Box, Button, ButtonGroup, Heading } from '@chakra-ui/react';
import React from 'react';

export const Navigation = (): JSX.Element => {
  return (
    <Box
      backgroundColor="green.200"
      display="flex"
      justifyContent="space-between"
      padding="10px"
      as="nav"
    >
      <NextLink href="/" passHref>
        <Heading as="a">Jordan Sim-Smith</Heading>
      </NextLink>

      <ButtonGroup>
        <NextLink href="/about" passHref>
          <Button as="a">About</Button>
        </NextLink>

        <NextLink href="/projects" passHref>
          <Button as="a">Projects</Button>
        </NextLink>

        <NextLink href="/resume" passHref>
          <Button as="a">Resume</Button>
        </NextLink>

        <NextLink href="/contact" passHref>
          <Button as="a">Contact</Button>
        </NextLink>
      </ButtonGroup>
    </Box>
  );
};
