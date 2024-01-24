import React from 'react';
import '../styles/Player.css';
import Sidebar from './Sidebar';
import Body from './Body';
import Footer from './Footer';

function Player({ spotify }) {
  return (
    <div className='player'>

      <div className='player_body'>

        {/* sidebar */}
        <Sidebar spotify={spotify} />

        {/* body */}
        <Body />
      </div>
      <Footer spotify={spotify} />
      {/* footer */}
    </div>
  )
}

export default Player;
