// Global
import React from 'react';
import PropTypes from 'prop-types';
// Components
import ButtonPlus from 'components/common/ButtonPlus';
import Search from 'components/common/Search';
// Assets
import GitHubLogo from 'assets/logo/github_logo';
import StarIcon from 'assets/icons/star-o';
import Cards2Icon from 'assets/icons/cards2';
import AdjustIcon from 'assets/icons/adjust'
// Stylesheet
import './index.scss';

function Navbar({ onClick, onChange, value }) {

  return (
    <div className='nav'>
      <div className='nav_github-logo'>
        <GitHubLogo />
      </div>
      <div className='nav_title'>GitHub Compare</div>
      <div className='nav_filter'>Filter and order</div>
      <Search 
        style={{ width: 519 }}
        placeholder="Search"
        onChange={onChange}
        value={value}
      />
      <div className='nav_star-o'>
        <StarIcon />
      </div>
      <div className='nav_adjust'>
        <AdjustIcon />
      </div>
      <div className='nav_cards2'>
        <Cards2Icon />
      </div>
      <div className='nav_button-add'>
        <ButtonPlus onClick={onClick} />
      </div>
    </div>
  );
}

Navbar.propTypes = {
  onClick: PropTypes.func,
  onChange: PropTypes.func,
  value: PropTypes.string,
}

export default Navbar;
