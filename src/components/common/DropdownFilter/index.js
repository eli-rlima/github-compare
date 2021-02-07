// Global
import React, { useState } from 'react';
import PropTypes from 'prop-types';
// Components
import ConditionalWrapper from 'components/common/ConditionalWrapper';
// Assets
import CaretBottomIcon from 'assets/icons/caret-bottom';
// Stylesheet
import './index.scss';

function DropdownFilter({ data, title, titleOptions, onClick }) {
  const [isOpened, setIsOpened] = useState(false)

  const onClickButton = name => {
    setIsOpened(false);
    onClick(name);
  };

  return (
    <div className='dropdown-filter'>
      <div className='dropdown-filter_title'>
        <button 
          className={isOpened ? 'dropdown-filter_title_button_active' : 'dropdown-filter_title_button'} 
          onClick={() => setIsOpened(!isOpened)}
        >
          <text>{title}</text>
          <CaretBottomIcon />
        </button>
      </div>
      <ConditionalWrapper condition={isOpened}>
        <div className='dropdown-filter_body'>
          <text className='dropdown-filter_body_title-options'>{titleOptions}</text>
          {data.map((item, index) => (
            <button key={index} onClick={() => onClickButton(item.key)}>
              <text>{item.name}</text>
            </button>
          ))}
        </div>
      </ConditionalWrapper>
    </div>
  );
}

DropdownFilter.propTypes = {
  data: PropTypes.instanceOf(Array),
  title: PropTypes.string,
  titleOptions: PropTypes.string,
  value: PropTypes.string,
  onClick: PropTypes.func,
}

export default DropdownFilter;
