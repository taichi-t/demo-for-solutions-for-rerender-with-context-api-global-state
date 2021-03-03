import React from 'react';
// import CounterWithMemo from './CounterWithMemo';
import Counter from './Counter';
import Message from './Message';
import MessageWithMemo from './MessageWithMemo';

const initialState = {
  count: 0,
  text: '😅 ＜ Once rerender, I get a different colour..',
};

const increment = async () => {
  return {
    type: 'INCREMENT',
  };
};
const decrement = async () => {
  return {
    type: 'DECREMENT',
  };
};

const counterReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    default:
      throw new Error();
  }
};

const CounterContext = React.createContext(initialState);

const useCounterContext = () => React.useContext(CounterContext);

const CounterProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(counterReducer, initialState);

  // const value = React.useMemo(
  //   () => ({
  //     count,
  //     text,
  //     dispatch,
  //   }),
  //   [count, text]
  // );

  const value = {
    state,
    dispatch,
  };

  return (
    <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
  );
};

const App = () => {
  const [, renderComponent] = React.useState(null);
  console.log('<App/> renders');
  return (
    <CounterProvider>
      <button onClick={() => renderComponent({})}>Render App</button>
      <Message />
      <MessageWithMemo />
      {/* <CounterWithMemo /> */}
      <Counter />
    </CounterProvider>
  );
};

export default App;
export { useCounterContext, increment, decrement };
