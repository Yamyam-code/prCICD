import { Box, Flex } from '@chakra-ui/react';
import PortfolioList from './portfolio/PortfolioList';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { useEffect, useRef, useState } from 'react';
import Dots from './dots/Dots';

const Main = () => {
  const outerDivRef = useRef<HTMLDivElement | null>(null);
  const [scrollIndex, setScrollIndex] = useState<number>(1);

  useEffect(() => {
    const handleScroll = (e: WheelEvent) => {
      e.preventDefault();

      const { deltaY } = e;
      const scrollTop = window.scrollY;
      const pageHeight = window.innerHeight;

      console.log(scrollIndex);

      if (deltaY === 0) {
        return;
      }

      if (deltaY > 0) {
        // 스크롤 다운
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          window.scrollTo({ top: pageHeight, behavior: 'smooth' });
          setScrollIndex(2);
        } else if (scrollTop < pageHeight * 2) {
          window.scrollTo({ top: pageHeight * 2, behavior: 'smooth' });
          setScrollIndex(3);
        } else if (scrollTop < pageHeight * 3) {
          window.scrollTo({ top: pageHeight * 3, behavior: 'smooth' });
          setScrollIndex(4);
        } else if (scrollTop < pageHeight * 4) {
          window.scrollTo({ top: pageHeight * 4, behavior: 'smooth' });
          setScrollIndex(5);
        }
      } else {
        // 스크롤 업
        if (scrollTop >= 0 && scrollTop <= pageHeight) {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          setScrollIndex(1);
        } else if (scrollTop <= pageHeight * 2) {
          window.scrollTo({ top: pageHeight, behavior: 'smooth' });
          setScrollIndex(2);
        } else if (scrollTop <= pageHeight * 3) {
          window.scrollTo({ top: pageHeight * 2, behavior: 'smooth' });
          setScrollIndex(3);
        } else if (scrollTop <= pageHeight * 4.1) {
          window.scrollTo({ top: pageHeight * 3, behavior: 'smooth' });
          setScrollIndex(4);
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
  }, []);
  return (
    <Flex ref={outerDivRef} w={'100vw'} justify={'center'}>
      <Box w={1100} color={'white'}>
        <Header />
        <PortfolioList />
        <Footer />
      </Box>
      <Dots scrollIndex={scrollIndex} />
    </Flex>
  );
};
export default Main;
