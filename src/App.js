import React from 'react';
import { useState } from 'react';

const App = () => {
  // 1. useState Hook
  const [value, setValue] = useState(0);

  // 2. 이벤트 핸들러 함수 정의
  const handleIncrease = () => setValue((prev) => prev + 1);
  const handleDecrease = () => setValue((prev) => prev - 1);

  return (
    <div>
      <h2>counter: {value}</h2>
      <button onClick={() => handleIncrease()}>+</button>
      <button onClick={() => handleDecrease()}>-</button>
    </div>
  );
};

export default App;
