import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { useColorMode, IconButton } from '@chakra-ui/react';

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div>
      {colorMode === 'dark' ? (
        <IconButton
          size="md"
          aria-label="toggle dark mode"
          onClick={toggleColorMode}
          icon={<SunIcon />}
        />
      ) : (
        <IconButton
          size="md"
          aria-label="toggle dark mode"
          onClick={toggleColorMode}
          icon={<MoonIcon />}
        />
      )}
    </div>
  );
};
