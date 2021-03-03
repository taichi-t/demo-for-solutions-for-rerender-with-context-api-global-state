import React from 'react';
import { useCounterContext, increment, decrement } from './App';

const Counter = () => {
  console.log('<Counter/> renders');
  const { state, dispatch } = useCounterContext();
  return (
    <>
      <div>The count is {state.count} </div>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
    </>
  );
};

export default Counter;
