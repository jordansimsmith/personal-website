import { DownloadIcon } from '@chakra-ui/icons';
import { Box, Button, Heading, VStack } from '@chakra-ui/react';
import NextHead from 'next/head';
import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const ResumePage = (): JSX.Element => {
  return (
    <>
      <NextHead>
        <title>Resume | Jordan Sim-Smith</title>
      </NextHead>

      <VStack spacing="40px">
        <Heading size="3xl">My resume</Heading>
        <Button
          href="https://s3-ap-southeast-2.amazonaws.com/jordan.sim-smith.co.nz/cv.pdf"
          target="_blank"
          as="a"
          leftIcon={<DownloadIcon />}
        >
          Download
        </Button>

        <Box
          rounded="2xl"
          overflow="hidden"
          maxWidth={1004} // 1000 + border
          transform="translate(0)"
          boxShadow="dark-lg"
        >
          <Document file="https://s3-ap-southeast-2.amazonaws.com/jordan.sim-smith.co.nz/cv.pdf">
            <Page
              pageNumber={1}
              renderTextLayer={false}
              renderAnnotationLayer={false}
              width={1000}
              renderMode="canvas"
            />
          </Document>
        </Box>
      </VStack>
    </>
  );
};

export default ResumePage;
