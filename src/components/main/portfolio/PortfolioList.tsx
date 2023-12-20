import { Flex } from '@chakra-ui/react';
import Portfolio from './Portfolio';
import data from '../../../utils/portfolioData';

const PortfolioList = () => {
  const portfolioData = data;

  return (
    <Flex w={'100%'} boxSizing='border-box' direction={'column'}>
      {[portfolioData.map((e) => <Portfolio data={e} key={e.projectName} />)]}
    </Flex>
  );
};

export default PortfolioList;
