import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ name }) => (
  // eslint-disable-next-line jsx-a11y/control-has-associated-label
  <button type="button">
    {name}
  </button>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Button;
