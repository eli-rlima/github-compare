// Global
import React from 'react';
// Components
import ButtonAdd from 'components/common/ButtonAdd';
// Assets
import GitHubLogo from 'assets/logo/github_logo';
import StarIcon from 'assets/icons/star-o';
import Cards2Icon from 'assets/icons/cards2';
import AdjustIcon from 'assets/icons/adjust'
// Stylesheet
import './index.scss';

function Navbar() {

  return (
    <div className='nav'>
      <div className='nav_github-logo'>
        <GitHubLogo />
      </div>
      <div className='nav_title'>GitHub Compare</div>
      <div className='nav_filter'>Filter and order</div>
      <div className='nav_search'></div>
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
        <ButtonAdd />
      </div>
    </div>
  );
}

export default Navbar;
