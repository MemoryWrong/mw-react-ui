// src/components/button/index.js

import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text }) => <button className="btn">{text}</button>

Button.propTypes = {
  text: PropTypes.any
};

export default Button;
