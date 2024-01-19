import React from 'react';
import Header from './Header';
import '../styles/Body.css';

function Body({ spotify }) {
  return (
    <div className='body'>
      <Header spotify={spotify} />
      <h1>body</h1>
    </div>
  )
}

export default Body;
