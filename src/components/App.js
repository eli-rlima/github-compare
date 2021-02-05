// Global
import React from 'react';
// Components
import Navbar from 'components/Navbar';
import EmptyState from 'components/EmptyState';
// Stylesheet
import './App.scss';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <div className='body'>
        <EmptyState />
      </div>
    </div>
  );
}

export default App;
