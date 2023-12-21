import { Box, Flex, Text, keyframes } from '@chakra-ui/react';

const Developer = () => {
  const show = keyframes`
    0% {
    opacity: 0;
    }

    30%{
    opacity: 1;
    }


    80%{
    opacity: 1;
    }

    100%{
    opacity: 0;
    }
  `;

  const word = keyframes`
    0% {
    opacity: 0;
    }

    50%{
    opacity: 0;
    }


    60%{
    opacity: 1;
    }

    80%{
    opacity: 1;
    }
    90%{
    opacity: 0;
    }
  `;

  const dev = keyframes`
    0%{
      bottom: -300px;
    }
    10%{
      bottom: -300px;
    }
    40%{
      bottom: 0px;
    }
    70%{
      bottom: 0px;
    }
    100%{
      bottom: -300px;
    }
  
  `;

  return (
    <Flex
      justify={'center'}
      align={'flex-end'}
      position={'absolute'}
      w={'100vw'}
      h={'100vh'}
      color={'white'}
    >
      <Flex
        w={1000}
        h={'90vh'}
        direction={'column'}
        justify={'center'}
        align={'center'}
        boxSizing='border-box'
        gap={100}
      >
        <Text
          fontSize={80}
          fontWeight={700}
          position={'absolute'}
          top={'48vh'}
          opacity={0}
          animation={`${word} 14.5s`}
        >
          Let's take a look at the projects
        </Text>
        <Box
          bg={'transparent'}
          backgroundImage={'url("/icons/yamyamssi.png")'}
          backgroundPosition={'center'}
          backgroundSize={'300px 300px'}
          w={300}
          h={300}
          position={'absolute'}
          bottom={-300}
          animation={`${dev} 8s`}
          zIndex={10}
        />
        <Flex
          w={'100%'}
          direction={'column'}
          justify={'center'}
          align={'center'}
          animation={`${show} 6s`}
          opacity={0}
          fontSize={105}
          fontWeight={700}
          gap={20}
          color={'#fff'}
        >
          <Text>Developed By</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Developer;
