import React from 'react';
import SongRow from './SongRow';
import Header from './Header';
import '../styles/Body.css';
import { useDataLayerValue } from '../utils/DataLayer';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { AiFillClockCircle } from "react-icons/ai";

// Discover weekly: 37i9dQZEVXcKnQn3bFaAT7
function Body({ spotify }) {
  const [{ discover_weekly, token }] = useDataLayerValue();

  // console.log('discover weekly: ', discover_weekly);

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




  // Function to play a song by track ID
  function playSongByTrackId(trackId) {
    // Construct the Spotify API endpoint for getting track details
    const trackEndpoint = `https://api.spotify.com/v1/tracks/${trackId}`;

    // Fetch the track information using the access token
    fetch(trackEndpoint, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((track) => {
        if (track) {
          // Use the Spotify SDK or another audio player to play the selected track
          // Example using Spotify SDK (Web Playback SDK)
          const player = new spotify.Player({
            name: 'Web Playback SDK',
            getOAuthToken: (cb) => {
              cb(token);
            },
          });

          // Connect to the player
          player.connect().then((success) => {
            if (success) {
              // Play the selected track
              player.play({ uris: [track.uri], })
                .then(() => {
                  console.log(`Playing ${track.name}.`);
                })
                .catch((error) => {
                  console.error('Error playing the track:', error);
                });
            }
          });
        } else {
          console.error('Track not found.');
        }
      })
      .catch((error) => {
        console.error('Error fetching track details:', error);
      });
  }

  // playSongByTrackId(trackId);





  // const playSong = (id) => {
  //   spotify.play({
  //     uri: `spotify:track:${id}`,
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
        <SongRow track={item.track} playSongByTrackId={playSongByTrackId} index={index} />
      ))}

    </div>
  )
}

export default Body;
