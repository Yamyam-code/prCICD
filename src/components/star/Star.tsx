import { Box, keyframes } from '@chakra-ui/react';
import { FaStarOfLife } from 'react-icons/fa6';

const twinkle = keyframes`
  0% {
  scale: 0;
  }

  50% {
  scale: 1;
  }

  100% {
  scale: 0;
  }
`;

const Star = () => {
  const widthRandom = Math.random() * 100;
  const heightRandom = Math.random() * 100;
  const twinkleRandom = 2 + Math.random();
  const sizeRandom = 5 + Math.random() * 5;
  const animation = `${twinkle} ${twinkleRandom}s infinite`;

  return (
    <Box
      position={'absolute'}
      top={`${heightRandom}vh`}
      left={`${widthRandom}vw`}
      fontSize={`${sizeRandom}`}
      zIndex={10}
      color={'#ffffffc3'}
      animation={animation}
    >
      <FaStarOfLife />
    </Box>
  );
};

export default Star;
