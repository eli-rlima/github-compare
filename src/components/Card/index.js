// Global
import React from 'react';
import PropTypes from 'prop-types';
// Assets
import StarIcon from 'assets/icons/star-o';
import TrashIcon from 'assets/icons/trash';
// Stylesheet
import './index.scss';

function Card({ name, startsCount, forksCount, openIssues, age, lastCommit, license, language, urlAvatar }) {
  return (
    <div className='card'>
      <div className='card_header'>
        <img src='https://avatars.githubusercontent.com/u/131436?v=4' alt='' />
        <text>{name}</text>
        <div className='card_header_star-icon'>
          <StarIcon />
        </div>
        <div className='card_header_trash-icon'>
          <TrashIcon />
        </div>
      </div>
      <div className='card_body'>
        <div className='card_body_params'>
          <text>Stars </text>
          <span>{startsCount}</span>
        </div>
        <div className='card_body_params'>
          <text>Forks </text>
          <span>{forksCount}</span>
        </div>
        <div className='card_body_params'>
          <text>Open Issues </text>
          <span>{openIssues}</span>
        </div>
        <div className='card_body_params'>
          <text>Age </text>
          <span>{age}</span>
        </div>
        <div className='card_body_params'>
          <text>Last commit </text>
          <span>{lastCommit}</span>
        </div>
        <div className='card_body_params'>
          <text>License </text>
          <span>{license}</span>
        </div>
        <div className='card_body_language'>
          <text>{language}</text>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string,
  startsCount: PropTypes.number,
  forksCount: PropTypes.number,
  openIssues: PropTypes.number,
  age: PropTypes.string,
  lastCommit: PropTypes.string,
  license: PropTypes.string,
  language: PropTypes.string,
  urlAvatar: PropTypes.string,
}

export default Card;
