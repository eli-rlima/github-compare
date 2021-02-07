// Global
import React from 'react';
import PropTypes from 'prop-types';
// Components
import ConditionalWrapper from 'components/common/ConditionalWrapper';
// Assets
import ExclamationFullIcon from 'assets/icons/exclamation-full';
// Stylesheet
import './index.scss';

function ErrorLabel({ text, error }) {
  return (
    <ConditionalWrapper condition={error}>
      <div className='error-label'>
        <ExclamationFullIcon />
        <text>{text}</text>
      </div>
    </ConditionalWrapper>
  );
}

ErrorLabel.propTypes = {
  text: PropTypes.string,
  error: PropTypes.bool,
}

export default ErrorLabel;
