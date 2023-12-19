import { Box, Flex } from '@chakra-ui/react';
import Header from './header/Header';
import Main from './main/Main';
import Playground from './main/playground/Playground';

const Product = () => {
  return (
    <>
      <Playground />
      <Flex
        direction={'column'}
        justify={'flex-start'}
        align={'center'}
        w={'100vw'}
        height={'100vh'}
        bg={'transparent'}
      >
        <Box w={1000}>
          <Header />
          <Main />
        </Box>
      </Flex>
    </>
  );
};

export default Product;
