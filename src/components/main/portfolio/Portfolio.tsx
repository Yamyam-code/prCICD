import { Box, Flex, Text } from '@chakra-ui/react';
import { PortfolioData } from '../../../../types';
import Stacks from './Stacks';

type PropsData = {
  data: PortfolioData;
};

const Portfolio = (data: PropsData) => {
  return (
    <Flex justify={'space-between'} align={'center'} height={'100vh'}>
      <Flex direction={'column'} justify={'space-between'} h={400}>
        <Text fontSize={40} fontWeight={700}>
          Project
        </Text>
        <Box
          bg={'transparent'}
          backgroundImage={`url(${data.data.image})`}
          backgroundPosition='center'
          backgroundRepeat={'no-repeat'}
          backgroundSize={'contain'}
          w={400}
          h={300}
          borderRadius={20}
        >
          <a
            href='https://github.com/Shimpyo-House/Shimpyo_FE'
            style={{ display: 'block', width: '100%', height: '100%' }}
            target='_blank'
          >
            <span style={{ visibility: 'hidden' }}>Go to GitHub</span>
          </a>
        </Box>
      </Flex>
      <Flex direction={'column'} h={400} flex={1}>
        <Flex gap={'20px'} w={'100%'} justify={'flex-end'}>
          <Stacks data={data.data.icon1} />
          <Stacks data={data.data.icon2} />
        </Flex>
        <Flex direction={'column'} justify={'center'} align={'center'} flex={1}>
          <Text fontSize={30}>{data.data.text}</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Portfolio;
