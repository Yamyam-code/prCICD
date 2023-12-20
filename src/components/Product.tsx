import { Box, Flex } from '@chakra-ui/react';
import Main from './main/Main';
import Playground from './main/playground/Playground';

const Product = () => {
  return (
    <Box minW={1100}>
      <Playground />
      <Flex
        direction={'column'}
        justify={'flex-start'}
        align={'center'}
        w={'100vw'}
        height={'100vh'}
        bg={'transparent'}
      >
        <Main />
      </Flex>
    </Box>
  );
};

export default Product;
