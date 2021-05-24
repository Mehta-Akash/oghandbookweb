import { Button } from '@chakra-ui/button';
import React from 'react';
import Link from 'next/link';
// import { useMeQuery, useLogoutMutation } from '../../generated/graphql';
// import { useApolloClient } from '@apollo/client';

type DesktopNavRightProps = {
  onOpen: () => void;
};

export const DesktopNavRight: React.FC<DesktopNavRightProps> = ({ onOpen }) => {
  let body = (
    <>
      <Link href={'/privacy_policy'}>
        <Button
          display={{ base: 'none', md: 'flex' }}
          as={'a'}
          onClick={onOpen}
          fontSize={'md'}
          fontWeight={600}
          variant={'link'}
        >
          Privacy policy
        </Button>
      </Link>

      <Link href={'/products'}>
        <Button
          as={'a'}
          display={{ base: 'none', md: 'inline-flex' }}
          fontSize={'sm'}
          fontWeight={600}
          color={'white'}
          bg={'#ff6700'}
          boxShadow="4px"
          _hover={{
            bg: 'orange.400',
          }}
        >
          Get App
        </Button>
      </Link>
    </>
  );

  return <>{body}</>;
};
