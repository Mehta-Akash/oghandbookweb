import { Text, Container, Box, Badge, Icon, Stack } from '@chakra-ui/react';
import { Header } from '../components/Header';
import { MdAndroid } from 'react-icons/md';
import { AiOutlineApple } from 'react-icons/ai';
import Image from 'next/image';

const Products = () => (
  <>
    <Header />
    <Container
      display={{ base: 'flex', md: 'flex' }}
      justifyContent={'center'}
      alignItems={'center'}
      maxW={'100%'}
      flexDirection={{ base: 'column', md: 'row' }}
    >
      <Box
        maxW="sm"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        as="a"
        mt={'20vh'}
        mr={'1rem'}
        href="https://play.google.com/store/apps/details?id=com.theOGApp.OGHandbook&hl=en_GB&gl=US"
        _hover={{ border: '2px', color: '#ff6700' }}
        onClick={() => {}}
      >
        <Box d="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="white" color="white">
            .
          </Badge>
        </Box>
        <Icon as={MdAndroid} w={200} h={200} />

        <Box p="6">
          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            {/* {property.title} */}
          </Box>

          <Box color="gray.500">{'Get Android App'}</Box>
        </Box>
      </Box>
      <Box
        maxW="sm"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        as="button"
        mt={{ base: '10', md: '20vh' }}
        mr={'1rem'}
        _hover={{ border: '2px', color: '#ff6700' }}
        // onClick={() => revisionSelection(property.type)}
      >
        <Box d="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            Coming soon
          </Badge>
        </Box>
        <Icon as={AiOutlineApple} w={200} h={200} />

        <Box p="6">
          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            {/* {property.title} */}
          </Box>

          <Box color="gray.500">{'Get IOS app'}</Box>
        </Box>
      </Box>
    </Container>
  </>
);

export default Products;
