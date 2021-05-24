import { Text, Container, Link } from '@chakra-ui/react';

import { Hero } from '../components/Hero';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const Index = () => (
  // <Container height="100vh">
  <>
    <Header />
    <Hero />
    <Container pt="10">
      <Text>
        The OG handbook is a comprehensive and easy to use app that allows you
        to access information about treating patients with hip fractures. It
        summarises the key standards set out by the British Orthopaedic
        Association (BOA) and the British Geriatric Society (BGS) in the
        publication 'The Care of Patients with Fragility Fracture 2007' and in
        'The Care of the older or Frail orthopaedic trauma patient 2019'. These
        standards are monitored for patients admitted to hospital with hip
        fracture as part of the National Hip Fracture Database (NHFD). New and
        updated guidelines are frequently issued by the NHFD. The OG handbook
        summarises the important aspects of orthogeriatric patient care form
        presentation in the emergency department, pre-operative optimisation,
        inpatient care and final discharge.
      </Text>
      <Text pt="20">
        Image and case courtesy of Assoc Prof Frank Gaillard,{' '}
        <Link href="https://radiopaedia.org/">Radiopaedia.org</Link>. From the
        case <Link href="https://radiopaedia.org/cases/2717">rID: 2717</Link>
      </Text>
    </Container>
    <Footer />
  </>
);

export default Index;
