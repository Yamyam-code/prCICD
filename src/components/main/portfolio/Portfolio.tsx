import { Box, Flex, Text } from '@chakra-ui/react';
import { PortfolioData } from '../../../../types';
import Stacks from './Stacks';

type PropsData = {
  data: PortfolioData;
};

const Portfolio = (data: PropsData) => {
  return (
    <Flex
      align={'center'}
      justify={'center'}
      height={'100vh'}
      color={'#444444'}
    >
      <a
        href={`${data.data.projectURL}`}
        target='_blank'
        style={{
          display: 'block',
          width: '1100px',
          backgroundColor: 'white',
          borderRadius: 20,
          padding: '50px',
        }}
      >
        <Flex w={'100%'} justify={'space-between'}>
          <Flex direction={'column'} justify={'space-between'} h={400}>
            <Text fontSize={40} fontWeight={700}>
              {data.data.projectName}
            </Text>
            <Box
              bg={'transparent'}
              backgroundImage={`url(${data.data.image})`}
              backgroundPosition='center'
              backgroundRepeat={'no-repeat'}
              backgroundSize={'500px 300px'}
              w={500}
              h={300}
              border={'1px solid #e2e2e2'}
              borderRadius={20}
            />
          </Flex>
          <Flex direction={'column'} h={400} flex={1}>
            <Flex gap={'20px'} w={'100%'} justify={'flex-end'}>
              <Text fontSize={16} fontWeight={600}>
                stack
              </Text>
              <Stacks icon={data.data.icon1} stackURL={data.data.icon1url} />
              <Stacks icon={data.data.icon2} stackURL={data.data.icon2url} />
            </Flex>
            <Flex
              direction={'column'}
              justify={'center'}
              align={'center'}
              flex={1}
            >
              <Flex direction={'column'} gap={5}>
                <Text fontSize={20} fontWeight={700}>
                  주요 구현
                </Text>
                <Text fontSize={30}>{data.data.text}</Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </a>
    </Flex>
  );
};

export default Portfolio;
