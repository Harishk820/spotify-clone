import React, { useEffect } from 'react';
import SpotifyWebApi from "spotify-web-api-js";
import Login from './Components/Login';
import { getTokenFromUrl } from './spotify';
import Player from './Components/Player';
import { useDataLayerValue } from './utils/DataLayer';


// creating the instace of spotify through spotifyWebApi()
//SpotifyWebApi() is a constructor
const spotify = new SpotifyWebApi();

function App() {

  // datalayer.user= {user}
  const [{ token, user }, dispatch] = useDataLayerValue();

  useEffect(() => {
    // Set token
    const hash = getTokenFromUrl();
    window.location.hash = "";
    let _token = hash.access_token;

    //console.log("_token --", _token);
    if (_token) {
      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      });

      spotify.setAccessToken(_token);
      // get user Details after authentication
      spotify.getMe().then((user) => {
        dispatch({
          type: 'SET_USER',
          user: user,
        });
      });

      dispatch({
        type: "SET_SPOTIFY",
        spotify: spotify,
      });

      spotify.getPlaylist("37i9dQZEVXcKnQn3bFaAT7").then((response) =>
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
      );




      // ---------------_-------------------------

      async function getDiscoverWeeklyPlaylist(token) {

        spotify.setAccessToken(token);

        try {
          // Retrieve the user's playlists
          const userPlaylists = await spotify.getUserPlaylists();

          // Find the "Discover Weekly" playlist
          const discoverWeeklyPlaylist = userPlaylists.items.find(playlist => playlist.name === 'Discover Weekly');

          // Check if the "Discover Weekly" playlist was found
          if (discoverWeeklyPlaylist) {
            const playlistId = discoverWeeklyPlaylist.id;
            console.log(`Discover Weekly Playlist ID: ${playlistId}`);
            return playlistId;
          } else {
            console.log('Discover Weekly playlist not found.');
            return null;
          }
        } catch (error) {
          console.error(`Error: ${error.message}`);
          return null;
        }
      }

      // Replace 'YOUR_ACCESS_TOKEN' with the actual access token
      const accessToken = 'YOUR_ACCESS_TOKEN';
      getDiscoverWeeklyPlaylist(accessToken);


    }
  }, [token, dispatch]);

  // console.log("user from datalayer: ", user);

  return (
    <div className='app'>

      {token ? <Player spotify={spotify} /> : <Login />}

    </div>
  )
}

export default App;
