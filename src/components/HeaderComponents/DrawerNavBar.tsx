import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from '@chakra-ui/modal';
import React from 'react';
import { MobileNav } from './MobileNav';

type DrawerNavBar = {
  onClose: () => void;
  isOpen: boolean;
};

export const DrawerNavBar: React.FC<DrawerNavBar> = ({ isOpen, onClose }) => {
  return (
    <>
      <Drawer placement="left" onClose={onClose} isOpen={isOpen} size={'sm'}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader> </DrawerHeader>
            <DrawerBody>
              <MobileNav />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};
