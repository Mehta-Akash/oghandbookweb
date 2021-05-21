import { Flex, Text } from '@chakra-ui/react';

export const Hero = () => (
  <Flex
    w="100%"
    h={'65vh'}
    maxH={'30rem'}
    backgroundImage={'/impacted-subcapital-fracture.jpg'}
    backgroundSize={'cover'}
    backgroundPosition={'bottom'}
    justifyContent="center"
    alignItems="center"
  >
    <Text
      fontSize={{ base: '30', md: '5vw' }}
      fontWeight="bold"
      color="white"
      zIndex="0"
    >
      {'Orthogeriatrics Handbook'}
    </Text>
  </Flex>
);

Hero.defaultProps = {
  title: 'Orthogeriatrics Handbook laskdfla alskdjf ',
};
