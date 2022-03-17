import { ExternalLinkIcon } from '@chakra-ui/icons';
import {
  Box,
  Stack,
  Heading,
  HStack,
  Tag,
  Button,
  ButtonGroup,
  Divider,
  Image,
  Text,
  SimpleGrid,
  Wrap,
} from '@chakra-ui/react';
import React, { Children } from 'react';

type ProjectCardProps = {
  title: string;
  children: React.ReactNode;
  imageUrl?: string;
  liveSiteUrl?: string;
  githubRepositoryUrl: string;
  technologies: string[];
};

export const ProjectCard = ({
  title,
  children,
  imageUrl,
  liveSiteUrl,
  githubRepositoryUrl,
  technologies,
}: ProjectCardProps): JSX.Element => {
  return (
    <Box rounded="md" overflow="hidden" boxShadow="dark-lg">
      {imageUrl && <Image alt={title} src={imageUrl}></Image>}

      <Stack padding="20px">
        <Heading size="lg" as="h3">
          {title}
        </Heading>

        {children}

        <br />

        <ButtonGroup>
          {liveSiteUrl && (
            <Button
              leftIcon={<ExternalLinkIcon />}
              colorScheme="green"
              href={liveSiteUrl}
              as="a"
              target="_blank"
            >
              Live site
            </Button>
          )}

          <Button
            leftIcon={<ExternalLinkIcon />}
            href={githubRepositoryUrl}
            as="a"
            target="_blank"
          >
            GitHub repository
          </Button>
        </ButtonGroup>

        <Divider />

        <Wrap>
          {technologies.map((tech, i) => (
            <Tag size="lg" variant="outline" colorScheme="green" key={i}>
              {tech}
            </Tag>
          ))}
        </Wrap>
      </Stack>
    </Box>
  );
};
