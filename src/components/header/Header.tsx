import { Flex, Text } from '@chakra-ui/react';

const Header = () => {
  return (
    <Flex
      w={'100vw'}
      shadow={'base'}
      bg={'transparent'}
      justify={'center'}
      align={'center'}
      minH={'70px'}
      boxSizing='border-box'
    >
      <Text>헤더</Text>
    </Flex>
  );
};
export default Header;
