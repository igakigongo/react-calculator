import React from 'react';
import Button from '../Button';

const ButtonPanel = () => {
  const keys = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
  return (
    <div>
      {keys.map(value => (<Button key={value} name={value} />))}
    </div>
  );
};

export default ButtonPanel;