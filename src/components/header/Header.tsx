import { Box, Flex, Text } from '@chakra-ui/react';

const Header = () => {
  return (
    <Flex
      w={'100%'}
      bg={'transparent'}
      direction={'column'}
      justify={'center'}
      align={'center'}
      minH={'100vh'}
      boxSizing='border-box'
      gap={100}
    >
      <Flex w={'100%'}>
        <Text fontSize={70} fontWeight={700}>
          Developer based
        </Text>
      </Flex>
      <Flex w={'100%'} justify={'flex-end'} gap={10}>
        <Box
          w={200}
          h={200}
          bgImage={"url('/reactIcon.png')"}
          bgPosition='center'
          bgSize={'contain'}
        ></Box>
        <Box
          w={200}
          h={200}
          bgImage={"url('/typescriptIcon.png')"}
          bgPosition='center'
          bgSize={'contain'}
        ></Box>
      </Flex>
    </Flex>
  );
};
export default Header;
