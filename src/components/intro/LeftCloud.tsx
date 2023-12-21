import { Box, keyframes } from '@chakra-ui/react';
import { ImCloud } from 'react-icons/im';

type PropsData = {
  data: {
    top: string;
    left: string;
    fontSize: number;
  };
};

const LeftCloud = (data: PropsData) => {
  const move = keyframes`
    0% {
      left: ${data.data.left}
    }
    50% {
      left: ${data.data.left}
    }
    100% {
      left: -30vw
    }
  `;

  const moving = `${move} 15s`;

  return (
    <Box
      position={'absolute'}
      top={data.data.top}
      left={'-15vw'}
      fontSize={data.data.fontSize}
      color={'#dbf1ff'}
      zIndex={10}
      animation={moving}
    >
      <ImCloud />
    </Box>
  );
};

export default LeftCloud;
