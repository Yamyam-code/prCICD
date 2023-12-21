const Dot = ({ num, scrollIndex }: { num: number; scrollIndex: number }) => {
  return (
    <div
      style={{
        width: 17,
        height: 17,
        border: '1px solid #fff',
        borderRadius: 999,
        backgroundColor: '#fff',
        transform: `scale(${scrollIndex == num ? 1 : 0.6})`,
        transition: 'all 0.5s',
      }}
    ></div>
  );
};

const Dots = ({ scrollIndex }: { scrollIndex: number }) => {
  return (
    <div
      style={{
        position: 'fixed',
        zIndex: '3',
        bottom: 50,
        right: '50%',
        transform: 'translateX(50%)',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: 160,
          height: 20,
        }}
      >
        <Dot num={1} scrollIndex={scrollIndex}></Dot>
        <Dot num={2} scrollIndex={scrollIndex}></Dot>
        <Dot num={3} scrollIndex={scrollIndex}></Dot>
        <Dot num={4} scrollIndex={scrollIndex}></Dot>
        <Dot num={5} scrollIndex={scrollIndex}></Dot>
      </div>
    </div>
  );
};

export default Dots;
