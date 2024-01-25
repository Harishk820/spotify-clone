import React from 'react';
import '../styles/Header.css';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useDataLayerValue } from '../utils/DataLayer';

function Header({ spotify }) {

  const [{ user }] = useDataLayerValue();
  //console.log(user);
  return (
    <div className='header'>

      <div className='header__left'>
        <SearchIcon />
        <input
          placeholder="Search for Artists, Songs, or Podcasts "
          type="text"
        />
      </div>
      <div className='header__right'>
        <AccountCircleIcon fontSize='large' />
        {/* <h4>Harish Kumar</h4> */}
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  )
}

export default Header;
