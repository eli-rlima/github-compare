// Global
import React, { useState } from 'react';
// Components
import Navbar from 'components/Navbar';
import EmptyState from 'components/EmptyState';
import NewRepoPopup from 'components/NewRepoPopup';
// Stylesheet
import './App.scss';

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [search, setSearch] = useState('');

  const onChange = (e, target) => {
    const { value } = target || e.target;

    setSearch(value);
  }

  return (
    <div className='App'>
      <Navbar 
        onClick={() => setShowPopup(!showPopup)}
        onChange={onChange}
        value={search}
      />
      <div className='body'>
        <EmptyState />
        <NewRepoPopup 
          show={showPopup} 
          onClickCancel={() => setShowPopup(false)}
          error={false} 
        />
      </div>
    </div>
  );
}

export default App;
