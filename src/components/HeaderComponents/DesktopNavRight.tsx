import { Button } from '@chakra-ui/button';
import React from 'react';
// import { useMeQuery, useLogoutMutation } from '../../generated/graphql';
// import { useApolloClient } from '@apollo/client';

type DesktopNavRightProps = {
  onOpen: () => void;
};

export const DesktopNavRight: React.FC<DesktopNavRightProps> = ({ onOpen }) => {
  let body = (
    <>
      <Button
        display={{ base: 'none', md: 'flex' }}
        as={'a'}
        onClick={onOpen}
        fontSize={'md'}
        fontWeight={600}
        variant={'link'}
        href={'/privacy_policy'}
      >
        Privacy policy
      </Button>
      <Button
        as={'a'}
        display={{ base: 'none', md: 'inline-flex' }}
        fontSize={'sm'}
        fontWeight={600}
        color={'white'}
        bg={'#ff6700'}
        boxShadow="4px"
        href={'/products'}
        _hover={{
          bg: 'orange.400',
        }}
      >
        Get App
      </Button>
    </>
  );

  return <>{body}</>;
};
