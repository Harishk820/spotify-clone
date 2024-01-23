import React from 'react'
import '../styles/Login.css'
import { loginUrl } from '../spotify';

function Login() {
  return (
    <div className='login'>
      {/* spotify logo */}
      <img
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Black.png"
        alt="spotify"
      />

      {/* login eith spotify button */}
      <a href={loginUrl}>Connect Spotify</a>
    </div>
  )
}

export default Login;
