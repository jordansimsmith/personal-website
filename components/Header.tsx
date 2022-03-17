import { HamburgerIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  ButtonGroup,
  Heading,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useBreakpointValue,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';

const links = [
  {
    name: 'About',
    path: '/',
  },
  {
    name: 'Projects',
    path: '/projects',
  },
  {
    name: 'Resume',
    path: '/resume',
  },
  {
    name: 'Contact',
    path: '/contact',
  },
];

export const Header = (): JSX.Element => {
  const isWideScreen = useBreakpointValue({ base: false, sm: false, md: true });

  return (
    <Box as="header">
      <Box
        backgroundColor="green.200"
        display="flex"
        justifyContent="space-between"
        padding="10px"
        as="nav"
      >
        <Heading size="lg">Jordan Sim-Smith</Heading>

        <Box>
          {isWideScreen ? (
            <ButtonGroup>
              {links.map((link, i) => (
                <NextLink href={link.path} passHref key={i}>
                  <Button as="a" colorScheme="green" variant="ghost">
                    {link.name}
                  </Button>
                </NextLink>
              ))}
            </ButtonGroup>
          ) : (
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                colorScheme="green"
                variant="ghost"
              >
                hi
              </MenuButton>

              <MenuList>
                {links.map((link, i) => (
                  <NextLink href={link.path} key={i} passHref>
                    <MenuItem as="a">{link.name}</MenuItem>
                  </NextLink>
                ))}
              </MenuList>
            </Menu>
          )}
        </Box>
      </Box>
    </Box>
  );
};
