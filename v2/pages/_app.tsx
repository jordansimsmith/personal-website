import NextHead from 'next/head';
import { ChakraProvider, Container, Flex } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <ChakraProvider>
      <NextHead>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </NextHead>

      <Flex direction="column">
        <Header />

        <Container
          as="main"
          maxWidth="container.xl"
          marginTop="100px"
          flexGrow="1"
        >
          <Component {...pageProps} />
        </Container>

        <Footer />
      </Flex>
    </ChakraProvider>
  );
};

export default MyApp;
