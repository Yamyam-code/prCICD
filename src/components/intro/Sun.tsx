import { Box, keyframes } from '@chakra-ui/react';
import { HiSun } from 'react-icons/hi';

const rotate = keyframes`
  0%{
  opacity: 1;
  }

  90% {
  opacity: 1;
  }

  100% {
    transform: rotate(120deg);
    opacity: 0;
  }
`;

const Sun = () => {
  const move = `${rotate} 16s`;

  return (
    <Box
      position={'absolute'}
      top={'20vh'}
      w={'100vw'}
      h={'100vw'}
      borderRadius={'50vw'}
      animation={move}
      opacity={0}
    >
      <Box position={'absolute'} left={'10vw'} color={'#ffa44f'} fontSize={160}>
        <HiSun />
      </Box>
    </Box>
  );
};

export default Sun;
