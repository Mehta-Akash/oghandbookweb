import { useDisclosure } from '@chakra-ui/react';
import React from 'react';

import { DrawerNavBar } from './HeaderComponents/DrawerNavBar';
import { TopNavBar } from './HeaderComponents/TopNavBar';

export function Header() {
  const { isOpen, onToggle, onClose } = useDisclosure();

  return (
    <>
      <TopNavBar isOpen={isOpen} onToggle={onToggle} loggedIn={true} />
      <DrawerNavBar onClose={onClose} isOpen={isOpen} />
    </>
  );
}
