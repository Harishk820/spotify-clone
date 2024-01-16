import React, { useEffect } from 'react';
import SpotifyWebApi from "spotify-web-api-js";
import Login from './Components/Login';
import { getTokenFromUrl } from './spotify';
import { useState } from 'react';
import Player from './Components/Player';
// creating the instace of spotify through spotifyWebApi()
//SpotifyWebApi() is a constructor
const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState();

  useEffect(() => {
    // Set token
    const hash = getTokenFromUrl();
    window.location.hash = "";
    let _token = hash.access_token;

    if (_token) {
      setToken(_token);
      //
      spotify.setAccessToken(_token);
      // get user Details after authentication
      spotify.getMe().then(user => {
        console.log("user: ", user);
      })
    }

    console.log('token>>>', token);
  }, [token]);


  return (
    <div className='app'>

      {!token ? <Login /> : <Player />}

    </div>
  )
}

export default App;
