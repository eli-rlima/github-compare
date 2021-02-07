// Global
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useDebounce } from 'use-debounce';
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
// Actions
import { show } from 'redux/actions/popup.action';
import { 
  search as searchAction,
  orderBy,
  favoriteFilter as favoriteFilterAction, 
} from 'redux/actions/repositories.action';
// Stylesheet
import './index.scss';

function Navbar() {
  const data = [
    { name: 'Stars', key: 'stargazers_count' },
    { name: 'Forks', key: 'forks_count' },
    { name: 'Opens Issues', key: 'open_issues' },
    { name: 'Age', key: 'created_at' },
    { name: 'Last Commit', key: 'updated_at' },
  ];
  const [search, setSearch] = useState('');
  const [favoriteFilter, setFavoriteFilter] = useState(false);
  const dispatch = useDispatch();
  const { isOpened } = useSelector(state => state.popup);
  const { data: dataRepositories } = useSelector(state => state.repositories);

  const onChange = (e, target) => {
    const { value } = target || e.target;

    setSearch(value)
    if (dataRepositories.length > 0) {
      dispatch(searchAction(value));
    }
  }

  const onClickOrder = key => {
    dispatch(orderBy(key));
  }

  const onClickFavoriteFilter = () => {
    setFavoriteFilter(!favoriteFilter);
    dispatch(favoriteFilterAction(!favoriteFilter));
  }

  const clearSearch = () => {
    if (dataRepositories.length === 0) {
      setSearch('');
    }
  }

  useDebounce(clearSearch, 300);

  const showPopup = action => {
    dispatch(show(action));
  }

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
        value={search}
      />
      <div className='nav_star-o'>
        <ButtonFavorite onClick={onClickFavoriteFilter} value={favoriteFilter} />
      </div>
      <div className='nav_adjust'>
        <AdjustIcon />
      </div>
      <div className='nav_cards2'>
        <Cards2Icon />
      </div>
      <div className='nav_button-add'>
        <ButtonPlus onClick={() => showPopup(!isOpened)} />
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
