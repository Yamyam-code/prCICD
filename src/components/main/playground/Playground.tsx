import { Box, keyframes } from '@chakra-ui/react';
import Stars from '../../star/Stars';

const rotate = keyframes`
    100% {
    transform: rotate(360deg);
  }
  `;

const Playground = () => {
  const move = `${rotate} infinite 20s`;

  return (
    <Box
      w={'100vw'}
      h={'100vh'}
      bg={'#150636'}
      // linear-gradient(to bottom, #000035, #000052dc)
      position={'fixed'}
      top={0}
      bottom={0}
      zIndex={-1}
    >
      <Box
        position={'absolute'}
        top={'-150vw'}
        left={'-150vw'}
        w={'300vw'}
        h={'300vw'}
        borderRadius={'300vw'}
        background={'linear-gradient(rgba(252,251,232,0.03) 10%, transparent)'}
        animation={move}
      />
      <Stars />
    </Box>
  );
};

export default Playground;
