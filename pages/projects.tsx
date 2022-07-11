import { Heading, Text, VStack } from '@chakra-ui/react';
import NextHead from 'next/head';
import { ProjectCard } from '../components/ProjectCard';

const ProjectsPage = (): JSX.Element => {
  return (
    <>
      <NextHead>
        <title>Projects | Jordan Sim-Smith</title>
      </NextHead>

      <VStack spacing="40px">
        <Heading size="3xl">My projects</Heading>
        <VStack spacing="60px">
          <ProjectCard
            title="Price Tracker"
            imageUrl="/price-tracker.png"
            githubRepositoryUrl="https://github.com/jordansimsmith/price-tracker"
            technologies={[
              'C#',
              '.NET Core',
              'EF Core',
              'Hangfire',
              'PostgreSQL',
              'SendGrid',
              'Docker',
              'Kubernetes',
            ]}
          >
            <Text>
              I built a service that scrapes product prices from certain online
              stores, and dispatches emails when the prices change.
            </Text>

            <Text>
              I was frustrated by Chemist Warehouse's ephemeral sales on whey
              powder. Price tracker gives me the peace of mind that I am not
              missing a sale, and consequentially will never have to check the
              online prices manually again.
            </Text>

            <Text>
              Price tracker can be extended easily to track other online stores
              and products.
            </Text>
          </ProjectCard>

          <ProjectCard
            title="Football Subscriber"
            imageUrl="/football-subscriber.png"
            liveSiteUrl="https://football-subscriber.jordansimsmith.com"
            githubRepositoryUrl="https://github.com/jordansimsmith/football-subscriber"
            technologies={[
              'C#',
              '.NET Core',
              'EF Core',
              'Hangfire',
              'PostgreSQL',
              'SendGrid',
              'TypeScript',
              'React.js',
              'Next.js',
              'Docker',
              'Kubernetes',
            ]}
          >
            <Text>
              I built a caching layer in front of the slow interface that
              provides the times and locations for my weekly football games.
            </Text>

            <Text>
              The official application is slow, taking multiple seconds to load
              competitions and their fixtures. Also, fixtures are subject to
              change on short notice, requiring players to repeatedly reload
              site before each game.
            </Text>

            <Text>
              The service also allows users to subscribe to teams, dispatching
              email notifications in the event of a fixture change in the new
              future.
            </Text>
          </ProjectCard>

          <ProjectCard
            title="Test Sanctuary"
            imageUrl="/test-sanctuary.png"
            githubRepositoryUrl="https://github.com/jordansimsmith/test-sanctuary"
            technologies={[
              'TypeScript',
              'Nest.js',
              'GraphQL',
              'TypeORM',
              'MariaDB',
              'React.js',
              'Next.js',
            ]}
          >
            <Text>
              A popular way to prepare for many university tests is to practice
              using tests from previous years. Although the test questions are
              generally available, the answers are not.
            </Text>

            <Text>
              I developed Test Sanctuary to facilitate collaboration between
              students preparing for multi choice question (MCQ) tests and
              exams. Students can login, create and upload tests for an
              institution (e.g. The University of Auckland), attempt tests and
              compare their answers to the official or most popular community
              answers.
            </Text>
          </ProjectCard>

          <ProjectCard
            title="Water Boy"
            imageUrl="/water-boy.png"
            githubRepositoryUrl="https://github.com/jordansimsmith/waterboy"
            technologies={['Python', 'Raspberry Pi']}
          >
            <Text>
              Having trouble keeping a small pot plant alive, I decided to apply
              an engineer's touch. I hooked up a soil moisture sensor to a
              Raspberry Pi Zero W to measure the plant's water supply. Once the
              moisture content drops below a certain threshold, the Pi sends a
              stylised notification email, notifying me of the care required.
            </Text>
          </ProjectCard>
        </VStack>
      </VStack>
    </>
  );
};

export default ProjectsPage;
