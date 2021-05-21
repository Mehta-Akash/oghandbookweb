import { IconButton } from "@chakra-ui/button";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Flex } from "@chakra-ui/layout";
import React from "react";

type HamburgerProps = {
    isOpen: boolean;
    onToggle: () => void
}

export const Hamburger: React.FC<HamburgerProps> = ({isOpen, onToggle}) => {
  return (
    <>
      <Flex
        //   flex={{ base: 1, md: 'auto' }}
        ml={{ base: 1 }}
        display={{ base: 'flex', md: 'none' }}
      >
        <IconButton
          onClick={onToggle}
          icon={
            isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
          }
          variant={'ghost'}
          aria-label={'Toggle Navigation'}
        />
      </Flex>
    </>
  );
};
