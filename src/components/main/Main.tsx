import { Box, Flex } from '@chakra-ui/react';
import PortfolioList from './portfolio/PortfolioList';
import StacksList from './stacks/StacksList';

const Main = () => {
  return (
    <Box flex={1} p={'100px 0'}>
      <Flex direction={'column'} gap={'100px'}>
        <PortfolioList />
        <StacksList />
      </Flex>
    </Box>
  );
};
export default Main;
