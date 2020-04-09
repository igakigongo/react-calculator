import './app.scss';
import React, { useState } from 'react';
import ButtonPanel from './button-panel';
import Display from './display';
import calculate from '../logic/calculate';

const App = () => {
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);
  const [total, setTotal] = useState(null);

  const handleClick = buttonName => {
    try {
      const {
        next: nextVal,
        operation: operationVal,
        total: totalVal,
      } = calculate({ total, next, operation }, buttonName);
      setNext(nextVal);
      setOperation(operationVal);
      setTotal(totalVal);
    } catch ({ message }) {
      setTotal(message);
      setTimeout(() => {
        setTotal('0');
      }, 2000);
    }
  };

  return (
    <>
      <main className="calculator">
        <Display result={total} />
        <ButtonPanel clickHandler={handleClick} />
      </main>
    </>
  );
};

export default App;
