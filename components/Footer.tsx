import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Link, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { useLastUpdated } from '../hooks/useLastUpdated';

export const Footer = (): JSX.Element => {
  const lastUpdated = useLastUpdated();

  return (
    <VStack
      as="footer"
      backgroundColor="gray.100"
      color="gray.600"
      paddingTop="20px"
      paddingBottom="20px"
      marginTop="60px"
    >
      <Text>Jordan Sim-Smith</Text>

      <Text>Last updated: {lastUpdated}</Text>

      <br />

      <Link
        href="https://linkedin.com/in/jordansimsmith"
        isExternal
        display="flex"
        alignItems="center"
      >
        LinkedIn <ExternalLinkIcon />
      </Link>
      <Link href="https://github.com/jordansimsmith" isExternal>
        GitHub <ExternalLinkIcon />
      </Link>
    </VStack>
  );
};
