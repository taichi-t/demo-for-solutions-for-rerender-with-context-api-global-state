import React from 'react';
import { useCounterContext } from './App';

const Component = () => {
  console.log('<Counter/> renders');
  const { state, dispatch } = useCounterContext();
  return (
    <>
      <div>The count is {state.count} </div>
      <button onClick={() => dispatch({ type: 'increment' })}>increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>decrement</button>
    </>
  );
};

export default Component;
