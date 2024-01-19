import React from 'react';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import Grid from '@mui/material/Grid';
import Slider from '@mui/material/Slider';
import '../styles/Footer.css'


function Footer() {
  return (
    <div className='footer'>
      {/* footer left */}
      <div className='footer__left'>
        <img className='footer__albumLogo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXbOJse5MEnQyqITf3TIz1uLw5Is321AfFdw&usqp=CAU' alt='img'></img>
        <div className='footer__songInfo'>
          <h4>hello</h4>
          <p>user</p>
        </div>
      </div>
      {/* footer center */}
      <div className='footer__center'>
        <ShuffleIcon className='footer__green' />
        <SkipPreviousIcon className='footer__icon' />
        <PlayCircleIcon fontSize='large' className='footer__icon' />
        <SkipNextIcon className='footer__icon' />
        <RepeatIcon className='footer__green' />
      </div>
      {/* footer right */}
      <div className='footer__right'>
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Footer;
