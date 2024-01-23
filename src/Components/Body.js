import React from 'react';
import SongRow from './SongRow';
import SS from './SS';
import Header from './Header';
import '../styles/Body.css';
import { useDataLayerValue } from '../utils/DataLayer';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { AiFillClockCircle } from "react-icons/ai";

// Discover weekly: 37i9dQZEVXcKnQn3bFaAT7
function Body({ spotify }) {
  const [{ discover_weekly }, dispatch] = useDataLayerValue();

  console.log('discover weekly: ', discover_weekly);

  // const playPlaylist = (id) => {
  //   spotify.play({
  //     context_uri: `spotify:playlist:37i9dQZEVXcKnQn3bFaAT7`,
  //   }).then((res) => {
  //     spotify.getMyCurrentPlayingTrack().then((response) => {
  //       dispatch({
  //         type: "SET_ITEM",
  //         item: response.item,
  //       });
  //       dispatch({
  //         type: "SET_PLAYING",
  //         playing: true,
  //       });
  //     });
  //   });
  // };

  const playSong = (id) => {
    spotify.play({
      uris: [`spotify:track:${id}`],
    }).then((res) => {
      spotify.getMyCurrentPlayingTrack().then((response) => {
        dispatch({
          type: "SET_ITEM",
          item: response.item,
        });
        dispatch({
          type: "SET_PLAYING",
          playing: true,
        });
      });
    });
  };



  return (
    <div className='body'>
      <Header spotify={spotify} />

      <div className="body__info">
        <img src={discover_weekly?.images[0].url} alt="" />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>

      {/*songs AFTER-- WEEKLY SONGS BANNER */}
      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledIcon
            className="body__shuffle"
          // onClick={playPlaylist}
          />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>


        {/* titles -- album---- timer*/}
        <div className="header_row">
          <div className="col">
            <span>#</span>
          </div>
          <div className="col">
            <span>TITLE</span>
          </div>
          <div className="col">
            <span>ALBUM</span>
          </div>
          <div className="col">
            <span>
              <AiFillClockCircle />
            </span>
          </div>
        </div>

      </div>

      {/* LIST OF SONGS */}
      {discover_weekly?.tracks.items.map((item, index) => (
        <SongRow track={item.track} index={index} playSong={playSong} />
      ))}

    </div>
  )
}

export default Body;
