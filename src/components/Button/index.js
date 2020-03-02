import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ color, name, wide }) => {
  const buttonStyle = {
    backgroundColor: /^(÷|x|-|\+|=)$/.test(name) ? color : 'default',
    width: wide === false ? '25%' : '50%',
  };

  return (
    <button className="button" style={buttonStyle} type="button">
      {name}
    </button>
  );
};

Button.defaultProps = {
  color: 'orange',
  wide: false,
};

Button.propTypes = {
  color: PropTypes.string,
  name: PropTypes.string.isRequired,
  wide: PropTypes.bool,
};

export default Button;
