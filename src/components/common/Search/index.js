// Global
import React from 'react';
import PropTypes from 'prop-types';
// Components
import Input from 'components/common/Input';
// Assets
import SearchIcon from 'assets/icons/search';
// Stylesheet
import './index.scss';

function Search({ value, onChange, style, placeholder, error }) {
  return (
    <div className='search'>
      <Input 
          value={value}
          onChange={onChange}
          style={style}
          placeholder={placeholder}
          error={error}
      />
      <div className='search_icon'>
        <SearchIcon />
      </div>
    </div>
  );
}

Search.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
  error: PropTypes.bool,
  style: PropTypes.instanceOf(Object),
  placeholder: PropTypes.string,
}

export default Search;
