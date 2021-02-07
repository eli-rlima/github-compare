// Global
import React from 'react';
import PropTypes from 'prop-types';
// Components
import ButtonPlus from 'components/common/ButtonPlus';
import Search from 'components/common/Search';
import DropdownFilter from 'components/common/DropdownFilter';
import ButtonFavorite from 'components/common/ButtonFavorite';
// Assets
import GitHubLogo from 'assets/logo/github_logo';
import Cards2Icon from 'assets/icons/cards2';
import AdjustIcon from 'assets/icons/adjust'
// Stylesheet
import './index.scss';

function Navbar({ onClick, onChange, value, onClickOrder, onClickFavoriteFilter, valueFavoriteFilter }) {

  const data = [
    { name: 'Stars', key: 'stargazers_count' },
    { name: 'Forks', key: 'forks_count' },
    { name: 'Opens Issues', key: 'open_issues' },
    { name: 'Age', key: 'created_at' },
    { name: 'Last Commit', key: 'updated_at' },
  ]

  return (
    <div className='nav'>
      <div className='nav_github-logo'>
        <GitHubLogo />
      </div>
      <div className='nav_title'>GitHub Compare</div>
      <DropdownFilter 
        title="Filter and order"
        titleOptions="ORDER BY"
        data={data}
        onClick={onClickOrder}
      />
      <Search 
        style={{ width: '519px' }}
        placeholder="Search"
        onChange={onChange}
        value={value}
      />
      <div className='nav_star-o'>
        <ButtonFavorite onClick={onClickFavoriteFilter} value={valueFavoriteFilter} />
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
  onClickOrder: PropTypes.func,
  value: PropTypes.string,
}

export default Navbar;
