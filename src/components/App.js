// Global
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// Components
import Navbar from 'components/Navbar';
import EmptyState from 'components/EmptyState';
import NewRepoPopup from 'components/NewRepoPopup';
import Grid from 'components/Grid';
// Actions
import { show } from 'redux/actions/popup.action';
// Stylesheet
import './App.scss';

function App() {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const { isOpened } = useSelector(state => state.popup);
  const { data } = useSelector(state => state.repositories.filter);

  const onChange = (e, target) => {
    const { value } = target || e.target;

    setSearch(value);
  }

  const showPopup = action => {
    dispatch(show(action));
  }

  return (
    <div className='App'>
      <Navbar 
        onClick={() => showPopup(!isOpened)}
        onChange={onChange}
        value={search}
      />
      <div className='body'>
        {data.length > 0 ? <Grid data={data} as="grid" /> : <EmptyState />}
      </div>
      <NewRepoPopup />
    </div>
  );
}

export default App;
