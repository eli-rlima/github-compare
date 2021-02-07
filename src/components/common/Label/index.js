// Global
import React from 'react';
import PropTypes from 'prop-types';
// Stylesheet
import './index.scss';

function Label({ text, obligatory }) {
  return (
    <div className='label'>
      <text>{text}</text>
      {obligatory && <span>*</span>}
    </div>
  );
}

Label.propTypes = {
  text: PropTypes.string,
  obligatory: PropTypes.bool,
}

export default Label;
