import React from 'react';
import { useCounterContext } from './App';

const CounterWithMemo = React.memo(() => {
  console.log('<CounterWithMemo/> renders');
  const { count, dispatch } = useCounterContext();
  return (
    <>
      <div>The count is {count} </div>
      <button onClick={() => dispatch({ type: 'increment' })}>increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>decrement</button>
    </>
  );
});

export default CounterWithMemo;
