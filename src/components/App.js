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

  return (
    <div className='App'>
      <Navbar 
        onClick={() => setShowPopup(!showPopup)}
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
