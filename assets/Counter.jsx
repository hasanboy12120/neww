import { Box, Button, Heading } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';

const Counter = ({ counterIndex }) => {
  const maxCount = 100000;
  const counterKey = `counter_${counterIndex}`;

  const [count, setCount] = useState(() => {
    const storedCount = localStorage.getItem(counterKey);
    return storedCount ? parseInt(storedCount, 10) : 0;
  });

  const increment = () => {
    setCount((prevCount) => {
        
      const newCount = prevCount < maxCount ? prevCount + 1 : prevCount;
      localStorage.setItem(counterKey, newCount.toString());
      return newCount;
    });
  };

  const decrement = () => {
    setCount((prevCount) => {
      const newCount = prevCount > 0 ? prevCount - prevCount : prevCount;
      localStorage.setItem(counterKey, newCount.toString());
      return newCount;
    });
  };

  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.setItem(counterKey, count.toString());
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [count, counterKey]);

  return (
    <Box ml={560}>
      <Heading fontFamily={"revert-layer"} color={"white"}>{counterIndex }</Heading>
      <br />
      <Heading fontFamily={"monospace"} color={"white"} >Savoblaringiz:{count}</Heading>
      <br />
      <Button color={"white"} ml={1} marginRight={10} bgGradient='linear(to-l, #7928CA, #FF0080)' onClick={increment} disabled={count >= maxCount}>
        BOSHLANG
      </Button>
      <Button color={"white"}  bgGradient='linear(to-l, #7928CA, #FF0080)' onClick={decrement} disabled={count <= 0}>
        BOSHIDAN BOSHLASH
      </Button>
    </Box>
  );
};

export default Counter;