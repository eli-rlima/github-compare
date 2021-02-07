// Global
import React from 'react';
import PropTypes from 'prop-types';
// Components
import ConditionalWrapper from 'components/common/ConditionalWrapper';
// Assets
import StarOIcon from 'assets/icons/star-o';
import StarIcon from 'assets/icons/star';

function ButtonFavorite({ onClick, value }) {
  return (
    <div>
      <ConditionalWrapper condition={value}>
        <StarIcon onClick={() => onClick(!value)}/>
      </ConditionalWrapper>
      <ConditionalWrapper condition={!value}>
        <StarOIcon onClick={() => onClick(!value)}/>
      </ConditionalWrapper>
    </div>
  );
}

ButtonFavorite.propTypes = {
  onClick: PropTypes.func,
  value: PropTypes.bool,
}

export default ButtonFavorite;
