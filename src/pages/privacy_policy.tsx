import { Text, Heading, Container, Link } from '@chakra-ui/react';
import { Footer } from '../components/Footer';

// import { Container } from '../components/Container';
// import { DarkModeSwitch } from '../components/DarkModeSwitch';
import { Header } from '../components/Header';

const PrivacyPolicy = () => (
  <>
    <Header />

    <Container maxW="container.lg">
      {/* <List spacing={3} mt={40}></List> */}

      <Heading pt="40" size="xl">
        Privacy Policy
      </Heading>
      <Text mt="6">
        We are not interested in collecting any personal information. We believe
        such information is yours and yours alone. We do not store or transmit
        your personal details, nor do we include any advertising or analytics
        software that talks to third parties.
      </Text>
      <Heading size="lg" mt="6">
        What Information Do We Collect?
      </Heading>
      <Text mt="5">
        Orthogeriatrics Handbook does not collect any personal information or
        connect to the internet.
      </Text>
      <Heading size="lg" mt="6">
        Apple App store
      </Heading>
      <Heading size="sm" mt="6">
        Personal data collected:
      </Heading>
      <Text mt="5">Usage data</Text>
      <Heading size="sm" mt="6">
        Details:
      </Heading>
      <Text mt="5">
        By virtue of being distributed via the app store, Apple collects basic
        analytics and provides reporting features that enables the Owner to view
        usage analytics data and measure the performance of this Application.
        Much of this information is processed on an opt-in basis. Users may
        opt-out of this analytics feature directly through their device
        settings. More information on how to manage analysis settings can be
        found on this{' '}
        <Link
          href="https://support.apple.com/en-gb/HT210682"
          isExternal
          color="orange.500"
        >
          page.
        </Link>
      </Text>
      <Heading size="lg" mt="6">
        Contact Us
      </Heading>
      <Text mt="5">
        If you have any questions or concerns, please feel free to
        <Link
          href="mailto: orthogeriatricshandbook@gmail.com"
          color="orange.500"
        >
          {' '}
          contact us.
        </Link>
      </Text>
    </Container>
    <Footer />
  </>
);

export default PrivacyPolicy;
