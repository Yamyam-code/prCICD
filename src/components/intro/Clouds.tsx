import { Box } from '@chakra-ui/react';
import LeftCloud from './LeftCloud';
import RightCloud from './RightCloud';

const Clouds = () => {
  const where = [
    {
      top: '15vh',
      left: '7vw',
      fontSize: 200,
    },
    {
      top: '12vh',
      left: '23vw',
      fontSize: 50,
    },
    {
      top: '13.5vh',
      left: '34vw',
      fontSize: 150,
    },
  ];

  return (
    <Box position={'absolute'} top={0} left={0} w={'100vw'} h={'100vh'}>
      {where.map((e) => (
        <LeftCloud data={e} key={`left ${e.left}`} />
      ))}
      {where.map((e) => (
        <RightCloud data={e} key={`Right ${e.left}`} />
      ))}
    </Box>
  );
};

export default Clouds;
