// Global
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useDebounce } from 'use-debounce';
// Components
import Navbar from 'components/Navbar';
import EmptyState from 'components/EmptyState';
import NewRepoPopup from 'components/NewRepoPopup';
import Grid from 'components/Grid';
import DeleteModal from 'components/DeleteModal';
// Actions
import { show } from 'redux/actions/popup.action';
import { 
  search as searchAction,
  orderBy,
  favoriteFilter as favoriteFilterAction, 
} from 'redux/actions/repositories.action';
// Stylesheet
import './App.scss';

function App() {
  const [search, setSearch] = useState('');
  const [favoriteFilter, setFavoriteFilter] = useState(false);
  const dispatch = useDispatch();
  const { isOpened } = useSelector(state => state.popup);
  const { filter, data } = useSelector(state => state.repositories);
  const { data: dataFilter } = filter;

  const onChange = (e, target) => {
    const { value } = target || e.target;

    setSearch(value)
    if (data.length > 0) {
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
    if (data.length === 0) {
      setSearch('');
    }
  }

  useDebounce(clearSearch, 300);

  const showPopup = action => {
    dispatch(show(action));
  }

  return (
    <div className='App'>
      <Navbar 
        onClick={() => showPopup(!isOpened)}
        onClickOrder={onClickOrder}
        onChange={onChange}
        onClickFavoriteFilter={onClickFavoriteFilter}
        value={search}
        valueFavoriteFilter={favoriteFilter}
      />
      <div className='body'>
        {dataFilter.length > 0 ? <Grid data={dataFilter} as="grid" /> : <EmptyState />}
      </div>
      <NewRepoPopup />
      <DeleteModal />
    </div>
  );
}

export default App;
