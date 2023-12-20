import { Box } from '@chakra-ui/react';

type PropsType = {
  icon: string;
  stackURL: string;
};

const Stacks = (data: PropsType) => {
  return (
    <Box
      w={100}
      h={100}
      bgImage={data.icon}
      backgroundRepeat={'no-repeat'}
      backgroundPosition={'center'}
      backgroundSize={'contain'}
      border={'2px solid #e2e2e2'}
      borderRadius={100}
      transition={'.3s all'}
      _hover={{
        backgroundColor: '#e2e2e2',
      }}
    >
      <a
        href={`${data.stackURL}`}
        target='_blank'
        style={{ display: 'block', width: '100%', height: '100%', opacity: 0 }}
      >
        link
      </a>
    </Box>
  );
};

export default Stacks;
