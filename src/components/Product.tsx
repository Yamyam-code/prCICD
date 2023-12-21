import { Box, Flex } from '@chakra-ui/react';
import Main from './main/Main';
import Playground from './main/playground/Playground';
import Intro from './intro/Intro';
import { useEffect, useState } from 'react';

const Product = () => {
  const [isIntro, setIsIntro] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsIntro(false);
    }, 13000);
  }, []);

  return (
    <>
      {isIntro ? (
        <Intro />
      ) : (
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
      )}
    </>
  );
};

export default Product;
