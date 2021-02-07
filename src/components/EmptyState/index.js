// Global
import React from 'react';
// Assests
import EmptyImage from 'assets/images/background_empty';
// Stylesheet
import './index.scss';

function EmptyState() {
  return (
    <div className='empty_state'>
      <div className='empty_state-image'>
        <EmptyImage />
      </div>
      <text className='empty_state-text_one'>There is still nothing here</text>
      <text className='empty_state-text_two'>Add some repositories by clicking add new repository</text>
    </div>
  );
}

export default EmptyState;
