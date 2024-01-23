import React from 'react';
import "../styles/SongRow.css";


function SongRow({ track, playSong, index }) {
  console.log('track:-', track);
  console.log('track.id::', track.id);

  const ms = track.duration_ms;
  const msToMinutesAndSeconds = (ms) => {
    var minutes = Math.floor(ms / 60000);
    var seconds = ((ms % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  };


  //track.album.name
  //track.duration_ms

  return (
    <div className='songRow_wrapper'>
      <div className="songRow" onClick={() => playSong(track.id)}>
        <div className="songRow_songNo">
          <span>{index + 1}</span>
        </div>

        <div className='songRow_imgAndASong'>

          <img className="songRow__album" src={track.album.images[0].url} alt="" />
          <div className="songRow__info">
            <h1>{track.name}</h1>
            <p>
              {track.artists.map((artist) => artist.name).join(", ")}
            </p>
          </div>
        </div>



        <div className='songRow_albumAndDuration'>
          <p>{track.album.name}</p>
          <p>{msToMinutesAndSeconds(ms)}</p>
        </div>


      </div>
    </div>
  );
}

export default SongRow;
