import React from 'react';
import ComponentWithMemo from './ComponentWithMemo';
import Component from './Component';

const initialState = {
  count: 0,
};

const counterReducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
};

const CounterContext = React.createContext(initialState);

const useCounterContext = () => React.useContext(CounterContext);

const CounterProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(counterReducer, initialState);

  const value = React.useMemo(
    () => ({
      state,
      dispatch,
    }),
    [state]
  );

  // const value = {
  //   state,
  //   dispatch,
  // };

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
      <ComponentWithMemo />
      {/* <Component /> */}
    </CounterProvider>
  );
};

export default App;
export { useCounterContext };
