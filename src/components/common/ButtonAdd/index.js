// Global
import React from 'react';
import PropTypes from 'prop-types';
// Stylesheet
import './index.scss';

function ButtonAdd({ onClick, disabled, dataTestId }) {
  return (
    <button
      data-testid={dataTestId}
      className={!disabled ? 'btn-add' : 'btn-add_disabled'}
      onClick={!disabled ? onClick : () => {}}
    >
      <text>Add</text>
    </button>
  );
}

ButtonAdd.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
}

export default ButtonAdd;
