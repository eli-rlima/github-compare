// Global
import React from 'react';
import PropTypes from 'prop-types';
// Stylesheet
import './index.scss';

function ButtonDelete({ onClick }) {
  return (
    <button 
      className='btn-delete'
      onClick={() => onClick()}
    >
      <text>Delete</text>
    </button>
  );
}

ButtonDelete.propTypes = {
  onClick: PropTypes.func,
}

export default ButtonDelete;
