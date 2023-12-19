import { Box, Flex } from '@chakra-ui/react';
import { PortfolioData } from '../../../../types';

type PropsData = {
  data: PortfolioData;
};

const Portfolio = (data: PropsData) => {
  return (
    <Flex justify={'space-between'} align={'center'} height={'100vh'}>
      <Box
        bg={data.data.BlogImg}
        // backgroundImage="url('/images/kyuubi.png')"
        // backgroundPosition='center'
        // backgroundRepeat='no-repeat'
        w={200}
        h={200}
      />
      <Flex gap={'20px'}>
        <Box bg={data.data.BlogImg} w={200} h={200} />
        <Box bg={data.data.BlogImg} w={200} h={200} />
      </Flex>
    </Flex>
  );
};

export default Portfolio;
