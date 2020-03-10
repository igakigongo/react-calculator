import React from 'react';
import PropTypes from 'prop-types';
import Button from './button';

const ButtonPanel = ({ clickHandler }) => {
  const keys = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
  return (
    <div>
      {keys.map(value => (<Button clickHandler={clickHandler} key={value} name={value} wide={value === '0'} />))}
    </div>
  );
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
