import {
  Box,
  Flex,
  Stack,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import { DarkModeSwitch } from './DarkModeSwitch';
import { DesktopNav } from './DesktopNav';
import { DesktopNavRight } from './DesktopNavRight';
import { Hamburger } from './Hamburger';
// import { LoginModal } from './LoginModal';
import { Logo } from './Logo';

type TopNavBarProps = {
  isOpen: boolean;
  onToggle: () => void;
  loggedIn: boolean;
};

export const TopNavBar: React.FC<TopNavBarProps> = ({
  isOpen,
  onToggle,
  loggedIn,
}) => {
  const { isOpen: isOpenM, onOpen, onClose: onCloseM } = useDisclosure();

  return (
    <>
      <Box width="100%" position="fixed" zIndex="1">
        <Flex
          bg={useColorModeValue('white', 'gray.900')}
          color={useColorModeValue('gray.600', 'white')}
          minH={'80px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.900')}
          align={'center'}
        >
          <Flex flex={{ base: 1 }} justify={{ base: 'start', md: 'start' }}>
            <Logo isLoggedIn={loggedIn} />
            <Flex
              display={{ base: 'none', md: 'flex' }}
              alignItems="center"
              ml={10}
            >
              {loggedIn ? null : <DesktopNav />}
            </Flex>
          </Flex>

          <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}
          >
            <DesktopNavRight onOpen={onOpen} />
            <DarkModeSwitch />
          </Stack>

          {/* <LoginModal isOpenM={isOpenM} onCloseM={onCloseM} /> */}
          <Hamburger isOpen={isOpen} onToggle={onToggle} />
        </Flex>

        {/* <Collapse in={isOpen} animateOpacity={true}>
          <MobileNav />
        </Collapse> */}
      </Box>
    </>
  );
};
