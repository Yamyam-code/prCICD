import { Box, Flex, Text, keyframes } from '@chakra-ui/react';

const Header = () => {
  const show = keyframes`
    0% {
    opacity: 0;
    }
    50% {
    opacity: 0;
    }

    100% {
    opacity: 1;
    }
  `;

  return (
    <Flex
      w={'100%'}
      direction={'column'}
      justify={'center'}
      align={'center'}
      minH={'100vh'}
      boxSizing='border-box'
      gap={100}
    >
      <Flex w={'100%'} animation={`${show} 2s`}>
        <Text fontSize={70} fontWeight={700}>
          Projects based
        </Text>
      </Flex>
      <Flex w={'100%'} justify={'flex-end'} gap={10} animation={`${show} 3.5s`}>
        <Box
          w={200}
          h={200}
          bgImage={"url('/icons/reactIcon.png')"}
          bgPosition='center'
          bgSize={'contain'}
        ></Box>
        <Box
          w={200}
          h={200}
          bgImage={"url('/icons/typescriptIcon.png')"}
          bgPosition='center'
          bgSize={'contain'}
        ></Box>
      </Flex>
    </Flex>
  );
};
export default Header;
