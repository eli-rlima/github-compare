// Global
import React from 'react';
import PropTyes from 'prop-types';

function times({ onClick }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" onClick={onClick}>
      <path className="lexicon-icon-outline" fill="#B95000" d="M300.4,256L467,89.4c29.6-29.6-14.8-74.1-44.4-44.4L256,211.6L89.4,45C59.8,15.3,15.3,59.8,45,89.4L211.6,256L45,422.6 c-29.7,29.7,14.7,74.1,44.4,44.4L256,300.4L422.6,467c29.7,29.7,74.1-14.7,44.4-44.4L300.4,256z"/>
    </svg>
  );
}

times.propTypes = {
  onClick: PropTyes.func,
}

export default times;
