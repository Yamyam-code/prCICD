import { Box, Flex } from '@chakra-ui/react';

const PortfolioList = () => {
  return (
    <Flex
      w={'750px'}
      boxSizing='border-box'
      flexWrap={'wrap'}
      direction={'row'}
      gap={'50px'}
    >
      <Box bg={'red'} w={'350px'} h={'350px'} rounded={'md'} />
      <Box bg={'blue'} w={'350px'} h={'350px'} rounded={'md'} />
      <Box bg={'yellow'} w={'350px'} h={'350px'} rounded={'md'} />
      <Box bg={'green'} w={'350px'} h={'350px'} rounded={'md'} />
    </Flex>
  );
};

export default PortfolioList;
