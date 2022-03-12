import { ChakraProvider, Container } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import { Navigation } from '../components/Navigation';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <ChakraProvider>
      <header>
        <Navigation />
      </header>

      <Container as="main" maxWidth="container.xl" marginTop="100px">
        <Component {...pageProps} />
      </Container>
    </ChakraProvider>
  );
};

export default MyApp;
