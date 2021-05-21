import { useColorModeValue } from '@chakra-ui/color-mode';
import { Link } from '@chakra-ui/layout';
import { useBreakpointValue } from '@chakra-ui/media-query';
// import Image from 'next/image';
import { Image, Flex, Text } from '@chakra-ui/react';

export const Logo = () => {
  // let loggedIn = isLoggedIn ? '/dashboard' : '/';
  return (
    <Link
      // textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
      fontFamily={'heading'}
      color={useColorModeValue('gray.800', 'white')}
      fontSize={useBreakpointValue({ base: 'xl', md: '3xl' })}
      // fontSize="3xl"
      href={'/'}
      _hover={{
        textDecoration: 'none',
      }}
    >
      <Flex>
        <Image
          src="/OGiosIcongraphicOGapp.png"
          width={{ base: 8, md: 10 }}
          height={{ base: 8, md: 10 }}
        />
        <Text pl="2"> Handbook</Text>
      </Flex>
    </Link>
  );
};
