// Global
import React from 'react';
import PropTypes from 'prop-types';
// Stylesheet
import './index.scss';

function Input({ value, onChange, style, placeholder, error }) {
  return (
    <input
      className={!error ? 'input' : 'input-error'}
      style={style}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}

Input.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
  error: PropTypes.bool,
  style: PropTypes.instanceOf(Object),
  placeholder: PropTypes.string,
}

export default Input;
