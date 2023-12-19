import { Flex } from '@chakra-ui/react';
import Portfolio from './Portfolio';

const PortfolioList = () => {
  const portfoliodata = [
    {
      BlogImg: 'red',
      StackImg1: 'red',
      StackImg2: 'red',
    },
    {
      BlogImg: 'red',
      StackImg1: 'red',
      StackImg2: 'red',
    },
    {
      BlogImg: 'red',
      StackImg1: 'red',
      StackImg2: 'red',
    },
    {
      BlogImg: 'red',
      StackImg1: 'red',
      StackImg2: 'red',
    },
  ];

  return (
    <Flex w={'100%'} boxSizing='border-box' direction={'column'} gap={'50px'}>
      {[portfoliodata.map((e) => <Portfolio data={e} />)]}
    </Flex>
  );
};

export default PortfolioList;
