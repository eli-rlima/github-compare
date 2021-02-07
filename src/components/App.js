// Global
import React from 'react';
import { useSelector } from 'react-redux';
// Components
import Navbar from 'components/Navbar';
import EmptyState from 'components/EmptyState';
import NewRepoPopup from 'components/NewRepoPopup';
import Grid from 'components/Grid';
import DeleteModal from 'components/DeleteModal';

// Stylesheet
import './App.scss';

function App() {
  const { data: dataFilter } = useSelector(state => state.repositories.filter);

  return (
    <div className='App'>
      <Navbar />
      <div className='body'>
        {dataFilter.length > 0 ? <Grid data={dataFilter} as="grid" /> : <EmptyState />}
      </div>
      <NewRepoPopup />
      <DeleteModal />
    </div>
  );
}

export default App;
