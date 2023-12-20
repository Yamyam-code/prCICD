import { Flex, Text } from '@chakra-ui/react';

const Footer = () => {
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
          Thanks For Watching!
        </Text>
      </Flex>
      <Flex
        w={'100%'}
        direction={'column'}
        align={'flex-end'}
        justify={'center'}
        gap={1}
      >
        <Flex w={'35%'}>
          <Text fontSize={30}>Contact</Text>
        </Flex>
        <Text fontSize={50}>rnffjt@gmail.com</Text>
      </Flex>
    </Flex>
  );
};
export default Footer;
