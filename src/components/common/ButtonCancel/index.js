// Global
import React from 'react';
import PropTypes from 'prop-types';
// Stylesheet
import './index.scss';

function ButtonCancel({ onClick }) {
  return (
    <button 
      className='btn-cancel'
      onClick={() => onClick()}
    >
      <text>Cancel</text>
    </button>
  );
}

ButtonCancel.propTypes = {
  onClick: PropTypes.func,
}

export default ButtonCancel;
