import {
  Box,
  Container,
  Link,
  Stack,
  Text,
  useColorModeValue,
  // Flex,
} from '@chakra-ui/react';

export const Footer = () => (
  <Box
    bg={useColorModeValue('gray.900', 'gray.900')}
    color={useColorModeValue('gray.200', 'gray.200')}
    w="100%"
    // flexShrink={1}
    mt="20"
  >
    <Container
      as={Stack}
      maxW={'6xl'}
      py={12}
      justifyContent="center"
      alignItems="center"
    >
      {/* <SimpleGrid
        // templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }}
        spacing={8}
      > */}
      <Stack spacing={6}>
        <Text fontSize={'sm'} textAlign="center">
          © 2021 OGhandbook. All rights reserved
        </Text>
        <Text fontSize={'sm'} textAlign="center">
          If you have any questions please feel free to
          <Link
            href="mailto: orthogeriatricshandbook@gmail.com"
            color="orange.500"
          >
            {' '}
            contact us.
          </Link>
        </Text>
      </Stack>
    </Container>
  </Box>
);
