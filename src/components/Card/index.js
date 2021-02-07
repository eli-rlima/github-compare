// Global
import React from 'react';
import PropTypes from 'prop-types';
import { formatDistanceStrict } from 'date-fns'
// Components
import ButtonFavorite from 'components/common/ButtonFavorite';
// Assets
import TrashIcon from 'assets/icons/trash';
// Stylesheet
import './index.scss';

function Card({ favorite, onClickFavorite, onClickRemove, name, startsCount, forksCount, openIssues, age, lastCommit, license, language, urlAvatar }) {
  return (
    <div className='card'>
      <div className='card_header'>
        <img src={urlAvatar} alt='' />
        <text>{name}</text>
        <div className='card_header_star-icon'>
          <ButtonFavorite onClick={onClickFavorite} value={favorite}/>
        </div>
        <div className='card_header_trash-icon'>
          <TrashIcon onClick={onClickRemove}/>
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
          <span>{formatDistanceStrict(new Date(age), new Date())} ago</span>
        </div>
        <div className='card_body_params'>
          <text>Last commit </text>
          <span>{formatDistanceStrict(new Date(lastCommit), new Date())} ago</span>
        </div>
        <div className='card_body_params'>
          <text>License </text>
          <span>
            { license ? license.spdx_id === "NOASSERTION" ? "N/A" : license.name : "No License" }
          </span>
        </div>
        <div className='card_body_language'>
          <text>{language || "No Language defined"}</text>
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
  license: PropTypes.instanceOf(Object),
  language: PropTypes.string,
  urlAvatar: PropTypes.string,
  favorite: PropTypes.bool,
  onClickFavorite: PropTypes.func,
}

export default Card;
