import { DownloadIcon } from '@chakra-ui/icons';
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  Center,
  Heading,
  Spinner,
  VStack,
} from '@chakra-ui/react';
import NextHead from 'next/head';
import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const resumeUrl =
  'https://s3-ap-southeast-2.amazonaws.com/jordan.sim-smith.co.nz/cv.pdf';

const ResumePage = (): JSX.Element => {
  const [loaded, setLoaded] = React.useState<boolean>(false);

  return (
    <>
      <NextHead>
        <title>Resume | Jordan Sim-Smith</title>
      </NextHead>

      <VStack spacing="40px">
        <Heading size="3xl">My resume</Heading>
        <Button
          href={resumeUrl}
          target="_blank"
          as="a"
          leftIcon={<DownloadIcon />}
        >
          Download
        </Button>

        <Box
          rounded={loaded ? '2xl' : undefined}
          overflow={loaded ? 'hidden' : undefined}
          maxWidth={loaded ? '1004px' : undefined} // 1000 + border
          transform={loaded ? 'translate(0)' : undefined}
          boxShadow={loaded ? 'dark-lg' : undefined}
        >
          <Document
            file={resumeUrl}
            loading={
              <Center>
                <Spinner color="green.500" size="lg" />
              </Center>
            }
            onLoadSuccess={() => setLoaded(true)}
            error={
              <Alert status="error">
                <AlertIcon />
                <AlertTitle mr={2}>Error loading resume</AlertTitle>
                <AlertDescription>Please try again.</AlertDescription>
              </Alert>
            }
          >
            <Page
              pageNumber={1}
              renderTextLayer={false}
              renderAnnotationLayer={false}
              width={1000}
              renderMode="canvas"
              loading={null}
            />
          </Document>
        </Box>
      </VStack>
    </>
  );
};

export default ResumePage;
