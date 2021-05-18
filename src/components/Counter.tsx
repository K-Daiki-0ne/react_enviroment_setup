import React, { useState } from 'react';

export const Counter = () => {
  const [count, setCount] = useState<number>(0);

  const addCount = (e: React.MouseEvent<HTMLElement>) => {
    setCount(c => c + 1);
  }

  return (
    <button onClick={addCount}>
      Count {count}
    </button>
  )
}