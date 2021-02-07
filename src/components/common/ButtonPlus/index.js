// Global
import React from 'react';
import PropTypes from 'prop-types'
// Assets
import Plus from 'assets/icons/plus';
// Stylesheet
import './index.scss';

function ButtonAdd({ onClick, dataTestId }) {

  return (
    <button 
      data-testid={dataTestId}
      className='btn-plus' 
      onClick={onClick}
    >
      <Plus />
    </button>
  );
}

ButtonAdd.propTypes = {
  onClickAdd: PropTypes.func,
}

export default ButtonAdd;
