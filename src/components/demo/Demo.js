// src/components/button/index.js

import React from 'react';
import PropTypes from 'prop-types';

const Demo = ({ text }) => <button className="demo">{text}</button>

Demo.propTypes = {
  text: PropTypes.any
};

export default Demo;
