import { Box } from '@chakra-ui/react';

type PropsType = {
  data: string;
};

const Stacks = (data: PropsType) => {
  return (
    <Box
      w={100}
      h={100}
      bgImage={data.data}
      backgroundRepeat={'no-repeat'}
      backgroundPosition={'center'}
      backgroundSize={'contain'}
      borderRadius={100}
    />
  );
};

export default Stacks;
