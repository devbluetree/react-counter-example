import React from 'react';
import { useState } from 'react';

const App = ({ value, onIncrease, onDecrease }) => {
  return (
    <div>
      <h2>counter: {value}</h2>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
    </div>
  );
};

export default App;
