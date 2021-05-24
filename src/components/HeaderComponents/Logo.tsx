import { useColorModeValue } from '@chakra-ui/color-mode';
import { Link } from '@chakra-ui/layout';
import NextLink from 'next/link';
import { useBreakpointValue } from '@chakra-ui/media-query';
// import Image from 'next/image';
import { Image, Flex, Text } from '@chakra-ui/react';

export const Logo = () => {
  // let loggedIn = isLoggedIn ? '/dashboard' : '/';
  return (
    <NextLink href={'/'}>
      <Link
        // textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
        fontFamily={'heading'}
        color={useColorModeValue('gray.800', 'white')}
        fontSize={useBreakpointValue({ base: 'xl', md: '2xl' })}
        _hover={{
          textDecoration: 'none',
        }}
      >
        <Flex>
          <Image
            src="/OGiosIcongraphicOGapp.png"
            width={{ base: 8, md: 9 }}
            height={{ base: 8, md: 9 }}
          />
          <Text pl="2"> Handbook</Text>
        </Flex>
      </Link>
    </NextLink>
  );
};
