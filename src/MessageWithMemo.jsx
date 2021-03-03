import React from 'react';
import { useCounterContext } from './App';
import { getRandomColor } from './utils/getRandomColor';

const MessageWithMemo = React.memo(() => {
  console.log('<MessageWithMemo/> renders');
  const { text } = useCounterContext();
  const textColorCode = getRandomColor();
  return <p style={{ color: textColorCode }}>{text}</p>;
});

export default MessageWithMemo;
