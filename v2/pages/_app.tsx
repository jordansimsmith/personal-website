import { ChakraProvider, Container, Flex } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <ChakraProvider>
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
