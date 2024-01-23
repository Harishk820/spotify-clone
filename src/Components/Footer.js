import React from 'react';
import { useEffect } from 'react';
import { useDataLayerValue } from '../utils/DataLayer';
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


function Footer({ spotify }) {
  const [{ token, item, playing }, dispatch] = useDataLayerValue();

  // useEffect(() => {
  //   spotify.getMyCurrentPlaybackState().then((r) => {
  //     console.log('current playbackState:', r);

  //     dispatch({
  //       type: "SET_PLAYING",
  //       playing: r.is_playing,
  //     });

  //     dispatch({
  //       type: "SET_ITEM",
  //       item: r.item,
  //     });
  //   });
  // }, [spotify]);

  const handlePlayPause = () => {
    if (playing) {
      spotify.pause();
      dispatch({
        type: "SET_PLAYING",
        playing: false,
      });
    } else {
      spotify.play();
      dispatch({
        type: "SET_PLAYING",
        playing: true,
      });
    }
  };

  const skipNext = () => {
    spotify.skipToNext();
    spotify.getMyCurrentPlayingTrack().then((r) => {
      dispatch({
        type: "SET_ITEM",
        item: r.item,
      });
      dispatch({
        type: "SET_PLAYING",
        playing: true,
      });
    });
  };

  const skipPrevious = () => {
    spotify.skipToPrevious();
    spotify.getMyCurrentPlayingTrack().then((r) => {
      dispatch({
        type: "SET_ITEM",
        item: r.item,
      });
      dispatch({
        type: "SET_PLAYING",
        playing: true,
      });
    });
  };


  return (
    <div className='footer'>
      {/* footer left */}
      <div className='footer__left'>
        <img className='footer__albumLogo' src={item?.album.images[0].url}
          alt={item?.name}></img>
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
        <PlaylistPlayIcon />
        <VolumeDownIcon />
        <Slider className='slider' />

      </div>
    </div>
  )
}

export default Footer;
