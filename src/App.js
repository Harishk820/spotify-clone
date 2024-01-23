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
  const [{ user, token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    // Set token
    const hash = getTokenFromUrl();
    window.location.hash = "";
    let _token = hash.access_token;

    //console.log("_token----", _token);
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

    }

    spotify.getUserPlaylists().then((playlists) => {
      dispatch({
        type: "SET_PLAYLISTS",
        playlists: playlists,
      });
    });

  }, [token, dispatch]);

  //console.log("user from datalayer: ", user);

  return (
    <div className='app'>

      {token ? <Player spotify={spotify} /> : <Login />}

    </div>
  )
}

export default App;
