import { Box, Flex } from '@chakra-ui/react';
import PortfolioList from './portfolio/PortfolioList';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { useEffect, useRef, useState } from 'react';

const Main = () => {
  const outerDivRef = useRef<HTMLDivElement | null>(null);
  const [scrollIndex, setScrollIndex] = useState<number>(1);

  useEffect(() => {
    const handleScroll = (e: WheelEvent) => {
      e.preventDefault();

      const { deltaY } = e;
      const { scrollTop } = outerDivRef.current!;
      const pageHeight = window.innerHeight;

      if (deltaY === 0) {
        return;
      }

      if (deltaY > 0) {
        // 스크롤 다운
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          console.log('현재 1페이지, down');
          window.scrollTo({ top: pageHeight, behavior: 'smooth' });
          setScrollIndex(2);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          console.log('현재 2페이지, down');
          window.scrollTo({ top: pageHeight * 2, behavior: 'smooth' });
          setScrollIndex(3);
        } else {
          console.log('현재 3페이지, down');
          window.scrollTo({ top: pageHeight * 2, behavior: 'smooth' });
          setScrollIndex(3);
        }
      } else {
        // 스크롤 업
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          console.log('현재 1페이지, up');
          window.scrollTo({ top: 0, behavior: 'smooth' });
          setScrollIndex(1);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 1.5) {
          console.log('현재 2페이지, up');
          window.scrollTo({ top: 0, behavior: 'smooth' });
          setScrollIndex(1);
        } else {
          console.log('현재 3페이지, up');
          window.scrollTo({ top: pageHeight, behavior: 'smooth' });
          setScrollIndex(2);
        }
      }
    };

    const outerDivRefCurrent = outerDivRef.current;
    if (outerDivRefCurrent) {
      outerDivRefCurrent.addEventListener('wheel', handleScroll);
    }

    return () => {
      if (outerDivRefCurrent) {
        outerDivRefCurrent.removeEventListener('wheel', handleScroll);
      }
    };
  }, [outerDivRef]);
  return (
    <Flex ref={outerDivRef} w={'100vw'} justify={'center'}>
      <Box w={1100} color={'white'}>
        <Header />
        <PortfolioList />
        <Footer />
      </Box>
    </Flex>
  );
};
export default Main;
