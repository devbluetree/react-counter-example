import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increase, decrease } from './modules/counter';

const App = () => {
  const { counter } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>counter: {counter}</h2>
      <button onClick={() => dispatch(increase())}>+</button>
      <button onClick={() => dispatch(decrease())}>-</button>
    </div>
  );
};

export default App;
