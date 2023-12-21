import { Box, keyframes } from '@chakra-ui/react';
import { ImCloud } from 'react-icons/im';

type PropsData = {
  data: {
    top: string;
    left: string;
    fontSize: number;
  };
};

const RightCloud = (data: PropsData) => {
  const move = keyframes`
    0% {
      right: ${data.data.left}
    }
    50% {
      right: ${data.data.left}
    }
    100% {
      right: -30vw
    }
  `;

  const moving = `${move} 15s`;

  return (
    <Box
      position={'absolute'}
      top={data.data.top}
      right={'-15vw'}
      fontSize={data.data.fontSize}
      color={'#dbf1ff'}
      zIndex={10}
      animation={moving}
    >
      <ImCloud />
    </Box>
  );
};

export default RightCloud;
