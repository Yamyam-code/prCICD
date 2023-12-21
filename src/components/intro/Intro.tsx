import { Box, keyframes } from '@chakra-ui/react';
import Sun from './Sun';
import Clouds from './Clouds';
import Developer from './Developer';

const changeSky = keyframes`
  0% {
    background-color: #9bd1eb
  }

  50% {
    background-color: #9bd1eb
  }

  80% {
    background-color: #3e2baa
  }
  
  80% {
    background-color: #180d58
  }

  100% {
    background-color: #150636
  }
`;

const Intro = () => {
  const fallin = `${changeSky} 14s`;

  return (
    <Box
      w={'100vw'}
      h={'100vh'}
      position={'fixed'}
      top={0}
      left={0}
      bg={'#150636'}
      animation={fallin}
    >
      <Sun />
      <Clouds />
      <Developer />
    </Box>
  );
};

export default Intro;
