import React from 'react';
import { useCounterContext } from './App';
import { getRandomColor } from './utils/getRandomColor';

const Message = () => {
  console.log('<Message/> renders');
  const { state } = useCounterContext();
  const textColorCode = getRandomColor();
  return <p style={{ color: textColorCode }}>{state.text}</p>;
};

export default Message;
